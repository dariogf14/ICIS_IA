import React from 'react';

export default function TeamMemberList({ miembros = [] }) {
  return (
    <div className="mt-1">
      {miembros.map(m => (
        <span key={m.id} className="badge bg-info text-dark me-1 mb-1">
          {m.nombre}
        </span>
      ))}
    </div>
  );
}
