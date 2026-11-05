import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";
import config from "@/config";

export const BLOG_PATH = "src/content/posts";
export const NOTES_PATH = "src/content/notes";

const posts = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: `./${BLOG_PATH}` }),
  schema: ({ image }) =>
    z.object({
      author: z.string().default(config.site.author),
      pubDatetime: z.date(),
      modDatetime: z.date().optional().nullable(),
      title: z.string(),
      featured: z.boolean().optional(),
      draft: z.boolean().optional(),
      tags: z.array(z.string()).default(["others"]),
      ogImage: image().or(z.string()).optional(),
      description: z.string(),
      canonicalURL: z.string().optional(),
      hideEditPost: z.boolean().optional(),
      // An empty value means "not set", so the site timezone applies.
      timezone: z
        .string()
        .optional()
        .transform(tz => tz || undefined),
    }),
});

const pages = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    ogImage: z.string().optional(),
    canonicalURL: z.string().optional(),
  }),
});

/**
 * Short posts (“碎碎念”). No title or description by design — the body is the
 * whole entry. Images come from the Markdown body via relative paths, which
 * Astro resolves through `astro:assets`.
 */
const notes = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: `./${NOTES_PATH}` }),
  schema: z.object({
    pubDatetime: z.date(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).default([]),
    // An empty value means "not set", so the site timezone applies.
    timezone: z
      .string()
      .optional()
      .transform(tz => tz || undefined),
  }),
});

export const collections = { posts, pages, notes };
