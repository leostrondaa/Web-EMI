import React, { useState } from 'react';

export function App(props) {
  // Inicializa o valor dos campos como string vazia
  const [usuario, setUsuario] = useState({
    nome: '',
    email: '',
  });

  const handleChange = event => {
    // Atualiza o valor do estado com o valor digitado no input
    setUsuario({
      ...usuario,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className='App'>
      <input
        type='text'
        name='nome'
        value={usuario.nome}
        onChange={handleChange}
        placeholder='Digite seu nome'
      />
      <input
        type='email'
        name='email'
        value={usuario.email}
        onChange={handleChange}
        placeholder='Digite seu email'
      />
      <p>Seu nome é: "{usuario.nome}"</p>
      <p>Seu email é: "{usuario.email}"</p>
    </div>
  );
}

