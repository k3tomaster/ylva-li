import { useState } from "react";
import { motion } from "framer-motion";
import { Particles } from "./Particles";

interface Props {
  onUnlock: () => void;
}

export function PasswordGate({ onUnlock }: Props) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.toLowerCase().trim() === "shark25032000") {
      onUnlock();
    } else {
      setError(true);
      setTimeout(() => setError(false), 500);
    }
  };

  return (
    <section className="kitty-bg grain relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 py-16 text-center">
      <Particles count={40} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full max-w-md rounded-2xl border border-[oklch(0.6_0.25_20/0.2)] bg-paper/80 p-8 shadow-2xl backdrop-blur-md sm:p-12"
      >
        <div className="mb-6 flex justify-center text-4xl">🎀</div>
        <h2 className="font-display text-gradient-kitty mb-4 text-3xl sm:text-4xl">
          A secret lies ahead...
        </h2>
        
        <p className="font-display mb-8 text-lg italic text-[#b02a5c]/80 sm:text-xl">
          "A fierce swimmer of the sea, <br />
          followed by the day I came to be (DDMMYYYY)."
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col items-center w-full">
          <motion.div animate={error ? { x: [-10, 10, -10, 10, 0] } : {}} transition={{ duration: 0.4 }} className="w-full">
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter the password..."
              className="mb-4 w-full rounded-full border border-[#ff69b4]/50 bg-white/50 px-6 py-3 text-center text-lg text-[#b02a5c] placeholder-[#ff69b4]/50 outline-none focus:border-[#b02a5c] focus:ring-2 focus:ring-[#b02a5c]/20"
            />
          </motion.div>
          <button
            type="submit"
            className="rounded-full bg-gradient-to-r from-[oklch(0.6_0.25_20)] to-[#ff69b4] px-8 py-3 font-semibold text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
          >
            Unlock
          </button>
        </form>
      </motion.div>
    </section>
  );
}
