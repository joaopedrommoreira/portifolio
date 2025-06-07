// src/components/Contact.jsx - VERSÃO AVANÇADA

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { FaPaperPlane } from 'react-icons/fa'; // Ícone para o botão

function ContactForm() {
  const [state, handleSubmit] = useForm("mrbkeyye"); // <-- Use o mesmo ID de antes

  if (state.succeeded) {
      return (
        <div className="success-message">
          <h3>Obrigado pelo seu contacto!</h3>
          <p>A sua mensagem foi enviada com sucesso. Responderei em breve.</p>
        </div>
      );
  }

  return (
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Nome</label>
          <input id="name" type="text" name="name" required />
        </div>
      
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
            className="error-message"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Mensagem</label>
          <textarea id="message" name="message" rows="5" required />
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
            className="error-message"
          />
        </div>

        <button type="submit" className="btn" disabled={state.submitting}>
          <FaPaperPlane />
          <span>{state.submitting ? 'A Enviar...' : 'Enviar Mensagem'}</span>
        </button>
      </form>
  );
}

function Contact() {
  return(
    <section id="contact" className="section">
      <h2 className="section-title">Vamos Conversar</h2>
      <p className="section-text">
        Tem um projeto em mente ou quer saber mais sobre o meu trabalho? <br />
        Preencha o formulário abaixo e entrarei em contacto o mais breve possível.
      </p>
      <ContactForm />
    </section>
  )
}

export default Contact;