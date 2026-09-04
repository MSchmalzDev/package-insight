export function HeroContent() {
  return (
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
  );
}
