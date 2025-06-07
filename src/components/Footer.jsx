import React from 'react';

function Footer() {
  return (
    <footer>
      <p>
        <a href="[URL-do-seu-LinkedIn]" target="_blank" rel="noopener noreferrer">LinkedIn</a> | 
        <a href="[URL-do-seu-GitHub]" target="_blank" rel="noopener noreferrer">GitHub</a>
      </p>
      <p>&copy; {new Date().getFullYear()} Automize Soluções & Tecnologias. Todos os direitos reservados.</p>
    </footer>
  );
}

export default Footer;