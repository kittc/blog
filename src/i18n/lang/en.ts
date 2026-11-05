import type { UIStrings } from "../types";

export default {
  nav: {
    home: "Home",
    posts: "Posts",
    notes: "Notes",
    tags: "Tags",
    about: "About",
    archives: "Archives",
    search: "Search",
  },
  post: {
    publishedAt: "Published at",
    updatedAt: "Updated",
    share: "Share",
    shareCopied: "Copied",
    shareCopyFailed: "Copy failed. Please copy manually.",
    tagLabel: "Tags",
    backToTop: "Back to top",
    goBack: "Go back",
    editPage: "Edit page",
    previousPost: "Previous Post",
    nextPost: "Next Post",
  },
  pagination: {
    prev: "Prev",
    next: "Next",
    page: "page {{page}}",
  },
  home: {
    socialLinks: "Social Links",
    featured: "Featured",
    recentPosts: "Recent Posts",
    allPosts: "All Posts",
  },
  footer: {
    copyright: "Copyright",
    allRightsReserved: "All rights reserved.",
  },
  pages: {
    tagTitle: "Tag",
    tagDesc: "All the articles with the tag",

    tagsTitle: "Tags",
    tagsDesc: "All the tags used in posts.",

    postsTitle: "Posts",
    postsDesc: "All the articles I've posted.",

    notesTitle: "Notes",
    notesDesc: "Short thoughts, collected.",
    notesEmpty: "No notes yet.",
    notesTagDesc: "All the notes with the tag",

    archivesTitle: "Archives",
    archivesDesc: "All the articles I've archived.",

    searchTitle: "Search",
    searchDesc: "Search any article ...",
  },
  a11y: {
    skipToContent: "Skip to content",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    toggleTheme: "Toggle theme",
    searchPlaceholder: "Search posts...",
    noResults: "No results found",
    goToPreviousPage: "Go to previous page",
    goToNextPage: "Go to next page",
  },
  notFound: {
    title: "404 Not Found",
    message: "Page Not Found",
    goHome: "Go back home",
  },
  compose: {
    open: "New note",
    title: "New note",
    close: "Close",
    bodyLabel: "Body",
    bodyPlaceholder: "Write whatever is on your mind…",
    tagsLabel: "Tags",
    tagsPlaceholder: "Space separated, optional",
    hint: "“Open in GitHub” opens a prefilled new-file page — commit there and it ships.",
    publish: "Open in GitHub",
    cancel: "Cancel",
    clear: "Clear",
    hide: "Hide entry",
    empty: "The note is still empty",
    copiedFallback:
      "The note is long, so it was copied to your clipboard — paste it into the GitHub editor",
  },
} satisfies UIStrings;
