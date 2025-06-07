// src/components/Technologies.jsx

import React from 'react';
// Importando os ícones que vamos precisar da biblioteca react-icons
import { IoLogoJavascript, IoLogoNodejs, IoLogoHtml5 } from 'react-icons/io5';
import { FaPython, FaReact, FaDiscord, FaDatabase } from 'react-icons/fa';
import { TbBrandReactNative } from 'react-icons/tb';
import { SiMysql } from 'react-icons/si';


// Lista de tecnologias para ser fácil de editar e adicionar novas
const technologies = [
  { name: 'JavaScript', icon: <IoLogoJavascript size={48} color="#F7DF1E" /> },
  { name: 'Node.js', icon: <IoLogoNodejs size={48} color="#339933" /> },
  { name: 'Python', icon: <FaPython size={48} color="#3776AB" /> },
  { name: 'React', icon: <FaReact size={48} color="#61DAFB" /> },
  { name: 'React Native', icon: <TbBrandReactNative size={48} color="#61DAFB" /> },
  { name: 'MySQL', icon: <SiMysql size={48} color="#4479A1" /> },
  { name: 'Discord.js', icon: <FaDiscord size={48} color="#5865F2" /> },
  { name: 'HTML', icon: <IoLogoHtml5 size={48} color="#ff8d21" /> },
  // Pode adicionar mais tecnologias aqui!
  // { name: 'Outra Tecnologia', icon: <FaDatabase size={48} color="#E34F26" /> },
];

function Technologies() {
  return (
    <section id="technologies" className="section">
      <h2 className="section-title">Tecnologias e Ferramentas</h2>
      <p className="section-text">
        Estas são algumas das tecnologias com as quais tenho experiência e que utilizo para criar soluções robustas e modernas.
      </p>
      
      {/* Grelha que vai conter os ícones das tecnologias */}
      <div className="tech-grid">
        {technologies.map((tech, index) => (
          <div className="tech-item" key={index}>
            <div className="tech-icon">{tech.icon}</div>
            <span className="tech-name">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Technologies;