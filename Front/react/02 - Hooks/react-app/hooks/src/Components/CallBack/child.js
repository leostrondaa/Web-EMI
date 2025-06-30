import React from 'react';

export default function Child({ increment }) {
  return (
    <button onClick={increment}>Incrementar</button>
  );
}
