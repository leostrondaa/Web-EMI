import React, { useState, useEffect } from 'react';

export function App(props) {

  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Você clicou ${count} vezes`;
  });

  return (
    <div className='App'>
      <p>Você clicou {count} vezes</p>
      <button onClick={() => setCount(count + 1)}>
        Clique para incrementar
      </button>
    </div>
  );
}
