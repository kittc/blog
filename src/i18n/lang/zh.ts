import type { UIStrings } from "../types";

export default {
  nav: {
    home: "首页",
    posts: "文章",
    notes: "碎碎念",
    tags: "标签",
    about: "关于",
    archives: "归档",
    search: "搜索",
  },
  post: {
    publishedAt: "发布于",
    updatedAt: "更新于",
    share: "分享",
    shareCopied: "复制成功",
    shareCopyFailed: "复制失败，请手动复制",
    tagLabel: "标签",
    backToTop: "回到顶部",
    goBack: "返回",
    editPage: "编辑页面",
    previousPost: "上一篇",
    nextPost: "下一篇",
  },
  pagination: {
    prev: "上一页",
    next: "下一页",
    page: "第 {{page}} 页",
  },
  home: {
    socialLinks: "社交链接",
    featured: "精选",
    recentPosts: "最近文章",
    allPosts: "全部文章",
  },
  footer: {
    copyright: "版权所有",
    allRightsReserved: "保留所有权利。",
  },
  pages: {
    tagTitle: "标签",
    tagDesc: "带有此标签的全部文章",

    tagsTitle: "标签",
    tagsDesc: "文章中使用过的全部标签。",

    postsTitle: "文章",
    postsDesc: "我发布的所有文章。",

    notesTitle: "碎碎念",
    notesDesc: "随手记下的碎片，攒着看。",
    notesEmpty: "还没有碎碎念。",
    notesTagDesc: "带有此标签的全部碎碎念",

    archivesTitle: "归档",
    archivesDesc: "所有已归档的文章。",

    searchTitle: "搜索",
    searchDesc: "搜索任意文章 ...",
  },
  a11y: {
    skipToContent: "跳到正文",
    openMenu: "打开菜单",
    closeMenu: "关闭菜单",
    toggleTheme: "切换主题",
    searchPlaceholder: "搜索文章...",
    noResults: "没有找到结果",
    goToPreviousPage: "前往上一页",
    goToNextPage: "前往下一页",
  },
  notFound: {
    title: "404 页面不存在",
    message: "找不到这个页面",
    goHome: "返回首页",
  },
  compose: {
    open: "记一笔",
    title: "发一条碎碎念",
    close: "关闭",
    bodyLabel: "正文",
    bodyPlaceholder: "想到什么就写什么……",
    tagsLabel: "标签",
    tagsPlaceholder: "空格分隔，可留空",
    hint: "点「去 GitHub 提交」会打开预填好的新建文件页，在那里按一次 Commit 就上线。",
    publish: "去 GitHub 提交",
    cancel: "取消",
    clear: "清空",
    hide: "隐藏入口",
    empty: "正文还是空的",
    copiedFallback: "内容较长，已复制到剪贴板，请粘贴到 GitHub 编辑器里",
  },
} satisfies UIStrings;
