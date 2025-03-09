import React, { useState, useCallback } from 'react';
import Child from './child';

export default function Parent() {

  const [count, setCount] = useState(0);

  // Função para incrementar o contador
  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <Child increment={increment} />
      <h2>Contador: {count}</h2>
    </div>
  );
}

