import React, {useCallback, useState} from "react";

function HookUseCallback(){
    const [count, setCount] = useState(100)

    const showCount = useCallback(() => {
        console.log(count)
    },[count]);

return(
    <ExampleChild handler={showCount}></ExampleChild>
);
}
export default HookUseCallback;