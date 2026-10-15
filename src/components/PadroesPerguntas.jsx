import { useState } from "react";
import { COMPETENCIAS, DECODIFICADOR, PADROES } from "../data/padroes";

const VISOES = ["Como resolver", "O que a prova mede", "Decodificador de enunciados"];
const ESCALA = 40; // as barras vão de 0 a 40%
const COR_BARRA = [
  "var(--blue-600)",
  "var(--blue-500)",
  "var(--blue-400)",
  "var(--blue-300)",
  "var(--blue-200)",
];

const fmt = (n) => n.toLocaleString("pt-BR", { maximumFractionDigits: 1 });

export default function PadroesPerguntas() {
  const [visao, setVisao] = useState(0);

  return (
    <section className="sec" id="padroes">
      <div className="wrap">
        <h2>Padrões de perguntas e respostas</h2>
        <p className="pd-lead">
          Como a banca formula os enunciados e como resolver cada tipo.
        </p>

        <div className="tabs" role="group" aria-label="Escolha o conteúdo">
          {VISOES.map((nome, i) => (
            <button
              key={nome}
              type="button"
              className={visao === i ? "on" : ""}
              aria-pressed={visao === i}
              onClick={() => setVisao(i)}
            >
              {nome}
            </button>
          ))}
        </div>

        {visao === 0 && (
          <div className="pd-acordeao">
            {PADROES.map((p, i) => (
              <details key={p.titulo} className="pd-item" open={i === 0}>
                <summary>{p.titulo}</summary>
                <p>{p.texto}</p>
              </details>
            ))}
          </div>
        )}

        {visao === 1 && (
          <div className="pd-card">
            {COMPETENCIAS.map((c, i) => (
              <div key={c.codigo} className="pd-barra">
                <div className="pd-barra-topo">
                  <span>
                    <b>{c.codigo}</b> · {c.nome}
                  </span>
                  <strong>{fmt(c.pct)}%</strong>
                </div>
                <div
                  className="pd-trilho"
                  role="img"
                  aria-label={`${c.codigo}: ${fmt(c.pct)}% da prova`}
                >
                  <i
                    style={{
                      width: `${(c.pct / ESCALA) * 100}%`,
                      background: COR_BARRA[i],
                    }}
                  />
                </div>
              </div>
            ))}
            <p className="note">
              C1 e C2 somam cerca de 66% da prova: ela mede mais “usar o que
              sabe” do que “lembrar”. As barras usam escala de 0 a 40%.
            </p>
          </div>
        )}

        {visao === 2 && (
          <ul className="pd-dec">
            {DECODIFICADOR.map((d) => (
              <li key={d.expressao} className="pd-dec-card">
                <h3>{d.expressao}</h3>
                <p>{d.texto}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}