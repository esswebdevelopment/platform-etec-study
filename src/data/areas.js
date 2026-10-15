// Dados de reserva: usados quando a API não responde.
// "provas" = em quantas das 5 provas oficiais o tema apareceu.
export const AREAS_LOCAIS = [
  {
    id: "natureza",
    nome: "Natureza",
    cor: "#0AFA46",
    temas: [
      { nome: "Saúde, doenças e parasitas", provas: 5 },
      { nome: "Calor e energia", provas: 5 },
      { nome: "Estrutura do átomo (Z, A, nêutrons)", provas: 4 },
      { nome: "Substâncias simples, compostas e misturas", provas: 3 },
      { nome: "Fotossíntese e respiração", provas: 3 },
      { nome: "Fórmula estrutural orgânica", provas: 3 },
      { nome: "Óptica", provas: 2 },
      { nome: "pH e neutralização", provas: 2 },
    ],
  },
  {
    id: "humanas",
    nome: "Humanas",
    cor: "#FAC40A",
    temas: [
      { nome: "Meio ambiente, sustentabilidade e cidadania", provas: 5 },
      { nome: "Povos indígenas", provas: 4 },
      { nome: "Mapas e localização", provas: 3 },
      { nome: "Grandes Navegações e colonização", provas: 2 },
      { nome: "Brasil Colônia: cana, drogas do sertão, borracha", provas: 2 },
      { nome: "Imperialismo", provas: 2 },
      { nome: "Egito Antigo", provas: 2 },
      { nome: "Guerras Mundiais e Guerra Fria", provas: 2 },
    ],
  },
  {
    id: "portugues",
    nome: "Português",
    cor: "#355FFF",
    temas: [
      { nome: "Canção ou poema", provas: 5 },
      { nome: "Tirinha, charge ou cartaz", provas: 5 },
      { nome: "Conectivos e relação de sentido", provas: 5 },
      { nome: "Conotação e figuras de linguagem", provas: 4 },
      { nome: "Pronomes e referência no texto", provas: 3 },
      { nome: "Gênero textual e objetivo do texto", provas: 2 },
    ],
  },
  {
    id: "matematica",
    nome: "Matemática",
    cor: "#13289C",
    temas: [
      { nome: "Razão, proporção e porcentagem", provas: 5 },
      { nome: "Leitura de gráfico e tabela com conta", provas: 5 },
      { nome: "Velocidade média e tempo", provas: 4 },
      { nome: "Volume e área de sólidos", provas: 4 },
      { nome: "Notação científica", provas: 3 },
      { nome: "Álgebra básica (função, sistema)", provas: 3 },
      { nome: "Pitágoras e trigonometria", provas: 2 },
      { nome: "Combinatória", provas: 1 },
    ],
  },
];

// Mesma regra da versão anterior: 5 provas = prioridade 1, 3 a 4 = 2, 1 a 2 = 3.
export const prioridade = (provas) => (provas > 4 ? 1 : provas > 2 ? 2 : 3);
