import React, { useContext, useReducer } from "react";
import { createContext } from "react";
import { CartReducer } from "./Reducer";

// Create the Cart context
const Cart = createContext();

const Context = ({ children }) => {
  
  const initialProducts = []; 

  
  const [state, dispatch] = useReducer(CartReducer, {
    products: initialProducts, 
    cart: [],  
  });

  return (
    <Cart.Provider value={{ state, dispatch }}>
      {children}
    </Cart.Provider>
  );
};

export default Context;


export const CartState = () => {
  return useContext(Cart);
};
