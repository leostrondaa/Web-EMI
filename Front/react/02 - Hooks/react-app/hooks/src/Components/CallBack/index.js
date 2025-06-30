import React, { useState, useCallback } from 'react';
import Child from './child';

export default function CallBack() {

    const [count, setCount] = useState(0);

    // Função para incrementar o contador
    const increment = useCallback(() => {
        setCount(count + 1);
    }, [count]);

    return (
        <div>
            <h1>useCallback</h1>
            <Child increment={increment} />
            <p>Contador: {count}</p>
            <hr/>
        </div>
    );
}

