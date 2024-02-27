import { useReducer } from "react";

const countReducer = (state, action) => {
  switch(action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    default:
      return state;
  }
}

const ReducerCom = () => {
  const initialState = { count: 0 }
  const [state, dispatch] = useReducer(countReducer, initialState);

  return (
    <>
      <h1>Count: {state.count}</h1>
      <button onClick={()=>dispatch({ type: 'increment'})}>Increment</button>
      <button onClick={()=>dispatch({ type: 'decrement'})}>Decrement</button>
    </>
  )
}

export default ReducerCom;