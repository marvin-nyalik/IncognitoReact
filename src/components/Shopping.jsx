import { useReducer, useRef } from "react";

const shopReducer = (cart, action) => {
  switch (action.type) {
    case 'Add':
      return [...cart, action.data]
    case 'Remove':
      return cart.filter((item) => item !== action.data)
    case 'Clear':
      return []
    default:
      return cart;
  }
}

const initialCart = [];
const Shopping = () => {
  const [cartState, dispatch] = useReducer(shopReducer, initialCart);
  const inputRef = useRef();

  const addItemToCart = () => {
    const data = inputRef.current.value;
    dispatch({ type: 'Add', data: data })
    inputRef.current.value = '';
  }

  return (
    <>
      <input type="text" ref={inputRef}/>
      <button onClick={addItemToCart}> Add To Cart</button>
      <button onClick={() => dispatch({ type: 'Clear' })}> Clear Cart</button>
      {cartState && cartState.map((item) => (
        <div key={item}>
          <p>{item}</p>
          <button onClick={() =>dispatch({ type: 'Remove', data: item })}>remove</button>
        </div>
      ))}
    </>
  )
}

export default Shopping;
