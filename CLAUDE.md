@AGENTS.md

## RULE: UIを変更する前に必ずこのセクションを確認すること

色・フォント・スペーシングのクラスを使う前に、以下の表で正しいクラス名を確認する。
存在しないクラスは絶対に使わない。推測・でっちあげ禁止。

---

## カラー（Tailwind クラス早見表）

> ソース: `src/app/globals.css` の `@theme inline {}`
> Figma パレット: FF3F31 / 0071EB / FFBE00 / 00AB41 / 111111 / 000000 / FFFFFF / D9D9D9 / F4F4F4

| Tailwind クラス       | 実値        | 用途                     |
|-----------------------|-------------|--------------------------|
| `text-foreground`     | `#111111`   | 本文テキスト（メイン）   |
| `text-ink`            | `#111111`   | 同上（直接指定用）        |
| `text-ink-soft`       | `#333333`   | やや薄いテキスト          |
| `text-ink-muted`      | `#666666`   | 補助テキスト              |
| `text-black`          | `#000000`   | 純黒                      |
| `bg-background`       | `#ffffff`   | 背景白                    |
| `text-brand`          | `#0071eb`   | ブランドブルー（Figma: 0071EB）|
| `text-brand-dark`     | `#0058b8`   | 濃いブルー                |
| `bg-brand-soft`       | `#e8f3ff`   | 薄いブルー背景            |
| `text-accent`         | `#ff3f31`   | アクセントレッド（Figma: FF3F31）|
| `bg-accent-soft`      | `#fff0ef`   | 薄いレッド背景            |
| `text-yellow`         | `#ffbe00`   | 黄色（Figma: FFBE00）     |
| `text-green`          | `#00ab41`   | 緑（Figma: 00AB41）       |
| `bg-surface`          | `#f4f4f4`   | グレー背景（Figma: F4F4F4）|
| `bg-surface-warm`     | `#eeeeee`   | やや温かいグレー背景      |
| `bg-surface-blue`     | `#f6f9fc`   | 薄青背景                  |
| `bg-surface-contrast` | `#111111`   | コントラスト背景          |
| `border-line`         | `#222222`   | 濃いボーダー              |
| `border-line-subtle`  | `#d9d9d9`   | 薄いボーダー（Figma: D9D9D9）|
| `border-blue-border`  | `#4385f4`   | 青ボーダー                |

**存在しないクラス（使わないこと）**:
`text-monora-blue`, `text-dark`, `text-primary`, `bg-primary` など。

---

## フォント

> ソース: `src/app/globals.css` :root + `src/app/layout.tsx` `<head>` リンク

| CSS 変数 / Tailwind クラス | フォント                                  | 用途               |
|---------------------------|-------------------------------------------|--------------------|
| `font-sans` / `--font-sans-jp` | Zen Kaku Gothic New → Noto Sans JP → システムフォント | 本文・UI テキスト |
| `font-display` / `--font-display` | Futura (Cyrillic) → Avenir Next → Arial Black → JP fallback | 見出し・数字・英字ディスプレイ |

**ローカルフォント (`public/fonts/`):**
- `FuturaCyrillicBook/Light/Medium/Demi/Bold/ExtraBold/Heavy.ttf` → `font-family: "Futura"` (weight 400〜900)
- `ZenKakuGothicNew-Light/Regular/Medium/Bold/Black.ttf` → `font-family: "Zen Kaku Gothic New"` (weight 300〜900)

**Google Fonts (fallback):** `layout.tsx` `<head>` で Noto Sans JP のみ読み込み

---

## スペーシング・レイアウト

| CSS 変数                  | 値                          | 用途              |
|---------------------------|-----------------------------|-------------------|
| `--space-page-x`          | `clamp(1.25rem, 2.78vw, 2.5rem)` | 左右パディング  |
| `--space-section-y`       | `clamp(4rem, 8vw, 7.5rem)` | セクション縦余白  |
| `--layout-header-height`  | `80px`                     | ヘッダー高さ       |
| `--layout-container`      | `72rem`                    | 標準コンテナ幅     |
| `--layout-wide`           | `90rem`                    | ワイドコンテナ幅   |

---

## シャドウ

| Tailwind クラス | 値                         |
|-----------------|----------------------------|
| `shadow-card`   | `4px 6px 0 0 #000000`     |
| `shadow-soft`   | `2px 3px 0 0 #000000`     |

---

## ルーティング

| パス          | ファイル                             | 備考                        |
|---------------|--------------------------------------|-----------------------------|
| `/`           | `src/app/page.tsx`                   | ホーム                      |
| `/contact`    | `src/app/contact/page.tsx`           | コンタクトフォーム           |
| `/privacy`    | `src/app/[...slug]/page.tsx`         | プライバシーポリシー等       |
| `/business/*` | `src/app/business/`                  | ビジネスページ群             |
| `/magazine`   | `src/app/magazine/page.tsx`          | マガジン一覧                |
| `/magazine/[slug]` | `src/app/magazine/[slug]/page.tsx` | 記事詳細               |

---

## 変更時チェックリスト

- [ ] 色クラスを使う前に上記カラー表で確認した
- [ ] フォントクラスを使う前に上記フォント表で確認した
- [ ] SP/PCの両ブロックを両方変更した（`hidden md:flex` / `flex md:hidden`）
- [ ] `next/font/google` を使っていない（Turbopackと非互換）
- [ ] JSX内でASCIIの `"..."` を直書きしていない（`{'...'}` か `「」` を使う）
