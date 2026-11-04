# Kittc 的博客

基于 [AstroPaper](https://github.com/satnaing/astro-paper) 的个人博客，纯静态输出，部署在 Cloudflare Pages。

## 技术栈

- **Astro 7** — 构建时生成静态 HTML，默认零客户端 JS
- **AstroPaper** — 排版主题，自带暗色模式、标签、归档
- **Tailwind CSS 4** — 通过 Vite 插件接入
- **PageFind** — 构建时生成静态全文搜索索引，无后端依赖

## 本地开发

需要 **Node >= 22.23.4**（Astro 7 的硬性要求，推荐 24 LTS）。

```bash
pnpm install
pnpm dev      # http://localhost:4321
```

其它命令：

```bash
pnpm build     # 类型检查 + 构建 + 生成搜索索引，产物在 dist/
pnpm preview   # 预览构建结果
pnpm format    # Prettier 格式化
pnpm lint      # ESLint 检查
```

## 写文章

在 `src/content/posts/` 下新建 `.md` 或 `.mdx` 文件，frontmatter 必填三项：

```yaml
---
title: "文章标题"
pubDatetime: 2026-11-04T18:00:00+08:00
description: "用于列表页和 SEO 的一句话摘要"
tags:
  - 随笔
---
```

其它可选字段：`featured`（首页精选）、`draft`（草稿）、`modDatetime`（更新时间）、`ogImage`（自定义分享图）、`canonicalURL`。

AstroPaper 自带的教学文章没有删除，都放在 `src/content/_tutorials/`，不参与构建，需要查 frontmatter 写法或 MDX 语法时直接翻。

注意一个容易踩的坑：内容集合的 glob 规则是 `**/[^_]*`，它只排除**文件名**以下划线开头的文章，**不会排除下划线开头的目录**——`src/content/posts/_foo/bar.md` 依然会被加载。所以"暂时不想发布"的文章要移出 `posts/` 目录，或者改文件名加前缀。

## 站点配置

所有个人信息集中在 **`astro-paper.config.ts`**：标题、描述、作者、社交链接、每页文章数、功能开关。改这一个文件即可，不用碰页面组件。

> 部署后请务必把 `site.url` 改成正式域名。它决定 RSS、sitemap 和分享卡的绝对地址，用占位域名会导致这些链接全部指错。

界面文案在 `src/i18n/lang/zh.ts`，语言在 `astro.config.ts` 的 `i18n` 段切换。

## 部署到 Cloudflare Pages

仓库已包含 `.node-version`（24），Cloudflare 构建时会自动采用。

### 方式一：Git 集成（推荐）

1. Cloudflare Dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
2. 选择 `kittc/blog` 仓库
3. 构建配置填：

   | 项目                   | 值                    |
   | ---------------------- | --------------------- |
   | Framework preset       | Astro                 |
   | Build command          | `pnpm build`          |
   | Build output directory | `dist`                |
   | 环境变量               | `NODE_VERSION` = `24` |

4. 点 **Save and Deploy**

首次构建约 1–3 分钟。之后每次 push 到 `main` 都会自动重新部署，PR 会生成独立预览地址。

### 方式二：本地 CLI 直传

```bash
pnpm build
npx wrangler pages deploy dist --project-name=blog
```

需要先 `npx wrangler login` 授权。

### 自定义域名

Cloudflare Pages 项目 → **Custom domains** → 添加域名。若域名的 DNS 也托管在 Cloudflare，添加后会自动建好 CNAME 记录并签发证书，无需手动配置。

## 关于动态 OG 图

`astro-paper.config.ts` 里的 `dynamicOgImage` 是 **关闭** 状态，`src/pages/og.png.ts` 这个路由也已经删除。

原因有两个：其一，该功能用 satori + Google Sans Code 字体渲染，而这款字体没有中文字形，中文标题会被画成空白；其二，在 Astro 7 下字体接口返回的是 woff，satori 依赖的 opentype 解析器只接受 ttf，构建时会直接抛出 `Unsupported OpenType signature`。

全站分享图目前使用 `public/default-og.jpg`。若要恢复动态 OG 图，从上游仓库取回 `src/pages/og.png.ts`，并把字体换成含中文字形的 ttf 子集即可。

## License

主题版权归 [Sat Naing](https://github.com/satnaing) 所有，遵循 MIT 协议。文章内容版权归作者本人所有。
