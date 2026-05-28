import type { CmsLegalDocument } from "./types";

export const mockPrivacyPolicy: CmsLegalDocument = {
  title: "プライバシーポリシー",
  bodyHtml:
    "<p>正式なプライバシーポリシー本文はクライアントから提供され次第差し替えます。本テキストはプレースホルダーであり、法的拘束力を持つものではありません。</p>",
};

export const mockTermsOfService: CmsLegalDocument = {
  title: "利用規約",
  bodyHtml:
    "<p>正式な利用規約本文はクライアントから提供され次第差し替えます。本テキストはプレースホルダーです。</p>",
};
