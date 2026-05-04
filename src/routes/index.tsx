import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Hero } from "@/components/birthday/Hero";
import { Countdown } from "@/components/birthday/Countdown";
import { HowWeMet } from "@/components/birthday/HowWeMet";
import { Polaroids } from "@/components/birthday/Polaroids";
import { Reasons } from "@/components/birthday/Reasons";
import { Letter } from "@/components/birthday/Letter";
import { Footer } from "@/components/birthday/Footer";
import { SoundToggle } from "@/components/birthday/SoundToggle";
import { WaveDivider } from "@/components/birthday/WaveDivider";
import { LockedGate } from "@/components/birthday/LockedGate";
import { PasswordGate } from "@/components/birthday/PasswordGate";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Happy 20th Birthday, Ylva-Li 🌊" },
      {
        name: "description",
        content:
          "A message in a gift, sent across the world — for Ylva-Li, on her 20th birthday.",
      },
      { property: "og:title", content: "For Ylva-Li — A Gift Across the World" },
      {
        property: "og:description",
        content:
          "From Cairo to Germany — a cinematic birthday letter for someone 3,200 km away.",
      },
    ],
  }),
});

function Index() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem("hello-kitty-auth") === "true";
  });
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) return;
    const check = () => {
      // Midnight May 5th 2026 in Germany (CEST = UTC+2)
      const targetTime = new Date("2026-05-04T22:00:00Z").getTime();
      setUnlocked(Date.now() >= targetTime);
    };
    check();
    const id = setInterval(check, 1000);
    return () => clearInterval(id);
  }, [isAuthenticated]);

  const handleUnlock = () => {
    localStorage.setItem("hello-kitty-auth", "true");
    setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return <PasswordGate onUnlock={handleUnlock} />;
  }

  if (!unlocked) {
    return (
      <main className="relative">
        <SoundToggle />
        <LockedGate />
      </main>
    );
  }

  return (
    <main className="relative">
      <SoundToggle />
      <Hero />
      <WaveDivider />
      <Countdown />
      <WaveDivider flip />
      <HowWeMet />
      <WaveDivider />
      <Polaroids />
      <WaveDivider flip />
      <Reasons />
      <WaveDivider />
      <Letter />
      <WaveDivider flip />
      <Footer />
    </main>
  );
}
