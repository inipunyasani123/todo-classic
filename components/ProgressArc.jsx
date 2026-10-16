'use client';

// Cincin progress signature dengan stroke gradien (primary -> secondary).
export default function ProgressArc({ done, total }) {
  const r = 45;
  const c = 2 * Math.PI * r;
  const pct = total ? Math.round((done / total) * 100) : 0;
  const offset = c * (1 - pct / 100);

  return (
    <div className="relative flex h-20 w-20 shrink-0 items-center justify-center md:h-28 md:w-28" role="img" aria-label={`${done} dari ${total} tugas hari ini selesai`}>
      <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
        <circle cx="50" cy="50" r={r} fill="none" strokeWidth="2" className="stroke-surface-container-highest" />
        <circle
          cx="50" cy="50" r={r} fill="none" strokeWidth="3.5" strokeLinecap="round"
          stroke="url(#arcGrad)" strokeDasharray={c} strokeDashoffset={offset}
          className="progress-arc"
        />
        <defs>
          <linearGradient id="arcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--color-primary)" />
            <stop offset="100%" stopColor="var(--color-secondary-container)" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center" aria-hidden="true">
        <span className="text-base font-bold text-on-surface md:text-xl">{done}/{total}</span>
        <span className="text-[9px] font-medium uppercase tracking-[0.18em] text-on-surface-variant md:text-[10px] md:tracking-[0.2em]">Selesai</span>
      </div>
    </div>
  );
}
