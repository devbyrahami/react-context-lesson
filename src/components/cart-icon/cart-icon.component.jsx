import React, { useContext } from "react";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./cart-icon.styles.scss";
import { CartContext } from "../../providers/cart/cart.provider";

const CartIcon = () => {
  const { toggleHidden, cartItemsCount } = useContext(CartContext); // we are pulling/consuming the props from CartContext,which we have pass the props inside Provider..
  return (
    <div className="cart-icon" onClick={toggleHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartItemsCount}</span>
    </div>
  );
};

export default CartIcon;
