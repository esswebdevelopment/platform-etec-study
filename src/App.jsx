import { useEffect, useState } from "react";
import Header from "./components/Header";
import MapaMental from "./components/MapaMental";
import MateriasQueMaisCaem from "./components/MateriasQueMaisCaem";
import OQueEstudar from "./components/OQueEstudar";
import QuestoesRecorrentes from "./components/QuestoesRecorrentes";
import PadroesPerguntas from "./components/PadroesPerguntas";
import { iniciarRolagem, rolarParaTopo } from "./lib/rolagem";
import "./styles.css";

const ABAS = [
  "Mapa de estudos",
  "Matérias que mais caem",
  "O que estudar",
  "Questões recorrentes",
  "Padrões de perguntas",
];

const TELAS = [
  MapaMental,
  MateriasQueMaisCaem,
  OQueEstudar,
  QuestoesRecorrentes,
  PadroesPerguntas,
];

export default function App() {
  const [aba, setAba] = useState(0);
  const Tela = TELAS[aba];

  useEffect(() => iniciarRolagem(), []);

  const trocarAba = (i) => {
    setAba(i);
    rolarParaTopo();
  };

  return (
    <>
      <Header abas={ABAS} aba={aba} onAba={trocarAba} />

      <main>
        <Tela />
      </main>

      <footer className="foot">
        <div className="wrap">
          Análise independente das provas oficiais do Vestibulinho das Etecs
          (2024 a 2026). Este material não garante aprovação. Provas e gabaritos
          em vestibulinho.etec.sp.gov.br.
        </div>
      </footer>
    </>
  );
}