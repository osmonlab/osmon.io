export const THEME_STORAGE_KEY = "osmon-theme";

export type ThemeChoice = "system" | "light" | "dark";

export function isThemeChoice(value: unknown): value is ThemeChoice {
  return value === "system" || value === "light" || value === "dark";
}

export function resolveTheme(choice: ThemeChoice): "light" | "dark" {
  if (choice !== "system") return choice;
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

/**
 * Inline script body — runs in <head> before paint to set the .dark class on
 * <html>, avoiding a flash of the wrong theme. Kept as a string so it can be
 * injected via dangerouslySetInnerHTML in the root layout.
 */
export const themePrePaintScript = `
(function () {
  try {
    var key = ${JSON.stringify(THEME_STORAGE_KEY)};
    var stored = localStorage.getItem(key);
    var choice = stored === "light" || stored === "dark" || stored === "system" ? stored : "system";
    var resolved = choice === "system"
      ? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      : choice;
    var root = document.documentElement;
    if (resolved === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    root.dataset.theme = choice;
    root.style.colorScheme = resolved;
  } catch (_) {
    /* localStorage may be unavailable; fall back to default light */
  }
})();
`.trim();
