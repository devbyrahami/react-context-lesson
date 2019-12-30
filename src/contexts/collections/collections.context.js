import { createContext } from "react";
import SHOP_DATA from "./shop.data";

const CollectionsContext = createContext(SHOP_DATA); //this is our initial state to consumer and pass to another components later on

export default CollectionsContext;
