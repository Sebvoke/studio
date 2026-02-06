export type Question = {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
};

export const questions: Question[] = [
  {
    id: 1,
    question: '¿Qué nuevas cámaras legislativas elegiremos en 2026?',
    options: ['Senadores y Diputados', 'Congresistas y Asambleístas', 'Cámara de Lores y Comunes'],
    correctAnswer: 'Senadores y Diputados',
  },
  {
    id: 2,
    question: '¿En qué mes se realizarán las elecciones generales 2026?',
    options: ['Julio', 'Octubre', 'Abril'],
    correctAnswer: 'Abril',
  },
  {
    id: 3,
    question: '¿Es obligatorio el voto para mayores de 18 años?',
    options: ['Sí, es obligatorio', 'No, es opcional', 'Solo para hombres'],
    correctAnswer: 'Sí, es obligatorio',
  },
  {
    id: 4,
    question: '¿Cuántos años dura el período presidencial en Perú?',
    options: ['4 años', '5 años', '6 años'],
    correctAnswer: '5 años',
  },
  {
    id: 5,
    question: '¿Cuál es la edad mínima para ser Presidente del Perú?',
    options: ['30 años', '40 años', '35 años'],
    correctAnswer: '35 años',
  },
  {
    id: 6,
    question: '¿El voto en Perú es secreto?',
    options: ['No, es público', 'Depende de la región', 'Sí, es secreto'],
    correctAnswer: 'Sí, es secreto',
  },
];
