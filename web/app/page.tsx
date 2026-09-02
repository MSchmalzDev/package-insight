import DotField from "@/components/DotField";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="relative flex flex-1 items-center justify-center overflow-hidden">
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
      </div>
    </>
  );
}
