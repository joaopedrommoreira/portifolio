import React from 'react';
import { HiChevronDoubleDown } from "react-icons/hi2";


function Header() {
  return (
    <header className="header-hero">
      <div className="header-content">
        <h1>Olá, eu sou João Pedro</h1>
        <p>Desenvolvimento de Sites e Aplicações</p>
        <a href="#portfolio" className="btn btn-secondary">
          <HiChevronDoubleDown /> Ver Projetos </a>
      </div>
    </header>
  );
}

export default Header;