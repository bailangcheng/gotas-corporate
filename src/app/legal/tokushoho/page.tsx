import type { ReactNode } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記",
  description: "特定商取引法に基づく表記を掲載します。",
};

const MAPS_URL =
  "https://www.google.com/maps?cid=9702510033654537488&hl=ja&gl=JP&source=embed";
const SALES_URL =
  "https://www.canva.com/design/DAGkMvH6GZY/Z7X5a_EgyR5XQRaibmv_iQ/view?utm_content=DAGkMvH6GZY&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hb042bc61f0";

function CheckIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className="mt-px shrink-0"
    >
      <rect width="20" height="20" rx="3" fill="#1f1f1f" />
      <path
        d="M4.5 10L8.5 14L15.5 6.5"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      width="18"
      height="20"
      viewBox="0 0 18 20"
      fill="currentColor"
      aria-hidden="true"
      className="shrink-0"
    >
      <path d="M9 0C5.686 0 3 2.686 3 6c0 4.5 6 12 6 12s6-7.5 6-12c0-3.314-2.686-6-6-6zm0 8.5C7.621 8.5 6.5 7.379 6.5 6S7.621 3.5 9 3.5 11.5 4.621 11.5 6 10.379 8.5 9 8.5z" />
    </svg>
  );
}

function Row({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-10 sm:px-10">
      <span className="shrink-0 text-[14px] font-bold leading-normal text-black sm:w-50 sm:text-[16px]">
        {label}
      </span>
      <div className="flex-1 text-[14px] font-bold leading-normal text-black sm:text-[16px]">
        {children}
      </div>
    </div>
  );
}

function HRule() {
  return <div className="h-0 border-t border-line-subtle" />;
}

function Checklist({ items }: { items: string[] }) {
  return (
    <div className="flex flex-col">
      {items.map((item, i) => (
        <div key={i}>
          {i > 0 && <div className="my-5 border-t border-line-subtle" />}
          <div className="flex items-start gap-2.5">
            <CheckIcon />
            <span className="text-[14px] font-bold leading-normal text-black sm:text-[16px]">
              {item}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function TokushohoPage() {
  return (
    <>
      {/* ── RED HERO ──────────────────────────────────────────────────── */}
      <section className="bg-accent">
        <PageHero eyebrow="SCTA Disclosure" title="特定商取引法に基づく表記" />
      </section>

      {/* ── WHITE CONTENT ─────────────────────────────────────────────── */}
      <div className="bg-accent">
        <section className="rounded-tr-[120px] bg-white px-[clamp(20px,5.56vw,80px)] py-30">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col items-start gap-10 lg:flex-row">

              {/* Left label */}
              <div className="flex shrink-0 flex-col gap-1.5 lg:max-w-55">
                <span className="font-display text-[16px] font-bold text-black">
                  Act on Specified
                  <br />
                  Commercial Transactions
                </span>
                <span className="text-[28px] font-bold text-black">
                  特定商取引法に基づく表記
                </span>
              </div>

              {/* Right: disclosure table */}
              <div className="flex-1 rounded-3xl bg-surface p-6 sm:p-10 lg:p-15">
                <div className="flex flex-col gap-8">

                  <Row label="販売事業者名">株式会社GO-TAs</Row>
                  <HRule />

                  <Row label="運営統括責任者">荒川 大晴（取締役）</Row>
                  <HRule />

                  <Row label="所在地">
                    <div className="flex flex-col gap-1.5">
                      <p>
                        〒901-2125
                        <br />
                        沖縄県浦添市仲西1丁目3-25 フロンテージ仲西703
                      </p>
                      <Link
                        href={MAPS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-brand underline"
                      >
                        <LocationIcon />
                        Google Mapsで見る
                      </Link>
                    </div>
                  </Row>
                  <HRule />

                  <Row label="電話番号">
                    ※個別対応のため、電話番号は開示しておりません。お問い合わせは下記メールアドレスまでご連絡ください。
                  </Row>
                  <HRule />

                  <Row label="メールアドレス">info@5plus-staff.com</Row>
                  <HRule />

                  <Row label="販売URL">
                    <Link
                      href={SALES_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="break-all underline"
                    >
                      {SALES_URL}
                    </Link>
                  </Row>
                  <HRule />

                  <Row label="販売価格">各コース詳細ページに記載（税込表示）</Row>
                  <HRule />

                  <Row label="商品代金以外の必要料金">
                    <Checklist
                      items={[
                        "消費税（内税）",
                        "銀行振込をご利用の場合は振込手数料",
                      ]}
                    />
                  </Row>
                  <HRule />

                  <Row label="お支払い方法">
                    <Checklist
                      items={[
                        "クレジットカード決済",
                        "銀行振込",
                        "PayPal",
                        "コンビニ決済（対象コースに限る）",
                      ]}
                    />
                  </Row>
                  <HRule />

                  <Row label="お支払い時期">
                    <Checklist
                      items={[
                        "申込後、当社指定の期日までにお支払いください。",
                        "分割払いやサブスクリプション型契約の場合は、別途ご案内するスケジュールに従ってお支払いください。",
                      ]}
                    />
                  </Row>
                  <HRule />

                  <Row label="商品の引渡し時期">
                    <Checklist
                      items={[
                        "デジタル教材：決済完了後、メールまたは受講専用アプリにて即時提供",
                        "オンライン講義：所定のスケジュールに基づき受講開始",
                      ]}
                    />
                  </Row>
                  <HRule />

                  <Row label="返品・キャンセルについて">
                    <Checklist
                      items={[
                        "役務提供前のキャンセルには、15,000円（税込）の解約料が発生します。",
                        "役務提供開始後の解約については、提供済みサービスの対価および解約手数料（残金の20%または5万円のいずれか低い額）を差し引いた上で、残額を返金いたします。",
                        "クーリング・オフは、契約書面受領日から8日以内であれば可能です。詳細は利用規約に準じます。",
                      ]}
                    />
                  </Row>
                  <HRule />

                  <Row label="免責事項">
                    本サービスで提供されるノウハウ・成功事例などは、すべての方に再現性を保証するものではありません。学習成果や収益は個人差があり、効果をお約束するものではありません。
                  </Row>

                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
