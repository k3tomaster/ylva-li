import { motion } from "framer-motion";

const LETTER = `I've been trying to figure out how to write this for a while now.
Not because I don't have things to say — I have too many.

You appeared in my life through the most unlikely thing.
A bottle. A digital bottle, floating through the internet,
that somehow crossed from Germany all the way to Cairo
and landed exactly where it needed to.

I think about that a lot.
I think about how random it all was —
how many bottles never get opened,
how many conversations never go anywhere,
how easily this could have been nothing.

But it wasn't nothing.
It was June 22nd, and then six days later it was June 28th,
and everything changed.

You are one of the most real people I have ever met.
Real in the way that matters — honest, warm, a little complicated,
and completely yourself. I fell in love with a girl in Germany
I had never seen in person, and I have never once
questioned whether it was real.
It is. You are.

I know the distance is a lot. I know it's not easy.
But I also know that the day I finally stand in the same room as you
is going to be one of the best days of my life.

Until then — you have this.
A bottle, sent back across the sea.
With everything I wanted to say and couldn't fit into a message.

Happy 20th Birthday.
The world is so lucky you're in it.
And I am the luckiest person in it,
because you're mine.`;

export function Letter() {
  return (
    <section className="kitty-bg grain relative overflow-hidden px-5 py-20 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-gradient-kitty mb-12 text-center text-3xl sm:mb-16 sm:text-6xl"
        >
          My letter to you
        </motion.h2>

        <motion.article
          initial={{ opacity: 0, y: 60, rotate: -3 }}
          whileInView={{ opacity: 1, y: 0, rotate: -1.2 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="relative p-6 sm:p-14"
          style={{
            color: "#b02a5c",
            backgroundColor: "#fff0f5",
            boxShadow:
              "0 30px 80px -20px rgba(0,0,0,0.2), inset 0 0 80px rgba(255,105,180,0.15), 0 0 0 1px rgba(255,105,180,0.2)",
            backgroundImage:
              `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E"), radial-gradient(ellipse at top left, rgba(255,182,193,0.2), transparent 80%), radial-gradient(ellipse at bottom right, rgba(255,105,180,0.15), transparent 80%)`,
          }}
        >
          <div className="font-display text-2xl italic sm:text-3xl">Ylva-Li,</div>
          <div className="font-display mt-6 whitespace-pre-line text-base leading-relaxed sm:text-xl">
            {LETTER}
          </div>
          <div className="font-display mt-10 text-right text-xl italic">
            Yours, always —<br />
            from across the sea 🎀
          </div>
          <div className="font-hand mt-2 text-right text-2xl" style={{ color: "#b02a5c" }}>
            — Abdullah
          </div>

          {/* Wax seal */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2">
            <svg width="90" height="90" viewBox="0 0 90 90">
              <defs>
                <radialGradient id="wax" cx="0.4" cy="0.35">
                  <stop offset="0" stopColor="oklch(0.6 0.18 25)" />
                  <stop offset="0.7" stopColor="oklch(0.45 0.2 22)" />
                  <stop offset="1" stopColor="oklch(0.3 0.15 22)" />
                </radialGradient>
              </defs>
              <circle cx="45" cy="45" r="36" fill="url(#wax)" />
              <circle cx="45" cy="45" r="32" fill="none" stroke="oklch(0.25 0.1 22)" strokeWidth="0.6" opacity="0.5" />
              <text x="45" y="56" textAnchor="middle" fontSize="28" fill="oklch(0.94 0.04 30)">
                ❤
              </text>
            </svg>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
