import React from 'react';
import ProductsList from './products'

export function App(props) {

  const arr = [
  	{ id: 1, name: 'Geladeira' },
  	{ id: 2, name: 'Microondas' },
  	{ id: 3, name: 'Sofá' },
  	{ id: 4, name: 'Forno Elétrico' },
  	{ id: 5, name: 'Televisão' },
  	{ id: 6, name: 'Air Fryer' },
  	{ id: 7, name: 'Aparador' },
  	{ id: 8, name: 'Mesa' },
  	{ id: 9, name: 'Mesanino' },
  ];

  return (
    <div className='App'>
      <ProductsList products={arr}/>
    </div>
  );
}
