import type { NextConfig } from "next";

// 信頼できる第一者 CMS の HTML を dangerouslySetInnerHTML で描画しているため、
// 多層防御として CSP を付与する。サイトが実際に読み込む配信元のみ許可:
//   - 画像: self / data: / microCMS / Figma 書き出し
//   - フォント: Google Fonts（CSS=googleapis, ファイル=gstatic）
//   - script/style: self + 'unsafe-inline'（Next のインライン bootstrap 用。nonce 未導入）
const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "form-action 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "img-src 'self' data: https://images.microcms-assets.io https://www.figma.com",
  "font-src 'self' data: https://fonts.gstatic.com",
  "connect-src 'self'",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "DENY" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  async redirects() {
    return [
      {
        source: "/group/companies",
        destination: "/company/group",
        permanent: true,
      },
      {
        source: "/company/overview",
        destination: "/company",
        permanent: true,
      },
      {
        // News は magazine に統合。記事の正規URLは /magazine/[slug]。
        source: "/news/:slug",
        destination: "/magazine/:slug",
        permanent: true,
      },
    ];
  },
  turbopack: {
    root: process.cwd(),
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.microcms-assets.io",
      },
      {
        protocol: "https",
        hostname: "www.figma.com",
        pathname: "/api/mcp/asset/**",
      },
    ],
  },
};

export default nextConfig;
