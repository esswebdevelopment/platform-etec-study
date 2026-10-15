import { useEffect, useState } from "react";
import logo from "../assets/Logo.svg";

export default function Header({ abas, aba, onAba }) {
  const [rolou, setRolou] = useState(false);

  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 24);
    aoRolar();
    window.addEventListener("scroll", aoRolar, { passive: true });
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  return (
    <header className="hd">
      <div className="urg">
        <span className="urg-dot" aria-hidden="true" />
        <span className="urg-nome">Vestibulinho Etec 2027</span>
        <span className="urg-sep" aria-hidden="true" />
        <span className="urg-plan">dia 6 de dezembro de 2026, às 13h30</span>
      </div>

      <nav className={`hd-nav${rolou ? " is-scrolled" : ""}`} aria-label="Principal">
        <span className="hd-logo">
          <img src={logo} alt="Logo" />
        </span>
        <ul className="hd-links">
          {abas.map((nome, i) => (
            <li key={nome}>
              <button
                type="button"
                className="hd-link"
                aria-current={aba === i ? "page" : undefined}
                onClick={() => onAba(i)}
              >
                {nome}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}