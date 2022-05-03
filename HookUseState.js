import React, {useState} from "react";

const useCounter = (initialValue) => {
    const [counter, setCounter] = useState(initialValue);
    return { counter, setCounter }
}

function HookUseState() {
    const {counter, setCounter} = useCounter(0);

    return(
        <div className="App">
            <h1>{counter}</h1>
            <button onClick={() => setCounter(counter -1)}>-    </button>
            <button onClick={() => setCounter(counter +1)}>+</button>
        </div>
    )
}
export default HookUseState;