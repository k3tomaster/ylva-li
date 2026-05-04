export function WaveDivider({ flip = false, color = "var(--midnight)" }: { flip?: boolean; color?: string }) {
  return (
    <div
      className="relative w-full overflow-hidden leading-[0]"
      style={{ transform: flip ? "rotate(180deg)" : undefined }}
      aria-hidden
    >
      <svg
        className="relative block h-[80px] w-[200%] animate-wave"
        viewBox="0 0 2400 80"
        preserveAspectRatio="none"
      >
        <path
          d="M0,40 C300,80 600,0 1200,40 C1800,80 2100,0 2400,40 L2400,80 L0,80 Z"
          fill={color}
          opacity="0.7"
        />
        <path
          d="M0,50 C400,10 800,90 1200,50 C1600,10 2000,90 2400,50 L2400,80 L0,80 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
