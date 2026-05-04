import { motion } from "framer-motion";
import { Particles } from "./Particles";

const NAME = "Ylva-Li";

export function Hero() {
  return (
    <section className="kitty-bg grain relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      <Particles count={80} />

      {/* Bottle */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="relative mb-10"
      >
        <div className="animate-bob">
          <svg width="110" height="160" viewBox="0 0 110 160" className="drop-shadow-[0_0_30px_var(--gold-glow)]">
            <defs>
              <linearGradient id="glass" x1="0" x2="1">
                <stop offset="0" stopColor="oklch(0.55 0.08 200)" stopOpacity="0.6" />
                <stop offset="0.5" stopColor="oklch(0.7 0.1 200)" stopOpacity="0.85" />
                <stop offset="1" stopColor="oklch(0.45 0.08 200)" stopOpacity="0.6" />
              </linearGradient>
              <radialGradient id="glow" cx="0.5" cy="0.5">
                <stop offset="0" stopColor="var(--gold-glow)" stopOpacity="0.7" />
                <stop offset="1" stopColor="var(--gold)" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="55" cy="100" r="55" fill="url(#glow)" />
            {/* Cork */}
            <rect x="44" y="6" width="22" height="18" rx="2" fill="oklch(0.45 0.08 60)" />
            {/* Neck */}
            <rect x="46" y="22" width="18" height="22" fill="url(#glass)" stroke="var(--gold)" strokeWidth="0.6" />
            {/* Body */}
            <path
              d="M30 60 Q30 44 46 44 L64 44 Q80 44 80 60 L80 138 Q80 152 65 152 L45 152 Q30 152 30 138 Z"
              fill="url(#glass)"
              stroke="var(--gold)"
              strokeWidth="1"
            />
            {/* Letter inside */}
            <rect x="40" y="78" width="30" height="40" fill="var(--paper)" transform="rotate(-6 55 98)" />
            <line x1="44" y1="88" x2="64" y2="88" stroke="oklch(0.4 0.05 50)" strokeWidth="0.6" transform="rotate(-6 55 98)" />
            <line x1="44" y1="94" x2="62" y2="94" stroke="oklch(0.4 0.05 50)" strokeWidth="0.6" transform="rotate(-6 55 98)" />
            <line x1="44" y1="100" x2="60" y2="100" stroke="oklch(0.4 0.05 50)" strokeWidth="0.6" transform="rotate(-6 55 98)" />
            <line x1="44" y1="106" x2="63" y2="106" stroke="oklch(0.4 0.05 50)" strokeWidth="0.6" transform="rotate(-6 55 98)" />
            {/* Highlight */}
            <path d="M36 70 Q34 100 38 140" stroke="white" strokeOpacity="0.25" strokeWidth="2" fill="none" />
          </svg>
        </div>
      </motion.div>

      {/* Name */}
      <h1 className="font-display soft-glow text-gradient-kitty text-5xl font-light leading-none sm:text-7xl md:text-9xl lg:text-[10rem]">
        {NAME.split("").map((c, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.6 + i * 0.12, duration: 0.8, ease: "easeOut" }}
            className="inline-block"
          >
            {c === "-" ? <span className="mx-1">-</span> : c}
          </motion.span>
        ))}
      </h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1.2 }}
        className="font-display mt-8 text-xl italic text-soft-white/90 sm:text-3xl"
      >
        Happy 20th Birthday, min kärlek 🎂
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.6, duration: 1 }}
        className="mt-3 text-sm tracking-[0.3em] text-gold/70 uppercase"
      >
        5. Mai 2006 — 5. Mai 2025
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="mt-10 text-3xl"
        aria-hidden
      >
        <span className="inline-block animate-heartbeat text-rose-400/90 drop-shadow-[0_0_12px_oklch(0.7_0.18_20)]">❤</span>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center"
      >
        <p className="font-display mb-2 text-sm italic text-soft-white/60">
          Scroll to open the bottle…
        </p>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="mx-auto h-6 w-[1px] bg-gradient-to-b from-gold to-transparent"
        />
      </motion.div>
    </section>
  );
}
