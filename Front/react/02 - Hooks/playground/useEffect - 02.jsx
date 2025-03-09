import React, { useEffect, useState }  from 'react';

export function App(props) {

  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Clicou: ${count} vez(es)`;
  }, [count]);

  return (
    <div className='App'>
      <h2>Contador = {count}</h2>
      <button onClick={() => setCount(count + 1)}>Incrementar Contador</button>
    </div>
  );
}
