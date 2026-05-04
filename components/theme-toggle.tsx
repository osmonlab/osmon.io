"use client";

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import {
  Check,
  Desktop,
  Moon,
  Sun,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import { cn } from "@/lib/cn";
import {
  isThemeChoice,
  resolveTheme,
  THEME_STORAGE_KEY,
  type ThemeChoice,
} from "@/lib/theme";

type Option = {
  value: ThemeChoice;
  label: string;
  description: string;
  icon: Icon;
};

const options: Option[] = [
  {
    value: "light",
    label: "Light",
    description: "Always light",
    icon: Sun,
  },
  {
    value: "dark",
    label: "Dark",
    description: "Always dark",
    icon: Moon,
  },
  {
    value: "system",
    label: "System",
    description: "Match your OS",
    icon: Desktop,
  },
];

function applyTheme(choice: ThemeChoice) {
  const resolved = resolveTheme(choice);
  const root = document.documentElement;
  root.classList.toggle("dark", resolved === "dark");
  root.dataset.theme = choice;
  root.style.colorScheme = resolved;
}

export function ThemeToggle() {
  const [choice, setChoice] = useState<ThemeChoice>("system");
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  useEffect(() => {
    setMounted(true);
    const stored =
      typeof window !== "undefined"
        ? window.localStorage.getItem(THEME_STORAGE_KEY)
        : null;
    if (isThemeChoice(stored)) {
      setChoice(stored);
    } else {
      setChoice("system");
    }
  }, []);

  // Re-resolve when system preference flips and the user is on "system".
  useEffect(() => {
    if (choice !== "system" || typeof window === "undefined") return;
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => applyTheme("system");
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, [choice]);

  // Close on outside click + Escape.
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node | null;
      if (
        target &&
        !popoverRef.current?.contains(target) &&
        !buttonRef.current?.contains(target)
      ) {
        setOpen(false);
      }
    };
    const onKey = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const select = useCallback((next: ThemeChoice) => {
    setChoice(next);
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      /* storage may be blocked; theme still applies for the session */
    }
    applyTheme(next);
    setOpen(false);
    buttonRef.current?.focus();
  }, []);

  const onMenuKey = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      const items = Array.from(
        popoverRef.current?.querySelectorAll<HTMLButtonElement>(
          "button[role='menuitemradio']",
        ) ?? [],
      );
      if (items.length === 0) return;
      const index = items.indexOf(document.activeElement as HTMLButtonElement);
      if (event.key === "ArrowDown") {
        event.preventDefault();
        items[(index + 1 + items.length) % items.length]?.focus();
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        items[(index - 1 + items.length) % items.length]?.focus();
      } else if (event.key === "Home") {
        event.preventDefault();
        items[0]?.focus();
      } else if (event.key === "End") {
        event.preventDefault();
        items[items.length - 1]?.focus();
      }
    },
    [],
  );

  // Render placeholder until mounted to avoid SSR/CSR mismatch on the icon.
  // The pre-paint script has already applied the visual theme; this only
  // keeps the button label/icon honest about the user's stored choice.
  const active = options.find((o) => o.value === choice) ?? options[2];
  const ActiveIcon = mounted ? active.icon : Desktop;
  const ariaLabel = mounted
    ? `Theme: ${active.label}. Click to change.`
    : "Theme";

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        type="button"
        aria-label={ariaLabel}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex size-9 items-center justify-center rounded-full border border-line-soft bg-canvas/70 text-ink-soft transition-colors hover:border-line hover:text-ink"
      >
        <ActiveIcon size={16} weight="bold" aria-hidden />
      </button>

      {open ? (
        <div
          id={menuId}
          ref={popoverRef}
          role="menu"
          aria-label="Theme"
          onKeyDown={onMenuKey}
          className="absolute right-0 top-[calc(100%+0.5rem)] z-50 w-48 overflow-hidden rounded-2xl border border-line bg-canvas p-1 shadow-[0_18px_48px_-20px_rgba(11,15,20,0.25),0_2px_0_rgba(11,15,20,0.04)] animate-[osmon-pop_180ms_cubic-bezier(0.16,1,0.3,1)]"
        >
          {options.map((option) => {
            const selected = option.value === choice;
            return (
              <button
                key={option.value}
                type="button"
                role="menuitemradio"
                aria-checked={selected}
                onClick={() => select(option.value)}
                className={cn(
                  "flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-[0.8125rem] transition-colors",
                  selected
                    ? "bg-bone text-ink"
                    : "text-ink-soft hover:bg-bone/60 hover:text-ink",
                )}
              >
                <option.icon
                  size={15}
                  weight="bold"
                  aria-hidden
                  className={selected ? "text-sky-deep" : "text-ink-muted"}
                />
                <span className="flex-1">
                  <span className="block font-medium">{option.label}</span>
                  <span className="block text-[0.7rem] text-ink-muted">
                    {option.description}
                  </span>
                </span>
                {selected ? (
                  <Check size={13} weight="bold" className="text-sky-deep" aria-hidden />
                ) : null}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
