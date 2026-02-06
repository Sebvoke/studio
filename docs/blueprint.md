# **App Name**: Peruvian Election Gift Game

## Core Features:

- Question Display: Display election-related questions on card flip.
- Answer Options: Show three answer buttons for each question.
- Correct Answer Logic: Validate selected answer against the correct answer.
- Success Feedback: Provide green flash, sound effect, and winning message for correct answers.
- Failure Redirection: If a question is answered incorrectly, make the tile glow red, then flip the tile to face down to let the player try again.
- Card Flip Animation: Smooth card flipping using CSS 3D transforms.

## Style Guidelines:

- Primary color: Use Peruvian red (#D2232A) to represent national identity and importance.
- Background color: Off-white (#F0F0F0), provides a soft contrast with the red and reduces eye strain on touch screens.
- Accent color: A deeper red (#A31A21) for active states and interactive elements, giving a sense of depth and focus.
- Body and headline font: 'PT Sans', a clear, legible sans-serif for question and answer text, ideal for readability on touchscreens.
- Six large, card-style squares fill the Full HD screen, optimized for touch interaction.
- Gift icons (using a simple SVG) on card fronts, indicating reward potential.
- Fluid card flips using perspective and transform-style: preserve-3d CSS properties.