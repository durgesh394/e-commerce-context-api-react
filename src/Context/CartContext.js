import React, { createContext, useReducer} from "react";
import CartReducer from "./CartReducer";

export const cartContextProvider = createContext();
let initialstate = {
  cart: [],
  Qty: 0,
  totalprice: 0,
};
const CartContext = (props) => {
  const [state, dispatch] = useReducer(CartReducer, initialstate);

  return (
    <div>
      <cartContextProvider.Provider value = {{ ...state, dispatch }}>
        {props.children}
      </cartContextProvider.Provider>
    </div>
  );
};

export default CartContext;
