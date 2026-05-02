import { cn } from "@/lib/cn";

type WordmarkProps = {
  className?: string;
  ariaLabel?: string;
};

export function Wordmark({ className, ariaLabel = "osmon" }: WordmarkProps) {
  return (
    <span
      className={cn(
        "inline-flex items-baseline tracking-[-0.04em] font-medium leading-none",
        className,
      )}
      aria-label={ariaLabel}
      role="img"
    >
      <span aria-hidden="true">osmon</span>
    </span>
  );
}
