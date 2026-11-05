import type { CollectionEntry } from "astro:content";
import { postFilter } from "./postFilter";

/**
 * Returns notes that are eligible to be shown, newest first.
 *
 * Note: filtering respects drafts and scheduled entries via `postFilter()`.
 */
export function getSortedNotes(notes: CollectionEntry<"notes">[]) {
  return notes
    .filter(postFilter)
    .sort(
      (a, b) => b.data.pubDatetime.getTime() - a.data.pubDatetime.getTime()
    );
}
