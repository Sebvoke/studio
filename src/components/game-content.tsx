"use client";

import { GameCard } from "@/components/game-card";
import { questions } from "@/lib/questions";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/toaster";
import { RotateCw } from "lucide-react";

export default function GameContent() {
  const handleRestart = () => {
    window.location.reload();
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 md:p-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 w-full max-w-7xl">
        {questions.map((q) => (
          <GameCard key={q.id} questionData={q} />
        ))}
      </div>
      <div className="mt-12">
        <Button
          onClick={handleRestart}
          size="lg"
          className="shadow-lg bg-primary hover:bg-primary/90 text-primary-foreground font-semibold border-0"
        >
          <RotateCw className="mr-2 h-5 w-5" />
          Reiniciar Juego
        </Button>
      </div>
      <Toaster />
    </main>
  );
}
