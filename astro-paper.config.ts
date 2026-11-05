import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://kittc.cn/",
    title: "Kittc",
    description: "记录技术、产品与生活的一些思考。",
    author: "Kittc",
    profile: "https://github.com/kittc",
    ogImage: "default-og.jpg",
    lang: "zh",
    timezone: "Asia/Shanghai",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
  },
  notes: {
    perPage: 20,
    // /notes 右下角的「记一笔」入口。它只拼一个预填好正文的 GitHub 新建文件链接，
    // 不保存任何 token；能否提交由 GitHub 的仓库权限决定。不想暴露就整段删掉。
    compose: {
      repo: "kittc/blog",
      branch: "main",
      dir: "src/content/notes",
    },
  },
  features: {
    lightAndDarkMode: true,
    // 动态 OG 图使用 Google Sans Code 等宽字体，缺少中文字形，先用静态 default-og.jpg
    dynamicOgImage: false,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: true,
      url: "https://github.com/kittc/blog/edit/main/",
    },
    search: "pagefind",
  },
  socials: [
    { name: "github", url: "https://github.com/kittc", linkTitle: "GitHub" },
    { name: "mail", url: "mailto:me@kittc.cn", linkTitle: "发送邮件" },
  ],
});