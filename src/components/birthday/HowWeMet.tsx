import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const MET_DATE = "2024-06-22";
const LOVE_DATE = "2024-06-28";

function daysSince(date: string) {
  const start = new Date(date).getTime();
  const now = Date.now();
  return Math.max(0, Math.floor((now - start) / 86400000));
}

function Card({
  index,
  children,
}: {
  index: number;
  children: React.ReactNode;
}) {
  const flip = index % 2 === 1;
  return (
    <motion.div
      initial={{ opacity: 0, x: flip ? 60 : -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className={`flex w-full ${flip ? "md:justify-end" : "md:justify-start"}`}
    >
      <div className="relative w-full max-w-xl rounded-2xl border border-gold/20 bg-deep-teal/40 p-6 backdrop-blur-sm sm:p-8 md:p-10"
        style={{ boxShadow: "0 20px 60px -20px color-mix(in oklab, var(--gold) 20%, transparent)" }}
      >
        {children}
      </div>
    </motion.div>
  );
}

export function HowWeMet() {
  const [usDays, setUsDays] = useState(() => daysSince(MET_DATE));
  const [loveDays, setLoveDays] = useState(() => daysSince(LOVE_DATE));

  useEffect(() => {
    const id = setInterval(() => {
      setUsDays(daysSince(MET_DATE));
      setLoveDays(daysSince(LOVE_DATE));
    }, 60_000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="kitty-bg grain relative overflow-hidden px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-gradient-kitty mb-20 text-center text-5xl sm:text-6xl"
        >
          A Bottle Across the Sea
        </motion.h2>

        <div className="space-y-10">
          <Card index={0}>
            <div className="mb-4 text-2xl">📍</div>
            <svg viewBox="0 0 320 140" className="mb-4 w-full">
              <text x="40" y="60" fontSize="14" fill="var(--soft-white)" opacity="0.8">Cairo 🇪🇬</text>
              <text x="220" y="60" fontSize="14" fill="var(--soft-white)" opacity="0.8">Germany 🇩🇪</text>
              <circle cx="55" cy="80" r="6" fill="var(--gold)">
                <animate attributeName="r" values="6;9;6" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle cx="265" cy="80" r="6" fill="var(--gold)">
                <animate attributeName="r" values="6;9;6" dur="2s" repeatCount="indefinite" begin="1s" />
              </circle>
              <motion.path
                d="M55 80 Q160 10 265 80"
                fill="none"
                stroke="var(--gold)"
                strokeWidth="1.5"
                strokeDasharray="6 6"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
              />
            </svg>
            <p className="font-display text-lg italic text-soft-white/90 sm:text-2xl">
              3,200 km apart. But the sea had other plans.
            </p>
          </Card>

          <Card index={1}>
            <div className="mb-2 text-xs tracking-[0.3em] text-gold/80 uppercase">June 22, 2024</div>
            <div className="mb-3 text-3xl">🍾</div>
            <p className="font-display text-lg italic leading-relaxed text-soft-white/95 sm:text-2xl">
              "A bottle arrived in a little app. It had your name on it. I opened it."
            </p>
          </Card>

          <Card index={2}>
            <div className="mb-2 text-xs tracking-[0.3em] text-gold/80 uppercase">June 28, 2024</div>
            <div className="mb-3 text-3xl">❤️</div>
            <p className="font-display text-lg italic leading-relaxed text-soft-white/95 sm:text-2xl">
              "Six days later. Three words. No turning back."
            </p>
            <p className="font-display text-gradient-kitty mt-4 text-2xl sm:text-3xl">
              I love you.
            </p>
          </Card>

          <Card index={3}>
            <div className="grid gap-6 sm:grid-cols-2 sm:gap-8">
              <div>
                <div className="font-display text-gradient-kitty text-4xl tabular-nums sm:text-6xl">{usDays}</div>
                <p className="mt-2 font-display italic text-soft-white/80">
                  days we have been us
                </p>
              </div>
              <div>
                <div className="font-display text-gradient-kitty text-4xl tabular-nums sm:text-6xl">{loveDays}</div>
                <p className="mt-2 font-display italic text-soft-white/80">
                  days you have been my love
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
