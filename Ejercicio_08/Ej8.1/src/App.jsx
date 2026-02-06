import { useReducer, useMemo, useCallback } from "react";
import products from "./data/products.json";
import { cartReducer } from "./cartReducer";
import ProductList from "./ProductList";
import Cart from "./Cart";

export default function App() {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const addToCart = useCallback(
    product => dispatch({ type: "ADD", payload: product }),
    []
  );

  const total = useMemo(
    () => cart.reduce((sum, i) => sum + i.price * i.qty, 0),
    [cart]
  );

  return (
    <>
      <ProductList products={products} onAdd={addToCart} />
      <Cart cart={cart} dispatch={dispatch} total={total} />
    </>
  );
}
