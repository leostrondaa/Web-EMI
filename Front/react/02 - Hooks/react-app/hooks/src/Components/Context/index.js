
import React, { useContext } from 'react';
import { UserContext } from '../../Providers/context';

function Header() {
  // Obtém o state "name" do contexto criado (UserProvider)
  const { name } = useContext(UserContext);

  return (
    <div>
      <h1>useContext</h1>
      <h3>Olá, {name}!</h3>
    </div>
  );
}

function Profile() {
  // Obtém o state "name" do contexto criado (UserProvider)
  const { name } = useContext(UserContext);

  return (
    <div>
      <p>Seu nome é {name}</p>
      <hr/>
    </div>
  );
}


export {
    Header,
    Profile
}