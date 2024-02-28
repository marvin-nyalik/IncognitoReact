import { useRef, useImperativeHandle, forwardRef } from "react";
const Child2 = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focusInput: () => {
      inputRef.current.focus();
    }
  }))
  return (
    <>
      <input ref={inputRef} placeholder="some text"/>
    </>
  )
});

export default Child2;
