import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "GO-TAsへのお問い合わせフォームです。",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="なんでもお問い合わせフォーム"
        summary="事業、採用、取材、協業など、GO-TAsへのお問い合わせはこちらから。"
      />
      <section className="py-14 sm:py-16">
        <Container>
          <div className="rounded-lg border border-slate-200 bg-white p-6 sm:p-8">
            <p className="text-sm font-semibold text-blue-700">Form placeholder</p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-950">フォーム実装方針</h2>
            <p className="mt-4 max-w-3xl leading-8 text-slate-700">
              本番では、Google Form / Formspree / Next.js API + メール送信のいずれかを選定します。
              個人情報の保存が必要な場合は、別途データ管理方針を確認します。
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {["お名前", "メールアドレス", "お問い合わせ種別", "お問い合わせ内容"].map((label) => (
                <div key={label} className="rounded-md border border-dashed border-slate-300 px-4 py-3 text-sm text-slate-500">
                  {label}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

