import { GameCard } from "@/components/game-card";
import { questions } from "@/lib/questions";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background/90 p-4 sm:p-8 md:p-12">
      <div className="text-center mb-12 bg-card/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border">
        <h1 className="text-4xl md:text-6xl font-black text-primary uppercase tracking-wider font-headline">
          Juego Electoral Perú 2026
        </h1>
        <p className="text-muted-foreground mt-4 text-lg md:text-xl max-w-2xl mx-auto">
          Toca un regalo para revelar una pregunta. ¡Responde correctamente para ganar!
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 w-full max-w-7xl">
        {questions.map((q) => (
          <GameCard key={q.id} questionData={q} />
        ))}
      </div>
    </main>
  );
}
