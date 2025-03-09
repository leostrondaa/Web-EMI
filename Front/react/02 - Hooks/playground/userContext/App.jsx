import React from 'react';
import UserProvider from './provider';
import Header from './header';
import Profile from './profile';

export function App(props) {
  return (
    <div className = "App"> 
      <UserProvider>
        <Header />
        <Profile />
      </UserProvider>
    </div>
  );
}
