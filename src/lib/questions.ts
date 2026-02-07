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
    question: '¿Cuál es el mensaje central de la campaña OrguYO – Voto Informado?'
,
    options: ['Informarse para emitir un voto responsable ', 'Criticar el sistema electoral', 'incentivar a votar sin pensar','Promover un partido político'],
    correctAnswer: 'Informarse para emitir un voto responsable ',
    image: '/regalo1.png',
  },
  {
    id: 2,
    question: '¿Qué acciones debemos realizar antes de votar? ',
    options: ['Revisar los CVs de los candidatos y analizar propuestas', 'Seguir la opinión de los influencers', 'Escuchar al candidato más popular','Preguntale a la IA quien gana las encuestas'],
    correctAnswer: 'Revisar los CVs de los candidatos y analizar propuestas',
    image: '/regalo2.png',
  },
  {
    id: 3,
    question: '¿Qué elegiremos estas elecciones?',
    options: ['1 Presidente, 2 Vicepresidentes, 60 Senadores, 130 Diputados, 5 Parlamento Andino', '1 Presidente, 1 Vicepresidentes, 6 Senadores, 10 Diputados', '1 Presidente, 60 Senadores y 130 Diputados y 1 Parlamento Andino por región','1 Presidente y Vicepresidente'],
    correctAnswer: '1 Presidente, 2 Vicepresidentes, 60 Senadores, 130 Diputados, 5 Parlamento Andino',
    image: '/regalo3.png',
  },
  {
    id: 4,
    question: '¿Dónde puedo conocer y comparar a los candidatos y sus propuestas?',
    options: ['Web de la ONPE', 'Web Voto Informado del JNE', 'Redes Sociales de candidatos','Web de los partidos políticos'],
    correctAnswer: 'Web Voto Informado del JNE',
    image: '/regalo4.png',
  },
  {
    id: 5,
    question: '¿Qué día se realizará las elecciones?',
    options: ['5 de abril', '12 de abril', '19 de abril ','26 de abril '],
    correctAnswer: '12 de abril',
    image: '/regalo5.png',
  },
  {
    id: 6,
    question: '¿Es el voto secreto?',
    options: ['No, es público', 'Depende de la región', 'Sí, es secreto'],
    correctAnswer: 'Sí, es secreto',
    image: '/regalo6.png',
  },
];
