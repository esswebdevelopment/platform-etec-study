export const PADROES = [
  {
    titulo: "Leia a pergunta antes do texto",
    texto:
      "Sublinhe o que ela pede (afirmar, concluir, completar) e só então leia o texto. Você lê com objetivo.",
  },
  {
    titulo: "“De acordo com o texto”: a prova está no texto",
    texto:
      "Use só o que o texto diz. Elimine alternativas que acrescentam informação, mesmo que sejam verdadeiras na vida real.",
  },
  {
    titulo: "Desconfie de palavras absolutas",
    texto:
      "Em nossa leitura das provas, “apenas”, “exclusivamente”, “completamente”, “todos” e “independentemente” aparecem muito entre as alternativas erradas. É um alerta, não uma regra: confirme no texto.",
  },
  {
    titulo: "Questão de atitude: escolha o que respeita e preserva",
    texto:
      "Nas questões de valores, a certa costuma promover respeito, legalidade, sustentabilidade e diálogo.",
  },
  {
    titulo: "Conta: dados, unidades, aproximação",
    texto:
      "Sem calculadora. Liste os dados, converta as unidades antes e arredonde quando o enunciado pedir “melhor aproximação”.",
  },
  {
    titulo: "Gráfico, tabela e mapa: título, eixos, unidade",
    texto:
      "Leia título, eixos, legenda e unidade antes de olhar a pergunta. Confira se pede maior, menor, média ou amplitude.",
  },
  {
    titulo: "Texto poético: procure o efeito",
    texto:
      "Identifique tema, eu lírico e recurso (repetição, vocativo, imperativo, metáfora) e o que ele provoca no leitor.",
  },
  {
    titulo: "Conectivos: ache a relação de sentido",
    texto:
      "Causa, concessão, condição, conclusão. Troque o conectivo e releia a frase: se o sentido mudar, errou.",
  },
  {
    titulo: "Química e Física: símbolo, número, relação",
    texto:
      "Z = prótons; A = Z + nêutrons; em fórmula, conte átomos por elemento. Em calor, diga se absorve ou libera.",
  },
  {
    titulo: "Tempo e marcação",
    texto:
      "4 h para 50 questões dão cerca de 4,8 min por questão. Responda todas: só acertos contam. Duas marcações anulam a questão. Calculadora é proibida.",
  },
];

// pct = percentual da prova que cada competência mede
export const COMPETENCIAS = [
  { codigo: "C2", nome: "Aplicar o que aprendeu no Fundamental a situações reais", pct: 39.6 },
  { codigo: "C1", nome: "Interpretar texto, gráfico, tabela, mapa e charge", pct: 26 },
  { codigo: "C5", nome: "Avaliar ações segundo critérios", pct: 12.4 },
  { codigo: "C3", nome: "Analisar argumentos criticamente", pct: 12 },
  { codigo: "C4", nome: "Relacionar linguagens e formas de expressão", pct: 10 },
];

export const DECODIFICADOR = [
  { expressao: "“É correto afirmar”", texto: "Vale só o que o texto ou o dado sustenta." },
  { expressao: "“De acordo com o texto”", texto: "Ignore o que você acha: use o que está escrito." },
  {
    expressao: "“Completa correta e respectivamente”",
    texto: "A ordem importa: confira lacuna por lacuna.",
  },
  {
    expressao: "“Com base no gráfico/tabela/mapa”",
    texto: "A resposta está no dado, não na memória.",
  },
  { expressao: "“Melhor aproximação”", texto: "Arredonde e compare a ordem de grandeza." },
  {
    expressao: "“Pode-se concluir”",
    texto: "Escolha a conclusão que decorre do texto, sem exagero.",
  },
];