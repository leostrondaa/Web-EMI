import React from 'react';
import {useNavigate} from 'react-router';

export default function About() {
  const navigate = useNavigate();

  function goToContact() {
	  navigate('/contact');
  }

  return (
    <div>
     <h1>Sobre Nós</h1>
      <button onClick={goToContact}>Navegar para Contato</button>
    </div>
  );
}

