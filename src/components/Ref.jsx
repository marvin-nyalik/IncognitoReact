import { useRef, useState } from "react";
import Child from "./RefChild";
import Child2 from "./ImpHand";

const Parent = () => {
  const ref = useRef();
  const childRef = useRef();
  const [name, setName] = useState("Marv");
  const [surame, setSurName] = useState("Otis");


  const focusInput = () => {
    ref.current.focus();
    setName("Johnny");
    setSurName("Maish");
  }

  const handleClick = () => {
    childRef.current.focusInput();
  }

  return (
    <>
      <button onClick={focusInput}>Focus Input</button>
      <h1>Parent Component</h1>
      <Child name={name} surname={surame} ref={ref}/>
      <Child2 ref={childRef} />
      <button onClick={handleClick}>Focus with UIH</button>
    </>
  )
}

export default Parent;