import { motion } from "framer-motion";

const PHOTOS = [
  { id: 1, src: "/1.jpeg", caption: "Sweet childhood memories" },
  { id: 2, src: "/2.jpeg", caption: "Adorable baby smiles" },
  { id: 3, src: "/4.jpeg", caption: "Beautiful and bright" },
  { id: 4, src: "/7.jpeg", caption: "Pigtails and pouts" },
  { id: 5, src: "/8.jpeg", caption: "Sparkling like stars" },
  { id: 6, src: "/9.jpeg", caption: "Peace and love" },
];

export function Polaroids() {
  return (
    <section className="kitty-bg grain relative overflow-hidden px-5 py-20 sm:py-32">
      <div className="mx-auto max-w-6xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-gradient-kitty text-3xl sm:text-5xl"
        >
          Before the bottle found me… there was you
        </motion.h2>
        <p className="font-display mt-4 text-base italic text-soft-white/70 sm:text-lg">
          Growing up in Germany, becoming the girl who would change everything
        </p>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:mt-20 sm:gap-8 sm:grid-cols-3">
          {PHOTOS.map((p, i) => {
            const tilt = (i % 2 === 0 ? -1 : 1) * (2 + (i % 3));
            return (
              <motion.figure
                key={p.id}
                initial={{ opacity: 0, y: 40, rotate: tilt }}
                whileInView={{ opacity: 1, y: 0, rotate: tilt }}
                whileHover={{ rotate: 0, scale: 1.05, y: -6 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group cursor-pointer rounded-sm bg-paper p-3 pb-5 shadow-2xl"
                style={{
                  boxShadow:
                    "0 18px 40px -12px rgba(0,0,0,0.55), 0 0 0 1px rgba(0,0,0,0.05)",
                }}
              >
                {/* PHOTO_{p.id} — replace src with actual photo */}
                <div className="aspect-square w-full overflow-hidden bg-deep-teal/30">
                  <img src={p.src} alt={p.caption} className="h-full w-full object-cover" />
                </div>
                <figcaption className="font-hand mt-3 text-center text-xl text-[#b02a5c] transition-colors group-hover:text-[#ff69b4]">
                  {p.caption}
                </figcaption>
              </motion.figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
