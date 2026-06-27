import type { OpenNextConfig } from "@opennextjs/cloudflare";

export default {
  // OpenNext は Next の webpack ビルド産物を前提とする。Next 16 は `next build` が
  // 既定で Turbopack になり、その産物だと実行時に
  // `components.ComponentMod.handler is not a function` で全ルート 500 になる。
  // そのため Cloudflare バンドル時だけ webpack ビルドを使う（ローカル/CI は Turbopack のまま）。
  buildCommand: "npx next build --webpack",
  default: {
    override: {
      wrapper: "cloudflare-node",
      converter: "edge",
      proxyExternalRequest: "fetch",
      incrementalCache: "dummy",
      tagCache: "dummy",
      queue: "direct",
    },
  },
  edgeExternals: ["node:crypto"],
  middleware: {
    external: true,
    override: {
      wrapper: "cloudflare-edge",
      converter: "edge",
      proxyExternalRequest: "fetch",
      incrementalCache: "dummy",
      tagCache: "dummy",
      queue: "direct",
    },
  },
} satisfies OpenNextConfig;
