import React from 'react';

// DADOS DOS PROJETOS: Edite esta lista com os seus próprios projetos
const projectsData = [
  {
    img: 'https://i.postimg.cc/gk1t5Vn0/Chat-GPT-Image-6-de-jun-de-2025-22-49-52.png',
    title: 'Criação de Sites e Web Apps',
    description: 'Desenvolvemos sites e plataformas web sob medida, combinando performance, design responsivo e tecnologias modernas.'
  },
  {
    img: 'https://i.postimg.cc/hj42xM32/Chat-GPT-Image-6-de-jun-de-2025-22-51-05.png',
    title: 'Desenvolvimento de Apps Mobile',
    description: 'Tenha um app moderno e funcional, feito para atender seus clientes com praticidade, agilidade e uma ótima experiência de uso.'
  },
  {
    img: 'https://i.postimg.cc/8k0ZJRdb/Chat-GPT-Image-6-de-jun-de-2025-22-52-38.png',
    title: 'Automatize com Bots e Sistemas Inteligentes',
    description: 'Potencialize seu servidor Discord com bots personalizados que automatizam processos, otimizam a comunicação e oferecem suporte eficiente aos usuários.'
  }
];

function Portfolio() {
  return (
    <section id="portfolio" className="section">
      <h2 className="section-title">Transformamos ideias em aplicações</h2>
      <div className="portfolio-grid">
        {projectsData.map((project, index) => (
          <div className="portfolio-item" key={index}>
            <img src={project.img} alt={`Imagem do ${project.title}`} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;