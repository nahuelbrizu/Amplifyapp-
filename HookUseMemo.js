import React, {useMemo} from "react";

function computeExpensiveValue(a, b){
    return a + b;
}

function HookUseMemo() {
    const change = true;
    const memoValue = useMemo(() => computeExpensiveValue(2,2), [change] );
return(
    <h1>{memoValue}</h1>
    );
}

export default HookUseMemo;