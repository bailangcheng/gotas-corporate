# テスト記事のフィールド値

microCMS の各フィールドにそのままコピペできる値。本文 (`body`) は隣の
`*-article-body.html` を使う。

---

## magazine（マガジン）テスト記事

| フィールド | 値 |
| --- | --- |
| `title`（タイトル） | `海鮮丼五星オープン` |
| `slug`（スラッグ） | `gosei-kaisendon-open` |
| `category`（カテゴリ） | `プレス`（既存カテゴリから選択） |
| `tags`（タグ） | `Press` にチェック |
| `excerpt`（抜粋） | `沖縄県那覇市にて琉球海鮮丼専門店「五星」をオープン。沖縄×北海道の海の魅力を掛け合わせた海鮮丼を提供します。` |
| `coverImage`（カバー画像） | 任意の写真を1枚アップロード（無くても「No Image」で表示は崩れない） |
| `body`（本文） | `magazine-article-body.html` の中身 → 画像4枚＋青リンク3本を含む |
| `seoTitle` / `seoDescription` | 空でOK（excerpt が description に使われる） |
| `isPinned` | OFF |

公開後の確認URL: `/magazine/gosei-kaisendon-open`

---

## news（お知らせ）テスト記事 ※ news エンドポイント作成後

| フィールド | 値 |
| --- | --- |
| `title` | `嵐々亭本店、新ブランドの販売を始めました` |
| `slug` | `arashitei-new-brand` |
| `excerpt` | `嵐々亭本店にて新ブランドの販売を開始いたしました。` |
| `body` | `news-article-body.html` の中身 → 画像1枚＋青リンク2本を含む |

公開後の確認URL: `/news/arashitei-new-brand`

> `news` エンドポイントはまだ microCMS 上に存在しません。`/news` は現在
> モック記事1件にフォールバックします。README.md の「news vs magazine」判断を
> 先に決めてください。
