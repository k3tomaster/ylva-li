import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

const HER_BIRTHDAY = "2026-05-05"; // Next upcoming birthday

function getNextBirthday(): Date {
  // Midnight May 5th 2026 in Germany (CEST = UTC+2)
  return new Date("2026-05-04T22:00:00Z");
}

function isBirthdayToday() {
  const now = Date.now();
  const start = new Date("2026-05-04T22:00:00Z").getTime();
  // 24 hours later
  const end = new Date("2026-05-05T22:00:00Z").getTime();
  return now >= start && now < end;
}

function diff(target: Date) {
  const now = new Date();
  const ms = Math.max(0, target.getTime() - now.getTime());
  const days = Math.floor(ms / 86400000);
  const hours = Math.floor((ms % 86400000) / 3600000);
  const minutes = Math.floor((ms % 3600000) / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  return { days, hours, minutes, seconds };
}

export function Countdown() {
  const target = useMemo(() => getNextBirthday(), []);
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [today, setToday] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setToday(isBirthdayToday());
    setTime(diff(target));
    const id = setInterval(() => {
      setToday(isBirthdayToday());
      setTime(diff(target));
    }, 1000);
    return () => clearInterval(id);
  }, [target]);

  useEffect(() => {
    if (!today) return;
    let count = 0;
    const fire = () => {
      if (count >= 10) return;
      confetti({
        particleCount: 80,
        spread: 90,
        origin: { y: 0.6 },
        colors: ["#ffb6c1", "#ff69b4", "#ffffff", "#ff0000"],
      });
      count++;
    };
    fire();
    const id = setInterval(() => {
      fire();
      if (count >= 10) clearInterval(id);
    }, 2500);
    return () => clearInterval(id);
  }, [today]);

  return (
    <section className="kitty-bg grain relative overflow-hidden px-5 py-20 text-center sm:py-32">
      {today ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="font-display text-gradient-kitty soft-glow text-4xl sm:text-7xl">
            Today is YOUR day, Ylva-Li! 🎉
          </h2>
          <p className="font-display mt-6 text-xl italic text-soft-white/85 sm:text-2xl">
            You are turning 20 today 🌸
          </p>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="font-display text-gradient-kitty text-3xl sm:text-6xl">
            Your day is almost here…
          </h2>
          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-4 gap-2 sm:gap-4">
            {[
              { v: time.days, l: "Days" },
              { v: time.hours, l: "Hours" },
              { v: time.minutes, l: "Minutes" },
              { v: time.seconds, l: "Seconds" },
            ].map((u) => (
              <div
                key={u.l}
                className="relative rounded-2xl border border-gold/25 bg-deep-teal/40 px-1 py-4 backdrop-blur-sm sm:p-6"
                style={{ boxShadow: "0 8px 40px -12px color-mix(in oklab, var(--gold) 30%, transparent)" }}
              >
                <div className="font-display text-gradient-kitty text-2xl tabular-nums sm:text-6xl">
                  {mounted ? String(u.v).padStart(2, "0") : "00"}
                </div>
                <div className="mt-2 text-[9px] tracking-[0.2em] text-soft-white/60 uppercase sm:text-xs">
                  {u.l}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-10 text-sm tracking-widest text-soft-white/50 uppercase">
            until {new Date(HER_BIRTHDAY).toLocaleDateString("en-GB", { day: "numeric", month: "long" })}
          </p>
        </motion.div>
      )}
    </section>
  );
}
