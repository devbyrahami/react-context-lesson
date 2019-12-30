import { createContext } from "react";

const CartContext = createContext({
  hidden: true, //by default the dropdown cart is hidden
  toggleHidden: () => {}
});

export default CartContext;
