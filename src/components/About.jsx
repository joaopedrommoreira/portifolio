// src/components/About.jsx

import React from 'react';
// Vamos usar um ícone que já está na biblioteca react-icons
import { FaMapMarkerAlt } from 'react-icons/fa';

// Pode definir as suas localidades aqui para ser mais fácil de editar
const localidades = [
  'Caratinga - MG',
  'Atuação em todo o Brasil (Remoto)',
  'Projetos Internacionais'
];

function About() {
  return (
    <section id="about" className="section">
      {/* Container principal que terá as duas colunas */}
      <div className="about-container">
        
        {/* Coluna da Imagem */}
        <div className="about-image">
          <img 
            src="https://i.postimg.cc/s2Gjz9J0/Chat-GPT-Image-6-de-jun-de-2025-22-40-28.png" 
            alt="Imagem representando a empresa ou serviço" 
          />
        </div>

        {/* Coluna do Conteúdo */}
        <div className="about-content">
          <h2 className="section-title">Sobre Automize</h2>
          <p className="section-text">
            Automize é uma empresa de tecnologia em fase inicial, especializada no desenvolvimento de soluções digitais sob medida para empresas. Mesmo jovem, já nasce com uma visão clara: criar aplicativos, sistemas web e ferramentas inteligentes que otimizam processos, reduzem custos e impulsionam resultados.

Com uma abordagem moderna e centrada no cliente, a Automize combina agilidade, tecnologia e proximidade para entregar soluções eficientes e personalizadas para cada negócio.
          </p>
          
          <h3>Áreas de Atuação</h3>
          <ul className="locations-list">
            {localidades.map((local, index) => (
              <li key={index} className="location-item">
                <FaMapMarkerAlt /> 
                <span>{local}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}

export default About;