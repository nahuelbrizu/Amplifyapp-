import React, {useState,useEffect} from "react";

function HookUseEffect()  {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
            setCounter(counter + 0);
            return() => {
                console.log("hola useEffect")
            }
        },[]
    )
    return(
        <div className="App">
            <h1>{counter}</h1>
            <button onClick={() => setCounter(counter -1)}>-</button>
            <button onClick={() => setCounter(counter +1)}>+</button>
        </div>
    );
}
export default HookUseEffect;