// constants/data.ts
export type Category = 'stay' | 'food' | 'transport' | 'activity';

export interface Option {
  text: string;
  priceKRW: number;
  description: string;
}

export interface Question {
  id: Category;
  question: string;
  options: Option[];
}

export const TRAVEL_QUESTIONS: Question[] = [
  {
    id: 'stay',
    question: "¿Dónde prefieres dormir?",
    options: [
      { text: "Hostal / Guesthouse", priceKRW: 45000, description: "Económico y social" },
      { text: "Hotel 3-4 estrellas", priceKRW: 160000, description: "Comodidad estándar" },
      { text: "Hotel de Lujo (5성급)", priceKRW: 550000, description: "Experiencia premium" },
    ]
  },
  {
    id: 'food',
    question: "¿Cómo planeas comer?",
    options: [
      { text: "Comida callejera y 편의점", priceKRW: 35000, description: "Auténtico y barato" },
      { text: "Restaurantes locales", priceKRW: 85000, description: "Tour gastronómico" },
      { text: "Fine Dining / Alta cocina", priceKRW: 220000, description: "Lo mejor de Seúl" },
    ]
  },
  {
    id: 'transport',
    question: "¿Cómo te vas a mover?",
    options: [
      { text: "Metro y Autobús", priceKRW: 12000, description: "El mejor del mundo" },
      { text: "Taxi y Uber", priceKRW: 55000, description: "Rápido y cómodo" },
      { text: "Tour privado", priceKRW: 150000, description: "Sin preocupaciones" },
    ]
  },
  {
    id: 'activity',
    question: "¿Qué es lo que más te emociona?",
    options: [
      { text: "Cultura y Museos", priceKRW: 30000, description: "Palacios y templos (문화탐방)" },
      { text: "K-Culture & Experiencias", priceKRW: 100000, description: "Clases y shows (체험)" },
      { text: "Shopping", priceKRW: 350000, description: "¡A comprar todo! (쇼핑)" },
    ]
  }
];