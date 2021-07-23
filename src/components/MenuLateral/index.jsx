import { useState } from "react";
import "./style.css";

function MenuLateral() {
  const [expandir, setExpandir] = useState("");
  const [expandirBotao, setExpandirBotao] = useState("");

  const expandirMenu = () => {
    expandir ? setExpandir("") : setExpandir("expandir");
    expandirBotao ? setExpandirBotao("") : setExpandirBotao("expandir-botao");
  };

  return (
    <>
      <nav className={`menu-lateral ${expandir}`}>
        <ul>
          <li>
            <span className="icones"><i className="fas fa-id-badge fs-4 text-white"></i></span>
            <span className="texto-menu">PACIENTES</span>
          </li>
          <li>
            <span className="icones"><i className="fas fa-syringe fs-4 text-white"></i></span>
            <span className="texto-menu">PROCEDIMENTOS</span>
          </li>
          <li>
            <span className="icones"><i className="fas fa-receipt fs-4 text-white"></i></span>
            <span className="texto-menu">RECIBOS</span>
          </li>
          <li>
            <span className="icones"><i className="fas fa-users fs-4 text-white"></i></span>
            <span className="texto-menu">USUÁRIOS</span>
          </li>
          <li>
            <span className="icones"><i className="fas fa-cogs fs-4 text-white"></i></span>
            <span className="texto-menu">CONFIGURAÇÃO</span>
          </li>
        </ul>
      </nav>
      <div className={`botao-menu ${expandirBotao}`} onClick={expandirMenu}>
        <i className="fas fa-angle-right text-white fs-3"></i>
      </div>
    </>
  );
}

export default MenuLateral;
