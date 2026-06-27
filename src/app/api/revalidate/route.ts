import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

/**
 * microCMS Webhook → オンデマンド再生成。
 * 記事を公開/更新したら microCMS がここに POST し、magazine 系のキャッシュを破棄する。
 *
 * 認証（どちらかを満たせばOK）:
 *   - ヘッダー X-MICROCMS-Signature（HMAC-SHA256, 署名キー = MICROCMS_WEBHOOK_SECRET）
 *   - クエリ ?secret=＜MICROCMS_WEBHOOK_SECRET＞（手動テスト用 curl）
 *
 * MICROCMS_WEBHOOK_SECRET 未設定時は 503（開けっ放しの再生成口にしない）。
 *
 * ※ 実際にページが差し替わるには open-next の incrementalCache を "dummy" 以外
 *   （R2 等）にする必要がある。docs/DATA_FRESHNESS.md を参照。
 */

export const dynamic = "force-dynamic";

function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

async function hmacHex(secret: string, body: string): Promise<string> {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    enc.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const sig = await crypto.subtle.sign("HMAC", key, enc.encode(body));
  return [...new Uint8Array(sig)]
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function POST(request: Request) {
  const secret = process.env.MICROCMS_WEBHOOK_SECRET;
  if (!secret) {
    return NextResponse.json(
      { revalidated: false, error: "MICROCMS_WEBHOOK_SECRET is not set" },
      { status: 503 },
    );
  }

  const url = new URL(request.url);
  const body = await request.text();

  const signature = request.headers.get("x-microcms-signature");
  const queryToken = url.searchParams.get("secret");

  let authorized = false;
  if (signature) {
    authorized = timingSafeEqual(await hmacHex(secret, body), signature);
  } else if (queryToken) {
    authorized = timingSafeEqual(queryToken, secret);
  }

  if (!authorized) {
    return NextResponse.json(
      { revalidated: false, error: "Unauthorized" },
      { status: 401 },
    );
  }

  // 関連パスを再生成。記事詳細は [slug] パターンでまとめて対象にする。
  revalidatePath("/", "page");
  revalidatePath("/magazine", "page");
  revalidatePath("/magazine/[slug]", "page");
  revalidatePath("/news", "page");

  return NextResponse.json({ revalidated: true, now: Date.now() });
}
