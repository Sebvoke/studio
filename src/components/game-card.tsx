"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { Question } from "@/lib/questions";
import { Button } from "@/components/ui/button";
import { PartyPopper } from "lucide-react";

interface GameCardProps {
  questionData: Question;
}

type AnswerState = "unanswered" | "correct" | "incorrect";

export function GameCard({ questionData }: GameCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [answerState, setAnswerState] = useState<AnswerState>("unanswered");
  const [isRevealed, setIsRevealed] = useState(false);

  const handleCardClick = () => {
    if (answerState !== 'correct' && !isFlipped) {
      setIsFlipped(true);
      setTimeout(() => setIsRevealed(true), 350); // Match animation duration
    }
  };

  const handleAnswerClick = (option: string) => {
    if (answerState !== "unanswered") return;

    if (option === questionData.correctAnswer) {
      setAnswerState("correct");
    } else {
      setAnswerState("incorrect");
      setTimeout(() => {
        setIsFlipped(false);
        setIsRevealed(false);
        setAnswerState("unanswered");
      }, 2000);
    }
  };

  const glowEffect =
    answerState === "correct"
      ? "animate-pulse-primary"
      : answerState === "incorrect"
      ? "animate-pulse-red"
      : "";

  return (
    <div className="perspective-[1000px] w-full aspect-square cursor-pointer group" onClick={handleCardClick}>
      <div
        className={cn(
          "relative w-full h-full transition-transform duration-700 transform-style-3d rounded-2xl shadow-xl",
          isFlipped ? "rotate-y-180" : "",
          glowEffect
        )}
      >
        {/* Front of the card */}
        <div className="absolute w-full h-full backface-hidden rounded-2xl overflow-hidden shadow-lg border-4 border-white/10 bg-card/80 backdrop-blur-md">
          <div className="flex flex-col items-center justify-center w-full h-full p-6 text-center text-white">
            <div className="relative w-32 h-32 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-2">
               <Image
                src={questionData.image}
                alt="Regalo"
                fill
                className="object-contain drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]"
               />
            </div>
            <p className="font-bold text-2xl mt-4 bg-clip-text text-transparent bg-gradient-to-r from-white/90 to-white/60">
              Regalo
            </p>
            <p className="font-semibold text-lg text-white/70">por Voto Informado</p>
            <div className="mt-auto bg-white/10 rounded-full py-1 px-4 text-sm">
                Toca para revelar
            </div>
          </div>
        </div>


        {/* Back of the card */}
        <div className={cn(
          "absolute w-full h-full backface-hidden rotate-y-180 rounded-2xl shadow-xl overflow-hidden border-4 border-white/10 bg-card/80 backdrop-blur-md",
          "transition-opacity duration-300",
          isRevealed ? "opacity-100" : "opacity-0"
        )}>
          <div className="w-full h-full flex flex-col items-center justify-center p-4 sm:p-6 text-center">
            {answerState === 'correct' ? (
              <div className="text-center flex flex-col items-center gap-4 px-4">
                <PartyPopper className="w-20 h-20 text-accent animate-bounce" />
                <h2 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">¡GANASTE!</h2>
                <p className="text-white/90 text-base sm:text-lg">¡Has desbloqueado tu regalo!</p>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-around h-full w-full">
                <h2 className="text-lg sm:text-xl font-bold leading-tight px-2 text-white">
                  {questionData.question}
                </h2>
                <div className="flex flex-col w-full max-w-xs space-y-2 sm:space-y-3">
                  {questionData.options.map((option) => (
                    <Button
                      key={option}
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent card from flipping back on button click
                        handleAnswerClick(option)
                      }}
                      className="w-full h-auto text-sm sm:text-base py-3 px-4 whitespace-normal rounded-xl font-semibold transition-all duration-300
                                 border-2 border-primary/30 bg-primary/10 text-white
                                 hover:bg-accent hover:text-accent-foreground hover:border-accent focus:bg-accent focus:text-accent-foreground focus:border-accent"
                      variant="outline"
                      disabled={answerState !== 'unanswered'}
                    >
                      {option}
                    </Button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
