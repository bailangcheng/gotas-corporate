import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description:
    "株式会社GO-TAsは、個人情報保護の仕組みを構築し、全従業員に個人情報保護の重要性の認識と取組みを徹底させることにより、個人情報の保護を推進致します。",
};

const intro =
  "株式会社GO-TAs（以下「当社」といいます）は、以下のとおり個人情報保護方針を定め、個人情報保護の仕組みを構築し、全従業員に個人情報保護の重要性の認識と取組みを徹底させることにより、個人情報の保護を推進致します。";

const sections = [
  {
    title: "個人情報の管理",
    body: "当社は、お客さまの個人情報を正確かつ最新の状態に保ち、個人情報への不正アクセス・紛失・破損・改ざん・漏洩などを防止するため、セキュリティシステムの維持・管理体制の整備・社員教育の徹底等の必要な措置を講じ、安全対策を実施し個人情報の厳重な管理を行ないます。",
    bullets: null,
  },
  {
    title: "個人情報の利用目的",
    body: "お客さまからお預かりした個人情報は、当社からのご連絡や業務のご案内やご質問に対する回答として、電子メールや資料のご送付に利用いたします。",
    bullets: null,
  },
  {
    title: "個人情報の第三者への開示・提供の禁止",
    body: "当社は、お客さまよりお預かりした個人情報を適切に管理し、次のいずれかに該当する場合を除き、個人情報を第三者に開示いたしません。",
    bullets: [
      "お客さまの同意がある場合",
      "お客さまが希望されるサービスを行なうために当社が業務を委託する業者に対して開示する場合",
      "法令に基づき開示することが必要である場合",
    ],
  },
  {
    title: "個人情報の安全対策",
    body: "当社は、個人情報の正確性及び安全性確保のために、セキュリティに万全の対策を講じています。",
    bullets: null,
  },
  {
    title: "ご本人の照会",
    body: "お客さまがご本人の個人情報の照会・修正・削除などをご希望される場合には、ご本人であることを確認の上、対応させていただきます。",
    bullets: null,
  },
  {
    title: "法令、規範の遵守と見直し",
    body: "当社は、保有する個人情報に関して適用される日本の法令、その他規範を遵守するとともに、本ポリシーの内容を適宜見直し、その改善に努めます。",
    bullets: null,
  },
];

export default function PrivacyPage() {
  return (
    <>
      {/* ── RED HERO ─────────────────────────────────────────── */}
      <section className="bg-accent">
        <PageHero eyebrow="PRIVACY POLICY" title="プライバシーポリシー" />
      </section>

      {/* ── WHITE CONTENT ────────────────────────────────────── */}
      <div className="bg-accent">
        <section className="rounded-tr-[120px] bg-white px-[clamp(20px,5.56vw,80px)] py-[120px]">
          <div className="mx-auto max-w-[1280px]">
            <div className="flex flex-col gap-10 lg:flex-row lg:gap-[152px]">

              {/* Left: sticky label */}
              <div className="shrink-0 lg:sticky lg:top-[calc(var(--layout-header-height)+40px)] lg:self-start lg:w-[220px]">
                <p className="font-display text-[16px] font-bold text-black">Privacy policy</p>
                <p className="mt-1.5 text-[32px] font-bold leading-tight text-black">
                  プライバシーポリシー
                </p>
              </div>

              {/* Right: policy content */}
              <div className="flex flex-1 flex-col gap-[60px]">

                {/* Intro paragraph */}
                <p className="text-[16px] font-bold leading-[2] text-black">{intro}</p>

                <hr className="border-line-subtle" />

                {/* Numbered sections */}
                {sections.map((section, i) => (
                  <div key={section.title}>
                    <div className="flex flex-col gap-5">
                      <h2 className="text-[24px] font-bold text-brand">
                        {i + 1}. {section.title}
                      </h2>
                      <div className="text-[16px] font-bold leading-[2] text-black">
                        <p>{section.body}</p>
                        {section.bullets && (
                          <div className="mt-2 flex flex-col gap-1">
                            {section.bullets.map((bullet) => (
                              <p key={bullet}>・{bullet}</p>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                    {i < sections.length - 1 && <hr className="mt-[60px] border-line-subtle" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
