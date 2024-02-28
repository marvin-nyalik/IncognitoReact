import { forwardRef, useImperativeHandle, useRef } from "react";

const Child = forwardRef((props, ref) => {
  const childRef = useRef();

  useImperativeHandle (ref, () => ({
    focusInput: () => {
      childRef.current.focus();
    }
  }))
 
  return (
    <>
      <p>This is the child component - {props.name} {props.surname}</p>
      <input ref={ref}/>
      <input ref={childRef} placeholder="Child ref"/>
    </>
  )
});

export default Child;