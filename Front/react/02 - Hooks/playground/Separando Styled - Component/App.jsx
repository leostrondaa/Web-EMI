import React, { useState, useEffect } from 'react';
import { Button, Counter } from './styled';

export function App(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Você clicou ${count} vezes`;
  });

  return (
    <div className='App'>
      <Counter>Você clicou {count} vezes</Counter>
      <Button color='orange' onClick={() => setCount(count + 1)}>
        Clique para incrementar
      </Button>
    </div>
  );
}

