import React from 'react';

export default function ProfileCard({ usuario, onCerrar }) {
  if (!usuario) return null;

  const { nombre, email, avatarUrl, direccion, aficiones } = usuario;

  return (
    <div className="card profile-card">
      <div className="d-flex align-items-center mb-3">
        <img
          src={avatarUrl}
          alt={nombre}
          className="profile-avatar me-3"
        />
        <div>
          <h4 className="mb-0">{nombre}</h4>
          <small>{email}</small>
        </div>
        <div className="ms-auto">
          <button
            className="btn btn-sm btn-outline-secondary"
            onClick={onCerrar}
          >
            Cerrar
          </button>
        </div>
      </div>

      <h6 className="mt-2 mb-2">Información de Contacto</h6>
      <p className="mb-1">
        <strong>Calle:</strong> {direccion.calle}
      </p>
      <p className="mb-3">
        <strong>Ciudad:</strong> {direccion.ciudad}
      </p>

      <h6 className="mt-3 mb-2">Aficiones</h6>
      <div>
        {aficiones && aficiones.length ? (
          aficiones.map((a, idx) => (
            <span key={idx} className="badge bg-primary me-2 mb-2">
              {a}
            </span>
          ))
        ) : (
          <p className="text-muted mb-0">Sin aficiones listadas</p>
        )}
      </div>
    </div>
  );
}