export type Question = {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  image: string;
};

export const questions: Question[] = [
  {
    id: 1,
    question: '¿Qué nuevas cámaras legislativas elegiremos en 2026?',
    options: ['Senadores y Diputados', 'Congresistas y Asambleístas', 'Cámara de Lores y Comunes'],
    correctAnswer: 'Senadores y Diputados',
    image: '/regalo1.png',
  },
  {
    id: 2,
    question: '¿En qué mes se realizarán las elecciones generales 2026?',
    options: ['Julio', 'Octubre', 'Abril'],
    correctAnswer: 'Abril',
    image: '/regalo2.png',
  },
  {
    id: 3,
    question: '¿Es obligatorio el voto para mayores de 18 años?',
    options: ['Sí, es obligatorio', 'No, es opcional', 'Solo para hombres'],
    correctAnswer: 'Sí, es obligatorio',
    image: '/regalo3.png',
  },
  {
    id: 4,
    question: '¿Cuántos años dura el período presidencial en Perú?',
    options: ['4 años', '5 años', '6 años'],
    correctAnswer: '5 años',
    image: '/regalo4.png',
  },
  {
    id: 5,
    question: '¿Cuál es la edad mínima para ser Presidente del Perú?',
    options: ['30 años', '40 años', '35 años'],
    correctAnswer: '35 años',
    image: '/regalo5.png',
  },
  {
    id: 6,
    question: '¿El voto en Perú es secreto?',
    options: ['No, es público', 'Depende de la región', 'Sí, es secreto'],
    correctAnswer: 'Sí, es secreto',
    image: '/regalo6.png',
  },
];
