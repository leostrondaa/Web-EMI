import React from 'react';
import {useNavigate} from 'react-router';

export default function Contact() {
  const navigate = useNavigate();

  function goToHome() {
	  navigate('/');
  }

  return (
    <div>
     <h1>Dados de Contato</h1>
      <button onClick={goToHome}>Navegar para Home</button>
    </div>
  );
}

