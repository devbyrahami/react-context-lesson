import React, { createContext, useState, useEffect } from "react";
import {
  addItemToCart,
  removeItemFromCart,
  filterItemFromCart,
  getCartItemsCount
} from "./cart.utils";

//below is a default state..
export const CartContext = createContext({
  hidden: true,
  toggleHidden: () => {},
  cartItems: [], //it will contain the items we will add to the Cartdropdown
  addItem: () => {},
  removeItem: () => {},
  clearItemFromCart: () => {},
  cartItemsCount: 0
});

/*
CartProvider wraps the whole app at index.js,so rhe whole app has access to its state.Same like Provider in Redux...
CartContext wraps {children} ,so every components can consume/pass the props to use in its own components
*/

const CartProvider = ({ children }) => {
  //our local state
  const [hidden, setHidden] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0); //by default its 0,but will be added later dynamically when items being added.

  //function to change the state
  const addItem = item => setCartItems(addItemToCart(cartItems, item));
  const toggleHidden = () => setHidden(!hidden);
  const removeItem = item => setCartItems(removeItemFromCart(cartItems, item)); //this will remove every item within the cartItems:[]
  const clearItemFromCart = item =>
    setCartItems(filterItemFromCart(cartItems, item));

  //whenever the cartdropdownmenu is being updated the total items added..
  useEffect(() => {
    setCartItemsCount(getCartItemsCount(cartItems));
  }, [cartItems]); //it will render everytime cartItems being updated..

  //Here we have wrapper everything,therefore there is no need for another provider at Header.component like before..
  //for our useContext later any component can access the CartContext props..
  //we use children to make it more reusable for any component without having to specify any particular component to be wrapped..
  return (
    <CartContext.Provider
      value={{
        hidden,
        toggleHidden,
        cartItems,
        addItem,
        cartItemsCount,
        removeItem,
        clearItemFromCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
