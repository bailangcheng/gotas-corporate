"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const DISCARD_CONFIRM_MESSAGE = "入力内容を破棄してページを移動しますか？";

const BUSINESS_TYPES = [
  "高級配達弁当事業",
  "精肉・食品卸事業",
  "惣菜・弁当事業",
  "沖縄特産品卸売事業",
  "飲食事業",
  "不動産事業",
  "IT事業",
  "デジタルサイネージ事業",
  "人材紹介・スクール事業",
  "その他",
];

type Status = { type: "success" | "error"; message: string } | null;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<Status>(null);
  const [isDirty, setIsDirty] = useState(false);
  const [inquiryTypes, setInquiryTypes] = useState<string[]>([]);
  const [privacyAgreed, setPrivacyAgreed] = useState(false);

  useEffect(() => {
    if (!isDirty) return;

    function handleBeforeUnload(event: BeforeUnloadEvent) {
      event.preventDefault();
      event.returnValue = "";
    }

    function handleDocumentClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest("a[href]");
      if (!(anchor instanceof HTMLAnchorElement)) return;
      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("#") || anchor.target === "_blank") return;
      if (!globalThis.confirm(DISCARD_CONFIRM_MESSAGE)) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }
      setIsDirty(false);
    }

    globalThis.addEventListener("beforeunload", handleBeforeUnload);
    document.addEventListener("click", handleDocumentClick, true);
    return () => {
      globalThis.removeEventListener("beforeunload", handleBeforeUnload);
      document.removeEventListener("click", handleDocumentClick, true);
    };
  }, [isDirty]);

  function toggleType(type: string) {
    setIsDirty(true);
    setInquiryTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type],
    );
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const lastName = (formData.get("lastName") as string)?.trim() ?? "";
    const firstName = (formData.get("firstName") as string)?.trim() ?? "";
    const lastNameKana = (formData.get("lastNameKana") as string)?.trim() ?? "";
    const firstNameKana = (formData.get("firstNameKana") as string)?.trim() ?? "";
    const email = (formData.get("email") as string)?.trim() ?? "";
    const phone = (formData.get("phone") as string)?.trim() ?? "";
    const message = (formData.get("message") as string)?.trim() ?? "";

    const name = [lastName, firstName].filter(Boolean).join(" ");
    const kana = [lastNameKana, firstNameKana].filter(Boolean).join(" ");

    if (!lastName || !firstName || !email || !phone || !message) {
      setStatus({ type: "error", message: "必須項目を入力してください。" });
      return;
    }
    if (inquiryTypes.length === 0) {
      setStatus({
        type: "error",
        message: "お問合せの種類を選択してください。",
      });
      return;
    }
    if (!privacyAgreed) {
      setStatus({
        type: "error",
        message: "プライバシーポリシーへの同意が必要です。",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "contact",
          name,
          kana,
          email,
          phone,
          inquiryTypes,
          message,
        }),
      });

      const text = await response.text();
      let data: { ok?: boolean; message?: string } = {};
      if (text) {
        try {
          data = JSON.parse(text) as { ok?: boolean; message?: string };
        } catch {
          /* ignore */
        }
      }

      if (!response.ok || data.ok === false) {
        setStatus({
          type: "error",
          message:
            data.message ?? "送信に失敗しました。時間をおいてお試しください。",
        });
        return;
      }

      form.reset();
      setIsDirty(false);
      setInquiryTypes([]);
      setPrivacyAgreed(false);
      setStatus({
        type: "success",
        message: data.message ?? "送信を受け付けました。",
      });
    } catch {
      setStatus({ type: "error", message: "送信中にエラーが発生しました。" });
    } finally {
      setIsSubmitting(false);
    }
  }

  const inputClass =
    "h-[46px] w-full rounded-[6px] border border-[#9a9a9a] bg-white px-[9px] text-base text-ink placeholder:text-[#9a9a9a] outline-none focus:border-brand transition-colors";

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      onInput={() => setIsDirty(true)}
      className="flex flex-col gap-7.5"
    >
      <FieldRow label="ご氏名" required>
        <div className="flex gap-2.5">
          <input name="lastName" placeholder="姓" className={inputClass} />
          <input name="firstName" placeholder="名" className={inputClass} />
        </div>
      </FieldRow>

      <FieldRow label="ご氏名（カナ）" required>
        <div className="flex gap-2.5">
          <input name="lastNameKana" placeholder="セイ" className={inputClass} />
          <input name="firstNameKana" placeholder="メイ" className={inputClass} />
        </div>
      </FieldRow>

      <FieldRow label="メールアドレス" required>
        <input
          name="email"
          type="email"
          placeholder="例) info@example.com"
          className={inputClass}
        />
      </FieldRow>

      <FieldRow label="電話番号" required>
        <input
          name="phone"
          type="tel"
          placeholder="例) 012-345-6789"
          className={inputClass}
        />
      </FieldRow>

      <FieldRow label="お問合せの種類" required alignStart>
        <div className="flex flex-col gap-3.5">
          <div className="flex flex-wrap gap-x-10 gap-y-3.5">
            {BUSINESS_TYPES.map((type) => (
              <CheckboxItem
                key={type}
                label={type}
                checked={inquiryTypes.includes(type)}
                onChange={() => toggleType(type)}
              />
            ))}
          </div>
          <p className="text-sm leading-none text-[#9a9a9a]">複数選択可</p>
        </div>
      </FieldRow>

      <FieldRow label="お問合せ内容" required alignStart>
        <textarea
          name="message"
          placeholder="ご質問など、ご自由にお書きください。"
          className="h-45 w-full resize-y rounded-[6px] border border-[#9a9a9a] bg-white p-2.5 text-base text-ink placeholder:text-[#9a9a9a] outline-none focus:border-brand transition-colors"
        />
      </FieldRow>

      <div className="flex items-center justify-center gap-2.5">
        <CheckboxItem
          label=""
          checked={privacyAgreed}
          onChange={() => {
            setPrivacyAgreed((v) => !v);
            setIsDirty(true);
          }}
        />
        <p className="text-sm font-bold leading-none text-black">
          <Link href="/privacy" className="text-brand underline">
            プライバシーポリシー
          </Link>
          に同意
        </p>
      </div>

      <div className="flex flex-col items-center gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="relative flex h-20 w-75 items-center justify-center rounded-full border border-black bg-green text-lg font-bold text-black btn-fill btn-press disabled:pointer-events-none disabled:opacity-60"
        >
          {isSubmitting ? "送信中..." : "送信する"}
          {!isSubmitting && (
            <span className="absolute right-7.5 flex size-8 items-center justify-center rounded-[20px] border border-black bg-white">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M1 7H13M8 2L13 7L8 12"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          )}
        </button>
        {status ? (
          <p
            role={status.type === "error" ? "alert" : "status"}
            className={`text-sm font-semibold ${
              status.type === "error" ? "text-accent" : "text-green"
            }`}
          >
            {status.message}
          </p>
        ) : null}
      </div>
    </form>
  );
}

type FieldRowProps = {
  label: string;
  required?: boolean;
  alignStart?: boolean;
  children: React.ReactNode;
};

function FieldRow({ label, required, alignStart, children }: FieldRowProps) {
  return (
    <div
      className={`flex flex-col gap-2 md:flex-row md:justify-between ${
        alignStart ? "md:items-start" : "md:items-center"
      }`}
    >
      <div className="flex shrink-0 items-center gap-0.5">
        <span className="whitespace-nowrap text-base font-bold text-black">
          {label}
        </span>
        {required && <span className="text-xs text-accent">※</span>}
      </div>
      <div className="md:w-150">{children}</div>
    </div>
  );
}

type CheckboxItemProps = {
  label: string;
  checked: boolean;
  onChange: () => void;
};

function CheckboxItem({ label, checked, onChange }: CheckboxItemProps) {
  return (
    <label className="flex cursor-pointer select-none items-center gap-2.5">
      <span className="relative shrink-0 size-4 rounded-xs border border-[#cdcdcd] bg-white">
        {checked && (
          <span className="absolute top-0.5 left-0.75 size-2 rounded-[1px] bg-brand" />
        )}
      </span>
      {label && (
        <span className="whitespace-nowrap text-sm font-bold leading-none text-black">
          {label}
        </span>
      )}
      <input
        type="checkbox"
        className="sr-only"
        checked={checked}
        onChange={onChange}
      />
    </label>
  );
}
