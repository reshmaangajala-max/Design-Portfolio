export function Sparkle({ className = '', size = 14 }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 1.5c.6 4.9 2.6 8.9 10.5 10.5-7.9 1.6-9.9 5.6-10.5 10.5-.6-4.9-2.6-8.9-10.5-10.5C9.4 10.4 11.4 6.4 12 1.5Z" fill="currentColor" />
    </svg>
  )
}

export function Arrow({ className = '' }) {
  return (
    <svg className={`icon-arrow ${className}`} width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function ArrowUpRight({ className = '' }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 17 17 7M9 7h8v8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function Book({ className = '' }) {
  return (
    <svg className={className} width="104" height="72" viewBox="0 0 104 72" aria-hidden="true">
      <path d="M52 14C40 8 22 7 6 10v54c16-3 34-2 46 4 12-6 30-7 46-4V10C82 7 64 8 52 14Z" fill="#FBF8F3" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
      <path d="M52 14v54" stroke="currentColor" strokeWidth="3" />
      <path d="M15 24h27M15 33h27M15 42h27M15 51h20M62 24h27M62 33h27M62 42h27M62 51h20" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  )
}

export function Copy({ className = '' }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="9" y="9" width="11" height="11" rx="2.5" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M5 15V6a2 2 0 0 1 2-2h8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function Check({ className = '' }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
      <path d="m5 12.5 4.5 4.5L19 7.5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function FigmaMark({ size = 22 }) {
  return (
    <svg width={size} height={size * 1.5} viewBox="0 0 38 57" aria-hidden="true">
      <path fill="#1ABCFE" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0Z" />
      <path fill="#0ACF83" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0Z" />
      <path fill="#FF7262" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19Z" />
      <path fill="#F24E1E" d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5Z" />
      <path fill="#A259FF" d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5Z" />
    </svg>
  )
}

export function ListMark() {
  return (
    <svg width="22" height="26" viewBox="0 0 22 26" aria-hidden="true">
      <rect x="2" y="2" width="18" height="22" rx="3" fill="#FBF8F3" stroke="#2B1E18" strokeWidth="2" />
      <path d="M6 9h10M6 13h10M6 17h6" stroke="#2B1E18" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}
