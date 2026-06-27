"use client";

import { useState } from "react";
import Image from "next/image";

export type Member = {
  /** 肩書き */
  title: string;
  name: string;
  /** ローマ字表記 */
  romaji: string;
  /** プロフィール写真。未設定の場合はグレーのプレースホルダー */
  photo?: string;
  /** 経歴 */
  career: string;
  /** エピソード（折りたたみ表示） */
  episode?: string;
};

function ToggleButton({ open }: { open: boolean }) {
  return (
    <span
      className="grid size-8 shrink-0 place-items-center rounded-full border border-black bg-green drop-shadow-[1px_1px_0_black]"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 14 14"
        className="size-3.5"
        fill="none"
        stroke="black"
        strokeWidth="1.6"
        strokeLinecap="round"
      >
        <path d="M1 7h12" />
        {!open && <path d="M7 1v12" />}
      </svg>
    </span>
  );
}

export function MemberCard({ member }: { member: Member }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col gap-8 rounded-[20px] bg-white p-8 lg:flex-row lg:justify-between lg:gap-[60px] lg:p-[60px]">
      {/* 写真 */}
      <div className="relative size-[140px] shrink-0 overflow-hidden rounded-[10px] bg-[#868d97] lg:size-[280px]">
        {member.photo && (
          <Image
            src={member.photo}
            alt={member.name}
            fill
            sizes="(max-width: 1024px) 140px, 280px"
            className="object-cover"
          />
        )}
      </div>

      {/* 詳細 */}
      <div className="flex flex-1 flex-col gap-6 lg:max-w-[540px] lg:gap-10">
        {/* 肩書き + 氏名 */}
        <div className="flex flex-col gap-3 lg:gap-5">
          <p className="text-[16px] font-bold text-black lg:text-[18px]">{member.title}</p>
          <div className="flex items-baseline gap-3 lg:gap-5">
            <span className="text-[28px] font-bold leading-none text-black lg:text-[36px]">
              {member.name}
            </span>
            <span className="font-display text-[14px] font-bold text-brand lg:text-[16px]">
              {member.romaji}
            </span>
          </div>
        </div>

        <div className="border-t border-line-subtle" />

        {/* 経歴 */}
        <div className="flex flex-col gap-5 lg:gap-6">
          <h3 className="text-[22px] font-bold text-brand lg:text-[28px]">経歴</h3>
          <p className="text-[14px] font-bold leading-[2] text-black lg:text-[16px]">{member.career}</p>
        </div>

        {member.episode && (
          <>
            <div className="border-t border-line-subtle" />

            {/* エピソード（折りたたみ） */}
            <div className="flex flex-col gap-5 lg:gap-6">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-[22px] font-bold text-brand lg:text-[28px]">エピソード</h3>
                <button
                  type="button"
                  onClick={() => setOpen((v) => !v)}
                  aria-expanded={open}
                  className="flex shrink-0 items-center gap-3.5 transition-opacity hover:opacity-70"
                >
                  <span className="text-[14px] font-bold text-black lg:text-[16px]">
                    {open ? "閉じる" : "更に見る"}
                  </span>
                  <ToggleButton open={open} />
                </button>
              </div>
              {open && (
                <p className="whitespace-pre-line text-[14px] font-bold leading-[2] text-black lg:text-[16px]">
                  {member.episode}
                </p>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
