import { NextResponse } from "next/server";
import { Resend } from "resend";

interface InquiryPayload {
  type?: "contact" | "meeting";
  name?: string;
  kana?: string;
  company?: string;
  email?: string;
  message?: string;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function getMailSettings(type: "contact" | "meeting") {
  if (type === "meeting") {
    return {
      resendApiKey: process.env.MEETING_RESEND_API_KEY ?? process.env.RESEND_API_KEY,
      from: process.env.MEETING_INQUIRY_FROM_EMAIL ?? process.env.INQUIRY_FROM_EMAIL,
      to: process.env.MEETING_INQUIRY_TO_EMAIL ?? process.env.INQUIRY_TO_EMAIL,
    };
  }

  return {
    resendApiKey: process.env.CONTACT_RESEND_API_KEY ?? process.env.RESEND_API_KEY,
    from: process.env.CONTACT_INQUIRY_FROM_EMAIL ?? process.env.INQUIRY_FROM_EMAIL,
    to: process.env.CONTACT_INQUIRY_TO_EMAIL ?? process.env.INQUIRY_TO_EMAIL,
  };
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as InquiryPayload;
    const name = body.name?.trim() ?? "";
    const company = body.company?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const message = body.message?.trim() ?? "";
    const kana = body.kana?.trim() ?? "";
    const type = body.type ?? "contact";

    if (!name || !company || !email || !message) {
      return NextResponse.json(
        { ok: false, message: "必須項目が未入力です。" },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { ok: false, message: "メールアドレスの形式が正しくありません。" },
        { status: 400 },
      );
    }

    const { resendApiKey, to, from } = getMailSettings(type);

    if (!resendApiKey || !to || !from) {
      return NextResponse.json(
        { ok: false, message: "メール送信設定が未完了です。管理者にお問い合わせください。" },
        { status: 500 },
      );
    }
    const resend = new Resend(resendApiKey);

    const subjectPrefix = type === "meeting" ? "[無料作戦会議]" : "[お問い合わせ]";
    const subject = `${subjectPrefix} ${name} 様から新規送信`;
    const textBody = [
      `種別: ${type}`,
      `氏名: ${name}`,
      `氏名（カナ）: ${kana || "-"}`,
      `会社・団体名: ${company}`,
      `メールアドレス: ${email}`,
      "",
      "内容:",
      message,
    ].join("\n");

    const htmlBody = `
      <h2>${escapeHtml(subjectPrefix)} 新規送信</h2>
      <p><strong>種別:</strong> ${escapeHtml(type)}</p>
      <p><strong>氏名:</strong> ${escapeHtml(name)}</p>
      <p><strong>氏名（カナ）:</strong> ${escapeHtml(kana || "-")}</p>
      <p><strong>会社・団体名:</strong> ${escapeHtml(company)}</p>
      <p><strong>メールアドレス:</strong> ${escapeHtml(email)}</p>
      <hr />
      <p><strong>内容</strong></p>
      <p>${escapeHtml(message).replaceAll("\n", "<br />")}</p>
    `;

    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject,
      text: textBody,
      html: htmlBody,
    });
    if (error) {
      console.error("[inquiry] resend send error:", error);
      return NextResponse.json(
        {
          ok: false,
          message:
            process.env.NODE_ENV === "development"
              ? `メール送信に失敗しました: ${error.message}`
              : "メール送信に失敗しました。時間をおいてお試しください。",
        },
        { status: 500 },
      );
    }

    return NextResponse.json({
      ok: true,
      message: "送信を受け付けました。ありがとうございます。",
    });
  } catch (error) {
    console.error("[inquiry] unexpected error:", error);
    return NextResponse.json(
      {
        ok: false,
        message:
          process.env.NODE_ENV === "development" && error instanceof Error
            ? `送信中にエラーが発生しました: ${error.message}`
            : "送信中にエラーが発生しました。",
      },
      { status: 500 },
    );
  }
}
