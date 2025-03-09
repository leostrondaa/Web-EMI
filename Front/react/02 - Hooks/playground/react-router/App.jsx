import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router';
import Home from './home';
import About from './about';
import Contact from './contact';

export function App(props) {
  return (
    <div className='App'>

      <BrowserRouter>
        <nav>
          <Link to='/'>Home | </Link>
          <Link to='/about'>Sobre | </Link>
          <Link to='/contact'>Contato</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

