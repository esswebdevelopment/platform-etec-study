import { useMemo, useState } from "react";
import { PROVA, ROTEIROS } from "../data/roteiros";

const PLANOS = [7, 4, 2];
const MESES = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];
const DIA = 24 * 60 * 60 * 1000;

// Semanas de segunda a domingo, contadas de trás para frente a partir do dia da prova
function calcularSemanas(n) {
  const inicio = new Date(
    PROVA.getFullYear(),
    PROVA.getMonth(),
    PROVA.getDate() - (n * 7 - 1)
  );
  return Array.from({ length: n }, (_, i) => {
    const ini = new Date(inicio.getFullYear(), inicio.getMonth(), inicio.getDate() + i * 7);
    const fim = new Date(ini.getFullYear(), ini.getMonth(), ini.getDate() + 6);
    return { ini, fim };
  });
}

const dataCurta = (d) => `${d.getDate()} de ${MESES[d.getMonth()]}`;

const periodo = (a, b) =>
  a.getMonth() === b.getMonth()
    ? `${a.getDate()} a ${dataCurta(b)}`
    : `${dataCurta(a)} a ${dataCurta(b)}`;

// Abre no roteiro mais longo que ainda dá para seguir desde o primeiro dia
function planoPadrao() {
  const hoje = new Date();
  const meiaNoite = new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate()).getTime();
  return PLANOS.find((n) => calcularSemanas(n)[0].ini.getTime() >= meiaNoite) ?? 2;
}

export default function OQueEstudar() {
  const [n, setN] = useState(planoPadrao);
  const semanas = useMemo(() => calcularSemanas(n), [n]);
  const agora = Date.now();

  return (
    <section className="sec" id="estudar">
      <div className="wrap">
        <h2>O que estudar</h2>
        <p className="est-lead">
          19 de outubro, até a prova, em 6 de
          dezembro, são 7 semanas. Escolha o roteiro de acordo com o tempo que
          falta.
        </p>

        <div className="chips-filtro" role="group" aria-label="Duração do roteiro">
          {PLANOS.map((p) => (
            <button
              key={p}
              type="button"
              className={n === p ? "on" : ""}
              aria-pressed={n === p}
              onClick={() => setN(p)}
            >
              {p} semanas
              <small>desde {dataCurta(calcularSemanas(p)[0].ini)}</small>
            </button>
          ))}
        </div>

        <ol className="est-lista">
          {ROTEIROS[n].map((s, i) => {
            const { ini, fim } = semanas[i];
            const atual = agora >= ini.getTime() && agora < fim.getTime() + DIA;
            return (
              <li key={`${n}-${i}`} className="est-sem">
                <div className="est-quando">
                  <span className="est-num">Semana {i + 1}</span>
                  <span className="est-data">{periodo(ini, fim)}</span>
                  {atual && <span className="tag">Esta semana</span>}
                </div>
                <div className="est-conteudo">
                  <h3>{s.titulo}</h3>
                  <ul>
                    {s.tarefas.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ol>

        <p className="note">
          A prova é no domingo, 6 de dezembro, às 13h30. O roteiro é uma
          sugestão dos autores. Use as provas oficiais para treinar.
        </p>
      </div>
    </section>
  );
}