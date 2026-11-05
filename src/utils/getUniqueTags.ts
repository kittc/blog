import { postFilter, type Publishable } from "./postFilter";
import { slugifyStr } from "./slugify";

type Tag = {
  tag: string;
  tagName: string;
};

/** Any dated collection entry that carries `tags` (posts and notes alike). */
type Taggable = Publishable & { data: { tags: string[] } };

/**
 * Builds a de-duplicated, sorted tag list from entries.
 *
 * - Drafts and scheduled entries are excluded via `postFilter()`
 * - `tag` is the slug used in URLs; `tagName` is the original label for display
 * - Uniqueness is based on the slug (so differently-cased labels collapse)
 */
export function getUniqueTags(entries: Taggable[]) {
  const tags: Tag[] = entries
    .filter(postFilter)
    .flatMap(entry => entry.data.tags)
    .map(tag => ({ tag: slugifyStr(tag), tagName: tag }))
    .filter(
      (value, index, self) =>
        self.findIndex(tag => tag.tag === value.tag) === index
    )
    .sort((tagA, tagB) => tagA.tag.localeCompare(tagB.tag));
  return tags;
}
