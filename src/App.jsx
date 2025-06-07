import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Technologies from './components/Technologies';
import Contact from './components/Contact';
import Footer from './components/Footer';

// O ficheiro App.css foi substituído pelo index.css para estilos globais
// import './App.css'; // Pode apagar esta linha

function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Portfolio />
        <Technologies />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;