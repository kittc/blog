# kittc.cn

个人博客的源码仓库 · 线上地址 [kittc.cn](https://kittc.cn)

一个纯静态站点：文章以 Markdown 形式存放在仓库里，构建时预渲染成 HTML，部署在 Cloudflare Pages。没有数据库，没有常驻服务端，也没有后台管理界面——写一篇新文章就是新增一个文件然后 `git push`。

## 技术栈

| 环节 | 选择                                                           |
| ---- | -------------------------------------------------------------- |
| 框架 | [Astro](https://astro.build/) 7（构建期渲染，默认零客户端 JS） |
| 主题 | [AstroPaper](https://github.com/satnaing/astro-paper)          |
| 样式 | Tailwind CSS 4                                                 |
| 搜索 | [PageFind](https://pagefind.app/)（构建时生成静态索引）        |
| 托管 | Cloudflare Pages                                               |

## 本地运行

需要 **Node >= 22.23.4**（Astro 7 的硬性要求，推荐 24 LTS）与 pnpm。

```bash
pnpm install
pnpm dev      # http://localhost:4321
```

| 命令           | 作用                                           |
| -------------- | ---------------------------------------------- |
| `pnpm build`   | 类型检查 → 构建 → 生成搜索索引，产物在 `dist/` |
| `pnpm preview` | 本地预览构建结果                               |
| `pnpm format`  | Prettier 格式化                                |
| `pnpm lint`    | ESLint 检查                                    |

## 写文章

在 `src/content/posts/` 下新建 `.md` 或 `.mdx`，frontmatter 至少包含三项：

```yaml
---
title: "文章标题"
pubDatetime: 2026-11-04T18:00:00+08:00
description: "用于列表页与 SEO 的一句话摘要"
tags:
  - 随笔
---
```

可选字段：`featured`（首页精选）、`draft`（草稿，不发布）、`modDatetime`（更新时间）、`ogImage`（自定义分享图）、`canonicalURL`。

内容集合的筛选规则是 `**/[^_]*.{md,mdx}`，它只排除**文件名**以下划线开头的文章，不会排除下划线开头的目录——`posts/_draft/foo.md` 依然会被发布。想暂存草稿请用 `draft: true`，或把文件移出 `posts/`。

## 目录结构

```
src/
├── components/        页面组件
├── content/
│   ├── pages/         独立页面（关于）
│   └── posts/         文章
├── i18n/lang/         界面文案（zh / en）
├── layouts/           页面骨架
├── pages/             路由与 RSS、sitemap、robots
├── styles/            全局样式与主题变量
└── utils/             工具函数
public/                原样输出的静态文件（favicon、分享图）
astro-paper.config.ts  站点配置：标题、作者、社交链接、功能开关
```

站点信息集中在 `astro-paper.config.ts`，界面文案在 `src/i18n/lang/zh.ts`。`site.url` 决定 RSS、sitemap 与分享卡的绝对地址，已设为 `https://kittc.cn/`，换域名时需要同步修改。

## 部署

推送到 `main` 即触发 Cloudflare Pages 自动构建。项目设置：

| 项目                   | 值                    |
| ---------------------- | --------------------- |
| Framework preset       | Astro                 |
| Build command          | `pnpm build`          |
| Build output directory | `dist`                |
| 环境变量               | `NODE_VERSION` = `24` |

仓库内的 `.node-version` 与 `package.json` 的 `packageManager` 字段已声明运行环境，Cloudflare 会直接采用。

也可以本地直传：

```bash
pnpm build
npx wrangler pages deploy dist --project-name=blog
```

## 已知取舍

**没有启用动态 OG 图。** AstroPaper 的这一功能用 satori + Google Sans Code 在构建时绘制分享图，但该字体没有中文字形（中文标题会变成空白），且在 Astro 7 下字体接口返回 woff，satori 依赖的 opentype 解析器只接受 ttf，构建会以 `Unsupported OpenType signature` 失败。站点统一使用 `public/default-og.jpg` 作为分享图，对应配置 `dynamicOgImage: false`。

## 致谢

主题由 [Sat Naing](https://github.com/satnaing) 开发，遵循 MIT 协议，原始版权声明保留在 [LICENSE](./LICENSE) 中。

本仓库中的文章内容版权归作者所有，未经许可请勿转载。
