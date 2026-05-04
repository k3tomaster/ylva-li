import { useEffect, useRef, useState } from "react";

const OCEAN_SRC =
  "https://cdn.pixabay.com/download/audio/2022/03/15/audio_db04bbb5da.mp3?filename=ocean-waves-112906.mp3";

export function SoundToggle() {
  const ref = useRef<HTMLAudioElement | null>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const a = new Audio(OCEAN_SRC);
    a.loop = true;
    a.volume = 0.35;
    ref.current = a;
    return () => {
      a.pause();
      ref.current = null;
    };
  }, []);

  const toggle = () => {
    const a = ref.current;
    if (!a) return;
    if (on) {
      a.pause();
      setOn(false);
    } else {
      a.play().then(() => setOn(true)).catch(() => setOn(false));
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={on ? "Mute ocean sound" : "Play ocean sound"}
      className="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-midnight/70 text-gold backdrop-blur-md transition hover:scale-110 hover:bg-midnight/90"
      style={{ boxShadow: "0 0 24px -4px var(--gold-glow)" }}
    >
      {on ? (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 5 6 9H2v6h4l5 4V5z" />
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
        </svg>
      ) : (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 5 6 9H2v6h4l5 4V5z" />
          <line x1="22" y1="9" x2="16" y2="15" />
          <line x1="16" y1="9" x2="22" y2="15" />
        </svg>
      )}
    </button>
  );
}
