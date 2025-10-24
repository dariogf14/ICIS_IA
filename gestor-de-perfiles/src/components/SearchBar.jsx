import React from 'react';

export default function SearchBar({ filtro, onCambiarFiltro }) {
  return (
    <div>
      <input
        type="text"
        className="form-control"
        placeholder="Buscar usuario..."
        value={filtro}
        onChange={(e) => onCambiarFiltro(e.target.value)}
      />
    </div>
  );
}