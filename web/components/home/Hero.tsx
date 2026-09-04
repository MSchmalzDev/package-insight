import DotField from "@/components/DotField";

export function Hero() {
  return (
    <>
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
        <div className="flex flex-col items-center justify-center gap-4 px-4 text-center">
          <h3 className="text-center text-4xl font-extrabold leading-tight">
            Erkunde <span className="text-purple-300">npm-Pakete.</span> <br />{" "}
            Verstehe Abhängigkeiten.
          </h3>
          <p className="max-w-lg text-center text-lg text-gray-300 font-medium">
            Analysiere die Gesundheit von Paketen, entdecke <br />
            Abhängigkeiten und relevante Konflikte, <br />
            bevor sie Probleme verursachen.
          </p>
        </div>
      </div>
    </>
  );
}
