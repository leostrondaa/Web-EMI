import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Button = styled.button`
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    font-size: 20px;
    cursor: pointer;
`;

const Counter = styled.p`
  color: #FFF;
  text-align: center;
  font-size: 25px;
  text-shadow: #FC0 1px 0 10px;
`;

export function App(props) {

  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Você clicou ${count} vezes`;
  });

  return (
    <div className='App'>
      <Counter>Você clicou {count} vezes</Counter>
      <Button onClick={() => setCount(count + 1)}>
        Clique para incrementar
      </Button>
    </div>
  );
}
