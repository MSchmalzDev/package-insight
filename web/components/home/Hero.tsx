import DotField from "@/components/DotField";
import { StatsBar } from "@/components/home/StatsBar";
import { HeroContent } from "@/components/home/HeroContent";
import { SearchBar } from "@/components/home/SearchBar";

export function Hero() {
  return (
    <div className="relative flex flex-1 flex-col overflow-hidden">
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
      <div className="flex flex-1 flex-col items-center justify-center gap-8 px-4">
        <HeroContent />
        <SearchBar />
      </div>
      <div className="flex justify-center pb-16">
        <StatsBar />
      </div>
    </div>
  );
}
