import type { ReactNode } from "react";

const paths: Record<string, ReactNode> = {
  leaf: (
    <>
      <path d="M5 21c0-9 6-15 15-16-1 9-7 15-15 16Z" />
      <path d="M5 21c4-5 8-9 12-12" />
    </>
  ),
  sprout: (
    <>
      <path d="M12 21v-9" />
      <path d="M12 12c0-4-3-6-7-6 0 4 3 6 7 6Z" />
      <path d="M12 10c0-4 3-6 7-6 0 4-3 6-7 6Z" />
    </>
  ),
  gear: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
    </>
  ),
  factory: (
    <>
      <path d="M3 21V10l6 4V10l6 4V6h6v15Z" />
      <path d="M7 18h2M12 18h2M17 18h2" />
    </>
  ),
  box: (
    <>
      <path d="M3 7l9-4 9 4-9 4-9-4Z" />
      <path d="M3 7v10l9 4 9-4V7" />
      <path d="M12 11v10" />
    </>
  ),
  handshake: <path d="M2 12l5-5 5 3 5-3 5 5-5 5-3-2-2 2-2-2-3 2Z" />,
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M5 19l1.5-1.5M17.5 6.5L19 5" />
    </>
  ),
  snow: <path d="M12 2v20M3 7l18 10M21 7L3 17" />,
  bolt: <path d="M13 2L4 14h7l-1 8 9-12h-7Z" />,
  chart: <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />,
  phone: (
    <path d="M5 3h4l2 5-3 2a12 12 0 0 0 6 6l2-3 5 2v4a2 2 0 0 1-2 2A18 18 0 0 1 3 5a2 2 0 0 1 2-2Z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 22s7-7 7-12a7 7 0 0 0-14 0c0 5 7 12 7 12Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  check: <path d="M4 12l5 5L20 6" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  users: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2 21c0-4 3-6 7-6s7 2 7 6" />
      <path d="M16 4a3.5 3.5 0 0 1 0 7M22 21c0-3-2-5-4-5.5" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" />
    </>
  ),
  book: (
    <>
      <path d="M4 4h6a3 3 0 0 1 2 1 3 3 0 0 1 2-1h6v15h-6a2 2 0 0 0-2 2 2 2 0 0 0-2-2H4Z" />
      <path d="M12 5v16" />
    </>
  ),
  drop: <path d="M12 3s7 7 7 12a7 7 0 0 1-14 0c0-5 7-12 7-12Z" />,
  tools: (
    <>
      <path d="M14 6a4 4 0 0 0 5 5l-9 9-3-3 9-9" />
      <path d="M4 4l5 5" />
    </>
  ),
};

export default function Icon({ name, className = "w-6 h-6" }: { name: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {paths[name] ?? paths.leaf}
    </svg>
  );
}
