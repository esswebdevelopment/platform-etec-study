// Prova: domingo, 6 de dezembro de 2026, às 13h30 (mês 11 = dezembro)
export const PROVA = new Date(2026, 11, 6, 13, 30);

// Semanas de segunda a domingo, a última termina no dia da prova.
export const ROTEIROS = {
  7: [
    {
      titulo: "Diagnóstico e leitura",
      tarefas: [
        "Resolver meia prova oficial (2 h) e anotar os erros",
        "Estudar o Mapa de estudos e as Prioridades 1",
        "Treinar texto-base, gráfico e tabela",
      ],
    },
    {
      titulo: "Natureza I",
      tarefas: [
        "Saúde, doenças e parasitas",
        "Estrutura do átomo",
        "Substâncias simples, compostas e misturas",
        "Resolver 10 questões oficiais do tema",
      ],
    },
    {
      titulo: "Natureza II e Matemática I",
      tarefas: [
        "Calor e energia; fotossíntese e respiração",
        "Fórmula estrutural orgânica",
        "Razão, proporção e porcentagem sem calculadora",
      ],
    },
    {
      titulo: "Humanas e Matemática II",
      tarefas: [
        "Meio ambiente e cidadania; povos indígenas",
        "Mapas e localização; história recorrente",
        "Velocidade média; volume e área",
      ],
    },
    {
      titulo: "Português e Matemática III",
      tarefas: [
        "Conectivos, pronomes e conotação",
        "Canção, poema, tirinha, charge e cartaz",
        "Gráficos, notação científica e álgebra básica",
      ],
    },
    {
      titulo: "Simulado 1",
      tarefas: [
        "Prova oficial completa em 4 h, cronometrada",
        "Caderno de erros: classificar cada erro",
        "Reforçar os 3 pontos mais fracos",
      ],
    },
    {
      titulo: "Simulado 2 e descanso",
      tarefas: [
        "Segunda prova oficial cronometrada",
        "Revisar as Prioridades 1 e a estratégia de prova",
        "Sem matéria nova na sexta e no sábado; dormir bem na véspera",
      ],
    },
  ],
  4: [
    {
      titulo: "Diagnóstico e Natureza",
      tarefas: [
        "Meia prova oficial e Mapa de estudos",
        "Natureza: Prioridades 1 e 2",
        "Razão, proporção e porcentagem",
      ],
    },
    {
      titulo: "Humanas e Português",
      tarefas: [
        "Meio ambiente, indígenas e mapas",
        "Conectivos, canção/poema e tirinha",
        "Velocidade, volume e gráficos",
      ],
    },
    {
      titulo: "Simulado",
      tarefas: ["Prova oficial completa em 4 h", "Caderno de erros e reforço"],
    },
    {
      titulo: "Revisão final",
      tarefas: [
        "Prioridades 1 de todas as áreas",
        "Estratégia e checklist do dia da prova",
        "Descanso na sexta e no sábado, sem matéria nova",
      ],
    },
  ],
  2: [
    {
      titulo: "Só o que mais cai",
      tarefas: [
        "As 8 Prioridades 1 do Mapa de estudos",
        "Texto-base, gráfico, tabela e tirinha",
        "Meia prova oficial e caderno de erros",
      ],
    },
    {
      titulo: "Treino e calma",
      tarefas: [
        "Prova oficial em 4 h",
        "Revisar erros e Prioridades 1",
        "Estratégia de prova; sem matéria nova na sexta e no sábado",
      ],
    },
  ],
};