import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Particles } from "./Particles";

function getNextBirthday(): Date {
  // Midnight May 5th 2026 in Germany (CEST = UTC+2)
  return new Date("2026-05-04T22:00:00Z");
}

function diff(target: Date) {
  const ms = Math.max(0, target.getTime() - Date.now());
  return {
    days: Math.floor(ms / 86400000),
    hours: Math.floor((ms % 86400000) / 3600000),
    minutes: Math.floor((ms % 3600000) / 60000),
    seconds: Math.floor((ms % 60000) / 1000),
  };
}

export function LockedGate() {
  const target = useMemo(() => getNextBirthday(), []);
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTime(diff(target));
    const id = setInterval(() => setTime(diff(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  return (
    <section className="kitty-bg grain relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 py-16 text-center">
      <Particles count={60} />

      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="relative mb-8"
      >
        <div className="animate-bob">
          <svg
            width="96"
            height="140"
            viewBox="0 0 110 160"
            className="drop-shadow-[0_0_30px_var(--gold-glow)] sm:h-[170px] sm:w-[120px]"
          >
            <defs>
              <linearGradient id="glassL" x1="0" x2="1">
                <stop offset="0" stopColor="oklch(0.55 0.08 200)" stopOpacity="0.6" />
                <stop offset="0.5" stopColor="oklch(0.7 0.1 200)" stopOpacity="0.85" />
                <stop offset="1" stopColor="oklch(0.45 0.08 200)" stopOpacity="0.6" />
              </linearGradient>
              <radialGradient id="glowL" cx="0.5" cy="0.5">
                <stop offset="0" stopColor="var(--gold-glow)" stopOpacity="0.7" />
                <stop offset="1" stopColor="var(--gold)" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="55" cy="100" r="55" fill="url(#glowL)" />
            <rect x="44" y="6" width="22" height="18" rx="2" fill="oklch(0.45 0.08 60)" />
            <rect x="46" y="22" width="18" height="22" fill="url(#glassL)" stroke="var(--gold)" strokeWidth="0.6" />
            <path
              d="M30 60 Q30 44 46 44 L64 44 Q80 44 80 60 L80 138 Q80 152 65 152 L45 152 Q30 152 30 138 Z"
              fill="url(#glassL)"
              stroke="var(--gold)"
              strokeWidth="1"
            />
            <rect x="40" y="78" width="30" height="40" fill="var(--paper)" transform="rotate(-6 55 98)" />
            <line x1="44" y1="88" x2="64" y2="88" stroke="oklch(0.4 0.05 50)" strokeWidth="0.6" transform="rotate(-6 55 98)" />
            <line x1="44" y1="94" x2="62" y2="94" stroke="oklch(0.4 0.05 50)" strokeWidth="0.6" transform="rotate(-6 55 98)" />
            <line x1="44" y1="100" x2="60" y2="100" stroke="oklch(0.4 0.05 50)" strokeWidth="0.6" transform="rotate(-6 55 98)" />
          </svg>
        </div>

        {/* Lock badge */}
        <div
          className="absolute -bottom-2 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-gold/40 bg-midnight/90 backdrop-blur-sm"
          style={{ boxShadow: "0 0 20px color-mix(in oklab, var(--gold) 40%, transparent)" }}
          aria-hidden
        >
          <span className="text-base">🔒</span>
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="text-xs tracking-[0.35em] text-gold/70 uppercase"
      >
        Sealed until 5 May
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="font-display soft-glow text-gradient-kitty mt-4 text-4xl leading-tight sm:text-6xl md:text-7xl"
      >
        For Ylva-Li
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 1 }}
        className="font-display mt-3 max-w-md text-base italic text-soft-white/80 sm:text-lg"
      >
        A bottle is crossing the sea.
        <br className="hidden sm:block" /> It will open on your birthday.
      </motion.p>

      {/* Countdown */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="mt-10 grid w-full max-w-md grid-cols-4 gap-2 sm:gap-4"
      >
        {[
          { v: time.days, l: "Days" },
          { v: time.hours, l: "Hrs" },
          { v: time.minutes, l: "Min" },
          { v: time.seconds, l: "Sec" },
        ].map((u) => (
          <div
            key={u.l}
            className="rounded-xl border border-gold/25 bg-deep-teal/40 px-1 py-3 backdrop-blur-sm sm:px-2 sm:py-4"
            style={{
              boxShadow:
                "0 8px 30px -12px color-mix(in oklab, var(--gold) 30%, transparent)",
            }}
          >
            <div className="font-display text-gradient-kitty text-2xl tabular-nums sm:text-4xl">
              {mounted ? String(u.v).padStart(2, "0") : "00"}
            </div>
            <div className="mt-1 text-[9px] tracking-[0.25em] text-soft-white/60 uppercase sm:text-[10px]">
              {u.l}
            </div>
          </div>
        ))}
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="mt-10 max-w-sm text-xs leading-relaxed tracking-wider text-soft-white/50 uppercase"
      >
        Come back on 5 May to open it 🎀
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="mt-8 text-2xl"
        aria-hidden
      >
        <span className="inline-block animate-heartbeat text-rose-400/90 drop-shadow-[0_0_12px_oklch(0.7_0.18_20)]">
          ❤
        </span>
      </motion.div>
    </section>
  );
}