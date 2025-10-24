// src/components/UserList.jsx
import React from 'react';

export default function UserList({ usuarios, onSeleccionarUsuario, usuarioActivoId }) {
  return (
    <div>
      <h5>Lista de Usuarios</h5>
      <ul className="list-group">
        {usuarios.map(u => (
          <li
            key={u.id}
            onClick={() => onSeleccionarUsuario(u.id)}
            className={`list-group-item list-group-item-action ${usuarioActivoId === u.id ? 'active text-white' : ''}`}
            style={{ cursor: 'pointer' }}
          >
            {u.nombre}
          </li>
        ))}
        {usuarios.length === 0 && <li className="list-group-item">No hay usuarios que coincidan.</li>}
      </ul>
    </div>
  );
}
