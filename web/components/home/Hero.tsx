import DotField from "@/components/DotField";
import { StatsBar } from "@/components/home/StatsBar";
import { HeroContent } from "@/components/home/HeroContent";

export function Hero() {
  return (
    <>
      <div className="absolute inset-0 -z-10">
        <DotField
          dotRadius={3}
          dotSpacing={20}
          bulgeStrength={18}
          glowRadius={0}
          sparkle={false}
          waveAmplitude={0}
          cursorRadius={300}
          cursorForce={0.1}
          bulgeOnly
          gradientFrom="#A855F7"
          gradientTo="#B497CF"
          glowColor="#120F17"
        />
      </div>
      <div className="flex center flex-col items-center justify-center gap-8 py-16">
        <HeroContent />
        <StatsBar />
      </div>
    </>
  );
}
