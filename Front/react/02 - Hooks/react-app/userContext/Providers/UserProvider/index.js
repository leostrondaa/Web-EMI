import React, { useState } from 'react';
import { UserContext } from '../context';

export default function UserProvider({ children }) {
  
  const [user, setUser] = useState({ name: 'Visitante' });

  const updateUser = (value) => {
    setUser({ name: value });
  };

  const contextUser = {
    user,
    updateUser,
  };

  return (
    <UserContext.Provider value={contextUser}>
      {children}
    </UserContext.Provider>
  );
}
