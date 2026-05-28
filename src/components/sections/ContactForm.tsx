"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const DISCARD_CONFIRM_MESSAGE = "入力内容を破棄してページを移動しますか？";

function getFormValue(formData: FormData, key: string): string {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

async function parseInquiryResponse(
  response: Response,
): Promise<{ ok?: boolean; message?: string }> {
  const text = await response.text();
  if (!text) return {};
  try {
    return JSON.parse(text) as { ok?: boolean; message?: string };
  } catch {
    return {};
  }
}

type Status = { type: "success" | "error"; message: string } | null;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<Status>(null);
  const [isDirty, setIsDirty] = useState(false);

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

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = getFormValue(formData, "name");
    const kana = getFormValue(formData, "kana");
    const company = getFormValue(formData, "company");
    const email = getFormValue(formData, "email");
    const emailConfirm = getFormValue(formData, "emailConfirm");
    const message = getFormValue(formData, "message");
    const privacy = formData.get("privacy") === "on";

    if (!name || !company || !email || !message) {
      setStatus({ type: "error", message: "必須項目を入力してください。" });
      return;
    }
    if (email !== emailConfirm) {
      setStatus({
        type: "error",
        message: "メールアドレスと確認用メールアドレスが一致しません。",
      });
      return;
    }
    if (!privacy) {
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
          company,
          email,
          message,
        }),
      });
      const data = await parseInquiryResponse(response);

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

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      onInput={() => setIsDirty(true)}
      onChange={() => setIsDirty(true)}
      className="grid gap-6"
    >
      <Field label="ご氏名" name="name" required />
      <Field label="ご氏名（カナ）" name="kana" />
      <Field
        label="会社・団体名（個人の方は「個人」と記載ください）"
        name="company"
        required
      />
      <Field
        label="メールアドレス"
        name="email"
        type="email"
        placeholder="例）mail@example.com"
        required
      />
      <Field
        label="メールアドレス（確認）"
        name="emailConfirm"
        type="email"
        placeholder="例）mail@example.com"
        required
      />
      <Field label="お問い合わせ内容" name="message" textarea required />

      <label className="mt-2 flex items-start gap-3 text-sm leading-7 text-[var(--color-ink-soft)]">
        <input
          type="checkbox"
          name="privacy"
          required
          className="mt-1.5 size-4 accent-[var(--color-brand)]"
        />
        <span>
          <Link
            href="/privacy-policy"
            className="font-semibold text-[var(--color-brand)] underline"
          >
            プライバシーポリシー
          </Link>
          に同意する（必須）
        </span>
      </label>

      <div className="mt-2 flex flex-col items-center gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex min-h-14 min-w-[220px] items-center justify-center rounded-full border border-black bg-[var(--color-ink)] px-7 text-sm font-bold text-white shadow-[var(--shadow-soft)] transition hover:-translate-y-0.5 hover:bg-[var(--color-brand)] disabled:pointer-events-none disabled:opacity-60"
        >
          {isSubmitting ? "送信中..." : "送信する"}
        </button>
        {status ? (
          <p
            role={status.type === "error" ? "alert" : "status"}
            className={`text-sm font-semibold ${
              status.type === "error"
                ? "text-[var(--color-accent)]"
                : "text-[var(--color-green)]"
            }`}
          >
            {status.message}
          </p>
        ) : null}
      </div>
    </form>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  textarea?: boolean;
  required?: boolean;
};

function Field({
  label,
  name,
  type = "text",
  placeholder,
  textarea = false,
  required = false,
}: FieldProps) {
  return (
    <div className="grid gap-2">
      <label
        htmlFor={name}
        className="text-sm font-semibold text-[var(--color-ink)]"
      >
        {label}
        {required ? (
          <span className="ml-1 text-[var(--color-accent)]">*</span>
        ) : null}
      </label>
      {textarea ? (
        <textarea
          id={name}
          name={name}
          required={required}
          rows={8}
          className="w-full resize-y rounded-[var(--radius-sm)] border border-[var(--color-line-subtle)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-ink)] outline-none transition focus:border-[var(--color-brand)] focus:bg-white"
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
          className="h-12 w-full rounded-[var(--radius-sm)] border border-[var(--color-line-subtle)] bg-[var(--color-surface)] px-4 text-sm text-[var(--color-ink)] outline-none transition placeholder:text-[var(--color-ink-muted)] focus:border-[var(--color-brand)] focus:bg-white"
        />
      )}
    </div>
  );
}
