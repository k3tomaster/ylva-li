import { motion } from "framer-motion";

const REASONS = [
  "Because you answered a bottle that could have gone anywhere — and it found me.",
  "Because six days was all it took for me to know.\nSome people search their whole lives for that feeling.",
  "Because you're from a completely different world —\ndifferent country, different language, different sky —\nand yet talking to you has always felt like home.",
  "Because you have the kind of laugh I'd cross oceans for.\nAnd one day, I will.",
  "Because you were brave enough to say it first,\nor maybe I was — honestly, it doesn't matter.\nWhat matters is we both meant it.",
  "Because there's a little girl in old photos growing up in Germany\nwho had no idea she was becoming my favorite person.",
  "Because 3,200 km has never felt smaller than when I'm talking to you.",
  "Because you're the reason I look at my phone differently now.\nEvery notification could be you.\nThe good ones always are.",
  "Because you're turning 20 and you already carry yourself\nlike someone who knows exactly who she is.\nThat's rare. That's you.",
  "Because you make the distance feel like a detail, not an obstacle.",
  "Because I've never had to explain myself to you.\nYou just get it. You just get me.",
  "Because loving you long-distance taught me\nthat presence isn't about proximity.\nIt's about attention. And you have all of mine.",
  "Because of the way you talk about the things you love.\nYour whole energy shifts. I live for that.",
  "Because you're honest in a way that's rare and a little scary\nand completely magnetic.",
  "Because every timezone calculation I've ever done has been worth it.",
  "Because you make me want to be better —\nnot because you demand it,\nbut because you deserve it.",
  "Because the first time I realized I was falling for you,\nI didn't fight it.\nThat told me everything.",
  "Because somewhere in Germany right now,\nyou exist — and that fact alone\nmakes today a good day.",
  "Because every little thing about you is beautiful,\nand I feel lucky just to know you.",
  "Because I don't know what comes next,\nbut I know I want you in it.\nHappy Birthday, Ylva-Li. 🍾",
];

export function Reasons() {
  return (
    <section className="kitty-bg grain relative overflow-hidden px-5 py-20 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-gradient-kitty mb-14 text-center text-3xl sm:mb-24 sm:text-6xl"
        >
          20 reasons for 20 years
        </motion.h2>

        <ol className="space-y-14 sm:space-y-20">
          {REASONS.map((r, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="grid grid-cols-[auto_1fr] items-start gap-4 sm:gap-10"
            >
              <span
                className="font-display select-none text-5xl leading-none text-gold/25 sm:text-8xl"
                aria-hidden
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="font-display whitespace-pre-line text-lg leading-relaxed text-soft-white/95 sm:text-3xl">
                {r}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
