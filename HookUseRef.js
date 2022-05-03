import React, {useRef} from "react";

  function HookUseRef() {

    const  inputRef = useRef(2);
    const handleClick = () => {
        console.log(inputRef.current.value)
    }

  return(
      <div>
          <h1>Hello Input</h1>
          <input type="text" ref={inputRef}/>
          <button onClick={handleClick}>useRef</button>
      </div>
  )
}
export default HookUseRef;