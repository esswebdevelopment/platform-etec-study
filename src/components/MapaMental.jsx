import { useEffect, useState } from "react";
import { buscarAreas } from "../api/client";
import { AREAS_LOCAIS, prioridade } from "../data/areas";

const FILTROS = ["Todos os temas", "Prioridade 1", "Prioridade 2", "Prioridade 3"];

export default function MapaMental() {
  const [areas, setAreas] = useState([]);
  const [areaAtiva, setAreaAtiva] = useState(0);
  const [filtro, setFiltro] = useState(0);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    let ativo = true;

    buscarAreas()
      .then((dados) => {
        if (ativo) setAreas(dados);
      })
      .catch(() => {
        if (ativo) setAreas(AREAS_LOCAIS);
      })
      .finally(() => {
        if (ativo) setCarregando(false);
      });

    return () => {
      ativo = false;
    };
  }, []);

  if (carregando) {
    return (
      <section className="sec" id="mapa">
        <div className="wrap">
          <p className="note" role="status">
            Carregando o mapa de estudos…
          </p>
        </div>
      </section>
    );
  }

  const area = areas[areaAtiva];
  if (!area) {
    return (
      <section className="sec" id="mapa">
        <div className="wrap">
          <p className="note">Nenhuma área encontrada. Tente recarregar a página.</p>
        </div>
      </section>
    );
  }

  const lista = [...area.temas]
    .filter((t) => filtro === 0 || prioridade(t.provas) === filtro)
    .sort((a, b) => b.provas - a.provas);

  return (
    <section className="sec" id="mapa">
      <div className="wrap">
        <h2>Mapa de estudos</h2>

        <div className="tabs" role="group" aria-label="Áreas da prova">
          {areas.map((a, i) => (
            <button
              key={a.id}
              type="button"
              className={areaAtiva === i ? "on" : ""}
              aria-pressed={areaAtiva === i}
              onClick={() => setAreaAtiva(i)}
            >
              <i style={{ background: a.cor }} aria-hidden="true" />
              {a.nome}
              <small>{a.temas.length} temas</small>
            </button>
          ))}
        </div>

        <div className="chips-filtro" role="group" aria-label="Filtrar por prioridade">
          {FILTROS.map((nome, i) => (
            <button
              key={nome}
              type="button"
              className={filtro === i ? "on" : ""}
              aria-pressed={filtro === i}
              onClick={() => setFiltro(i)}
            >
              {nome}
            </button>
          ))}
        </div>

        <ul className="temas">
          {lista.length === 0 && (
            <li className="vazio">Nenhum tema nesta prioridade. Escolha outro filtro.</li>
          )}
          {lista.map((t) => {
            const p = prioridade(t.provas);
            return (
              <li key={t.nome} className="tema">
                <span className="tema-nome">{t.nome}</span>
                <span className="freq">
                  <span className="pontos" aria-hidden="true">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <i key={n} className={n <= t.provas ? "on" : ""} />
                    ))}
                  </span>
                  em {t.provas} de 5 provas
                </span>
                <span className={`pill p${p}`}>Prioridade {p}</span>
              </li>
            );
          })}
        </ul>

        <p className="note">
          Prioridade 1 apareceu nas 5 provas. Prioridade 2, em 3 ou 4. Prioridade
          3, em 1 ou 2.
        </p>
      </div>
    </section>
  );
}