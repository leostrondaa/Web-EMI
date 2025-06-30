import { useState } from 'react';
import { UserContext } from '../context';

export default function UserProvider({ children }) {
  
  const [user, setUser] = useState({ name: 'Visitante' });

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
}
