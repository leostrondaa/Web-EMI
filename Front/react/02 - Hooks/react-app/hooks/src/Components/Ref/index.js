import React, { useRef } from 'react';

export default function Ref() {
  
    const inputRef = useRef(null);

    // Gerencia o Clique no botão 
    const handleClick = () => {
        // Acessa o elemento DOM real através de inputRef.current
        // e invoca o método focus() para ele.
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    return (
    <div>
         <h1>useRef</h1>
        <input
            type="text"
            // Anexa a ref ao elemento input usando a prop 'ref'. 
            // Agora, inputRef.current aponta para o elemento DOM.
            ref={inputRef}
            placeholder="Clique no botão para me focar!"
        />
        <button onClick={handleClick}>Focar Input</button>
        <p>Ao clicar no botão o campo de texto recebe foco.</p>
        <hr/>
    </div>
    );
}