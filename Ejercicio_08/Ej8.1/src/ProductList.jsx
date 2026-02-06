import React from "react";

const ProductList = React.memo(({ products, onAdd }) => (
  <div>
    <h2>Productos Disponibles</h2>
    {products.map(p => (
      <div key={p.id}>
        {p.name} - ${p.price}
        <button onClick={() => onAdd(p)}>Añadir al carrito</button>
      </div>
    ))}
  </div>
));

export default ProductList;
