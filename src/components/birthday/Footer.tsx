import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="kitty-bg grain relative overflow-hidden px-5 py-16 text-center sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8 flex justify-center"
        >
          <img src="/hello_kitty.png" alt="Hello Kitty" className="w-40 drop-shadow-xl" />
        </motion.div>
        <p className="font-display text-2xl text-soft-white/90 sm:text-4xl">
          Cairo 🇪🇬 ✈️ Germany 🇩🇪
        </p>
        <p className="font-display text-gradient-kitty mt-6 text-lg italic sm:text-3xl">
          One day, the bottle won't be the only thing crossing the sea.
        </p>
        <p className="mt-12 text-sm tracking-widest text-soft-white/50">
          Made with love by someone from 3,200 km away ❤️
        </p>
        <p className="mt-3 text-xs tracking-[0.3em] text-gold/60 uppercase">
          5. Mai 2006
        </p>
      </motion.div>
    </footer>
  );
}
