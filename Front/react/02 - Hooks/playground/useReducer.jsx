import React, { useReducer } from 'react';

export function App(props) {
  // Estado inicial
  const initialState = { count: 0 };
  // Função reducer para atualizar o estado
  function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return { count: state.count + 1 };
      case 'decrement':
        return { count: state.count - 1 };
      default:
        throw new Error();
    }
  }
  // Usando o useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className='App'>
      <h1>Contador: {state.count}</h1>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
}
