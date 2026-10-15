import { useState } from "react";
import { AREAS_Q, QUESTOES } from "../data/questoes";

// "Todas" vem primeiro, depois as áreas na mesma ordem de AREAS_Q
const ABAS_Q = [{ nome: "Todas", cor: null }, ...AREAS_Q];

export default function QuestoesRecorrentes() {
  const [filtro, setFiltro] = useState(0);

  const lista = QUESTOES.filter((q) => filtro === 0 || q.area === filtro - 1);

  return (
    <section className="sec" id="questoes">
      <div className="wrap">
        <h2>Questões que mais se repetem</h2>
        <p className="qr-lead">
          {lista.length} {lista.length === 1 ? "tipo" : "tipos"} de questão. A
          frequência mostra em quantas das 5 provas oficiais o tipo apareceu.
        </p>

        <div className="tabs" role="group" aria-label="Filtrar por área">
          {ABAS_Q.map((a, i) => {
            const total =
              i === 0 ? QUESTOES.length : QUESTOES.filter((q) => q.area === i - 1).length;
            return (
              <button
                key={a.nome}
                type="button"
                className={filtro === i ? "on" : ""}
                aria-pressed={filtro === i}
                onClick={() => setFiltro(i)}
              >
                {a.cor && <i style={{ background: a.cor }} aria-hidden="true" />}
                {a.nome}
                <small>{total}</small>
              </button>
            );
          })}
        </div>

        <ul className="qr-lista">
          {lista.map((q) => {
            const area = AREAS_Q[q.area];
            return (
              <li key={q.titulo} className="qr-card">
                <div className="qr-topo">
                  <span className="qr-area">
                    <i style={{ background: area.cor }} aria-hidden="true" />
                    {area.nome}
                  </span>
                  <span className="tag-freq">em {q.provas} de 5 provas</span>
                </div>
                <h3>{q.titulo}</h3>
                <p className="qr-ex">Exemplos: {q.exemplos}</p>
                <p className="qr-dica">
                  <b>Como resolver</b>
                  {q.dica}
                </p>
              </li>
            );
          })}
        </ul>

        <p className="note">
          Nos exemplos, 2º/26 é o 2º semestre de 2026 e Q34 é a questão 34 da
          prova.
        </p>
      </div>
    </section>
  );
}