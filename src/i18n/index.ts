import config from "@/config";
import type { UIStrings } from "./types";

export { tplStr } from "./format";

const modules = import.meta.glob<{ default: UIStrings }>("./lang/*.ts", {
  eager: true,
});

const translations: Record<string, UIStrings> = {};
for (const [path, mod] of Object.entries(modules)) {
  const locale = path.slice("./lang/".length, -".ts".length);
  translations[locale] = mod.default;
}

/**
 * Returns UI strings for the given locale.
 *
 * `locale` is usually `Astro.currentLocale`, which can be `undefined` on some
 * static routes (e.g. 404). Falling back to the site language keeps those
 * pages consistent; `en` is only the last resort when the site language has
 * no translation file at all.
 */
export function useTranslations(locale: string = config.site.lang): UIStrings {
  return (
    translations[locale] ?? translations[config.site.lang] ?? translations["en"]
  );
}
