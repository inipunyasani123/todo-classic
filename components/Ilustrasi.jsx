// Ilustrasi kecil untuk keadaan kosong. SVG sebaris (tanpa unduhan), warnanya dari token tema sehingga ikut
// berganti di mode gelap. Dekoratif: teks di sebelahnya yang membawa pesan.
import { useId } from 'react';

const ukuran = 'mx-auto mb-5 h-24 w-32';

/** Semua tugas hari ini selesai: lingkar progres penuh + centang (motif ProgressArc) dan bulan sabit. */
export function SemuaSelesai() {
  const id = useId();
  return (
    <svg viewBox="0 0 160 120" className={ukuran} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={`${id}-g`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" style={{ stopColor: 'var(--color-primary)' }} />
          <stop offset="1" style={{ stopColor: 'var(--color-secondary-container)' }} />
        </linearGradient>
      </defs>
      <ellipse cx="80" cy="108" rx="40" ry="5" className="fill-on-surface/5" />
      <circle cx="80" cy="58" r="38" fill="none" strokeWidth="8" className="stroke-surface-container-highest" />
      <circle cx="80" cy="58" r="38" fill="none" stroke={`url(#${id}-g)`} strokeWidth="8" strokeLinecap="round" />
      <path d="M63 59l11 11 23-25" fill="none" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" className="stroke-primary" />
      <path d="M128 18a12 12 0 1 0 12 15 10 10 0 1 1-12-15z" className="fill-secondary-container/40" />
      <path d="M30 26l2.5 6 6 2.5-6 2.5-2.5 6-2.5-6-6-2.5 6-2.5z" className="fill-primary/50" />
      <path d="M134 74l1.8 4 4 1.8-4 1.8-1.8 4-1.8-4-4-1.8 4-1.8z" className="fill-primary/40" />
    </svg>
  );
}

/** Daftar masih kosong: selembar kertas bergaris dengan kotak centang kosong dan pensil. */
export function DaftarKosong() {
  return (
    <svg viewBox="0 0 160 120" className={ukuran} aria-hidden="true" focusable="false">
      <ellipse cx="80" cy="110" rx="46" ry="5" className="fill-on-surface/5" />
      <g transform="rotate(-4 80 58)">
        <rect x="40" y="14" width="80" height="90" rx="10" strokeWidth="2.5" className="fill-surface-container-lowest stroke-outline-variant" />
        <rect x="52" y="32" width="12" height="12" rx="3.5" fill="none" strokeWidth="2.5" className="stroke-primary" />
        <path d="M72 38h34M52 60h54M52 76h40" fill="none" strokeWidth="2.5" strokeLinecap="round" className="stroke-outline-variant" />
      </g>
      <g transform="rotate(38 118 84)">
        <rect x="88" y="78" width="54" height="11" rx="3" className="fill-primary" />
        <path d="M142 78l10 5.5-10 5.5z" className="fill-primary-fixed-dim" />
        <rect x="84" y="78" width="7" height="11" rx="2" className="fill-secondary-container/70" />
      </g>
    </svg>
  );
}
