import React, { useContext } from 'react';
import { UserContext } from './context';

export default function Header() {
  const { name } = useContext(UserContext);

  return (
    <h1>Olá, {name}!</h1>
  );
}

