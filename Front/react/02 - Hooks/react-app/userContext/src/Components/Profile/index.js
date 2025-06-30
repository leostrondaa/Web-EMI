import React, { useContext, useState } from 'react';
import { UserContext } from '../../Providers/context';

export default function Profile() {
  
  const { user, updateUser } = useContext(UserContext)
  const [name, setName] = useState(user.name)

  return (
    <>
      <div>Seu nome é {user.name}</div>
      <input
        type='text'
        name='nome'
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='Digite seu nome'
      />
      <button onClick={() => updateUser(name)}>Alterar Nome</button>
    </>
  );
}
