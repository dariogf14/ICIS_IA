export default function Cart({ cart, dispatch, total }) {
  return (
    <div>
      <h2>Mi Carrito</h2>

      {cart.map(item => (
        <div key={item.id}>
          {item.name} x {item.qty}
          <button onClick={() => dispatch({ type: "INC", payload: item.id })}>+</button>
          <button onClick={() => dispatch({ type: "DEC", payload: item.id })}>-</button>
          <button onClick={() => dispatch({ type: "REMOVE", payload: item.id })}>
            Eliminar
          </button>
        </div>
      ))}

      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
}
