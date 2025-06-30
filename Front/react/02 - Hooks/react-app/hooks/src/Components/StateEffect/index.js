import React, { useEffect, useState }  from 'react';

export function StateEffect(props) {

  const [count, setCount] = useState(0);

  // Só será reexecutado se o valor de 'count' mudar.  
  useEffect(() => {
    document.title = `Clicou: ${count} vez(es)`;
  }, [count]);

  return (
    <div>
      <h1>useState / useEffect</h1>
      <h2>Contador = {count}</h2>
      <button onClick={() => setCount(count + 1)}>Incrementar Contador</button>
      <hr/>
    </div>
  );
}
