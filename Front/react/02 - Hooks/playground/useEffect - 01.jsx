import React, { useEffect, useState } from 'react';

export function App(props) {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
      window.addEventListener('resize', () => {
        setWidth(window.innerWidth);
      });

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    },
    [] /*useEffect é executado apenas uma vez*/
  );

  return (
    <div className='App'>
      <h2>Largura da janela: {width}</h2>
    </div>
  );
}
