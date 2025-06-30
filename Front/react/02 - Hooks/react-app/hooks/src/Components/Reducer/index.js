import React, {useReducer} from "react";

export default function Reducer() {

    const initialState = { count: 10 }
    const [state, dispatch] = useReducer(reducer, initialState);

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

    return (
        <div className="App">
            <h1>useReducer</h1>
            <h2>Contador: {state.count}</h2>
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
            <hr/>
        </div>
    );
}
