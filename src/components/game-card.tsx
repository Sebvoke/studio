"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import type { Question } from "@/lib/questions";
import { Button } from "@/components/ui/button";
import { GiftIcon } from "@/components/icons";
import { Card } from "@/components/ui/card";

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
      ? "animate-pulse-green"
      : answerState === "incorrect"
      ? "animate-pulse-red"
      : "";

  return (
    <div className="perspective-[1000px] w-full h-full cursor-pointer" onClick={handleCardClick}>
      <Card
        className={cn(
          "relative w-full h-full transition-transform duration-700 transform-style-3d rounded-lg",
          isFlipped ? "rotate-y-180" : "",
          glowEffect
        )}
      >
        {/* Front of the card */}
        <div className="absolute w-full h-full backface-hidden flex items-center justify-center bg-card rounded-lg border shadow-lg">
          <GiftIcon className="w-20 h-20 md:w-24 md:h-24 text-primary" />
        </div>

        {/* Back of the card */}
        <div className={cn(
          "absolute w-full h-full backface-hidden rotate-y-180 bg-card rounded-lg border shadow-lg flex flex-col items-center justify-center p-4 md:p-6 transition-opacity duration-300",
          isRevealed ? "opacity-100" : "opacity-0"
        )}>
          {answerState === 'correct' ? (
            <div className="text-center">
              <h2 className="text-2xl md:text-4xl font-bold text-green-600">¡Ganaste tu regalo!</h2>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-between h-full w-full text-center">
              <h2 className="text-xl md:text-2xl font-bold mb-4 leading-tight">
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
                    className="w-full h-auto min-h-[60px] text-lg md:text-xl py-3 px-4 whitespace-normal"
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
      </Card>
    </div>
  );
}
