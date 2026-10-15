import { AREAS_PESO, EDICOES } from "../data/materias";

const fmt = (n) => n.toLocaleString("pt-BR", { maximumFractionDigits: 1 });

// Da base (Natureza) para o topo (Matemática), em tons da escala azul
const COR = ["var(--blue-600)", "var(--blue-500)", "var(--blue-400)", "var(--blue-300)"];
const TEXTO = ["#fff", "#fff", "var(--blue-950)", "var(--blue-950)"];

export default function MateriasQueMaisCaem() {
  return (
    <section className="sec mat" id="materias">
      <div className="wrap">
        <h2>Matérias que mais caem</h2>
        <p className="mat-lead">
          Quantas das 50 questões foram de cada área, prova a prova.
        </p>

        <div className="mat-card">
          <div className="mat-legenda" aria-hidden="true">
            {AREAS_PESO.map((a, i) => (
              <span key={a.id}>
                <i style={{ background: COR[i] }} />
                {a.nome}
              </span>
            ))}
          </div>

          <div className="grafico" role="list" aria-label="Questões por área em cada prova">
            {EDICOES.map((ed) => (
              <div
                key={`${ed.rotulo}-${ed.sub}`}
                className={`col${ed.media ? " media" : ""}`}
                role="listitem"
                aria-label={`${ed.rotulo} ${ed.sub}: ${AREAS_PESO.map(
                  (a, i) => `${a.nome} ${fmt(ed.valores[i])}`
                ).join(", ")}`}
              >
                <div className="pilha">
                  {ed.valores.map((v, i) => (
                    <span
                      key={AREAS_PESO[i].id}
                      className="seg"
                      style={{ flexGrow: v, background: COR[i], color: TEXTO[i] }}
                      title={`${AREAS_PESO[i].nome}: ${fmt(v)} questões`}
                    >
                      {fmt(v)}
                    </span>
                  ))}
                </div>
                <span className="col-nome">
                  <b>{ed.rotulo}</b>
                  {ed.sub}
                </span>
              </div>
            ))}
          </div>
        </div>

        <ul className="mat-lista">
          {AREAS_PESO.map((a) => (
            <li key={a.id} className="mat-item">
              <h3>{a.nome}</h3>
              <p>{a.insight}</p>
              <small>Tempo de estudo sugerido: {a.tempo}%</small>
              <span className="tag">Média de {fmt(a.media)} questões</span>
            </li>
          ))}
        </ul>

        <p className="note">
          Natureza foi a maior área em 4 das 5 provas e Matemática foi a menor
          em todas. O tempo sugerido é dos autores e dá à Matemática mais espaço
          que o peso dela, porque as contas se repetem e não há calculadora. A
          classificação por área também é dos autores e pode variar cerca de 2
          questões por prova.
        </p>
      </div>
    </section>
  );
}