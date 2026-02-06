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
      setTimeout(() => setIsRevealed(true), 250); // Match animation duration
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
          "relative w-full h-full transition-transform duration-700 transform-style-3d",
          isFlipped ? "rotate-y-180" : "",
          glowEffect
        )}
      >
        {/* Front of the card */}
        <div className="absolute w-full h-full backface-hidden rounded-2xl shadow-xl p-0.5 bg-gradient-to-br from-primary to-accent">
          <div className="flex items-center justify-center w-full h-full p-4 overflow-hidden bg-card/90 backdrop-blur-sm rounded-[15px]">
            <Image
              src={questionData.image}
              alt="Regalo"
              fill
              className="object-contain w-full h-full p-4 transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        </div>


        {/* Back of the card */}
        <div className={cn(
          "absolute w-full h-full backface-hidden rotate-y-180 rounded-2xl shadow-xl p-0.5 bg-gradient-to-br from-primary to-accent transition-opacity duration-300",
          isRevealed ? "opacity-100" : "opacity-0"
        )}>
          <div className="w-full h-full bg-card/90 backdrop-blur-sm rounded-[15px] flex flex-col items-center justify-center p-4 md:p-6">
            {answerState === 'correct' ? (
              <div className="text-center flex flex-col items-center gap-4">
                <PartyPopper className="w-16 h-16 text-primary" />
                <h2 className="text-2xl md:text-3xl font-bold italic text-primary">¡Ganaste!</h2>
                <p className="text-muted-foreground">¡Has desbloqueado tu regalo!</p>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full w-full text-center">
                <h2 className="text-xl md:text-2xl font-bold italic mb-6 leading-tight">
                  {questionData.question}
                </h2>
                <div className="flex flex-col w-full space-y-3">
                  {questionData.options.map((option) => (
                    <Button
                      key={option}
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent card from flipping back on button click
                        handleAnswerClick(option)
                      }}
                      className="w-full h-auto text-base md:text-lg py-3 px-4 whitespace-normal"
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
