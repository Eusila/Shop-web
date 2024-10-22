export const CartReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_CART":{
        const itemInCart = state.cart.find((item) => item.id === action.payload.id);
  
        if (itemInCart) {
         
          return {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 } 
                : item
            ),
          };
        } else {
         
          return {
            ...state,
            cart: [...state.cart, { ...action.payload, qty: 1 }],
          };
        }

      }
        
       
  
      case "REMOVE_FROM_CART":
        
        return {
          ...state,
          cart: state.cart.filter((c) => c.id !== action.payload.id),
        };
  
      default:
        return state;
    }
  };
  