import React from 'react';
import FichaProducto from './FichaProducto';

function GaleriaProductos({ productos }) {
  return (
    <div className="galeria">
      {productos.map((producto) => (
        <FichaProducto key={producto.id} producto={producto}>
          <button className="btn-info">Más información</button>
        </FichaProducto>
      ))}
    </div>
  );
}

export default GaleriaProductos;