import React from 'react';
import {useNavigate} from 'react-router';

export default function Home() {
  const navigate = useNavigate();

  function goToAbout() {
	  navigate('/about');
  }

  return (
    <div>
      <h1>Página Inicial</h1>
      <button onClick={goToAbout}>Navegar para Sobre</button>
    </div>
  );
}

