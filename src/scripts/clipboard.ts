/**
 * Clipboard helpers shared by the post share button and note permalinks.
 *
 * Kept in `src/scripts/` so both Astro `<script>` blocks import the same
 * implementation instead of duplicating the fallback path.
 */

/**
 * Copies text, falling back to a hidden textarea when the async Clipboard API
 * is unavailable (insecure context or older browsers).
 */
export async function copyText(text: string): Promise<boolean> {
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // Permission denied or API blocked — try the legacy path below.
    }
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.top = "-9999px";
  textarea.style.opacity = "0";
  document.body.append(textarea);
  textarea.select();

  let copied = false;
  try {
    copied = document.execCommand("copy");
  } catch {
    copied = false;
  }
  textarea.remove();
  return copied;
}

const timers = new WeakMap<HTMLElement, number[]>();

/**
 * Shows a short-lived message in an element that toggles between `opacity-0`
 * and `opacity-100`. Repeated calls restart the countdown instead of stacking.
 */
export function flashMessage(
  element: HTMLElement | null,
  message: string,
  duration = 1800
): void {
  if (!element) return;

  for (const id of timers.get(element) ?? []) window.clearTimeout(id);

  const ids: number[] = [];
  element.textContent = message;
  element.classList.remove("opacity-0");
  element.classList.add("opacity-100");

  ids.push(
    window.setTimeout(() => {
      element.classList.remove("opacity-100");
      element.classList.add("opacity-0");
      // Clear after the fade so screen readers don't repeat stale text.
      ids.push(
        window.setTimeout(() => {
          if (element.textContent === message) element.textContent = "";
        }, 200)
      );
      timers.set(element, ids);
    }, duration)
  );

  timers.set(element, ids);
}
