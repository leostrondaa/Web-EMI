import React, { useContext } from 'react';
import { UserContext } from '../../Providers/context';

export default function Header() {
  
  const { user, updateUser } = useContext(UserContext);

  return (
    <h1>Olá, {user.name}!</h1>
  );
}
