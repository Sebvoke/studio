import { GameCard } from "@/components/game-card";
import { questions } from "@/lib/questions";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background p-4 md:p-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-6xl font-bold text-primary font-headline">
          Juego Electoral Perú 2026
        </h1>
        <p className="text-muted-foreground mt-2 text-lg">
          Toca un regalo, responde la pregunta y ¡gana!
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 w-full max-w-7xl aspect-[3/2]">
        {questions.map((q) => (
          <GameCard key={q.id} questionData={q} />
        ))}
      </div>
    </main>
  );
}
