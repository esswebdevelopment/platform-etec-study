// Questões de cada área, em cada prova (total de 50).
// Ordem dos valores: Natureza, Humanas, Português, Matemática.
export const AREAS_PESO = [
  {
    id: "natureza",
    nome: "Natureza",
    media: 17.8,
    tempo: 35,
    insight: "Maior área em 4 das 5 provas. Priorize saúde, energia, átomo e substâncias.",
  },
  {
    id: "humanas",
    nome: "Humanas",
    media: 13.8,
    tempo: 25,
    insight: "Meio ambiente e cidadania aparecem sempre. A história cai em temas pontuais.",
  },
  {
    id: "portugues",
    nome: "Português",
    media: 11.4,
    tempo: 20,
    insight: "Interpretação domina. Gramática é pontual: conectivos e pronomes.",
  },
  {
    id: "matematica",
    nome: "Matemática",
    media: 7,
    tempo: 20,
    insight:
      "Menor área, mas com contas que se repetem, sem calculadora: razão, velocidade, volume.",
  },
];

export const EDICOES = [
  { rotulo: "Média", sub: "das 5", media: true, valores: [17.8, 13.8, 11.4, 7] },
  { rotulo: "1º sem", sub: "2024", valores: [12, 17, 12, 9] },
  { rotulo: "2º sem", sub: "2024", valores: [21, 13, 11, 5] },
  { rotulo: "1º sem", sub: "2025", valores: [17, 14, 12, 7] },
  { rotulo: "1º sem", sub: "2026", valores: [20, 10, 13, 7] },
  { rotulo: "2º sem", sub: "2026", valores: [19, 15, 9, 7] },
];