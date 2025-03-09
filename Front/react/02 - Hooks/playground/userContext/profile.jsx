import React, { useContext } from 'react';
import { UserContext } from './context';

export default function Profile() {
  const { name } = useContext(UserContext);

  return (
    <div>Seu nome é {name}</div>
  );
}

