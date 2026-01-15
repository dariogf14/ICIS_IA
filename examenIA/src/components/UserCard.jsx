// src2/components/UserCard.jsx
import React from 'react';

function UserCard() {
  // TODO: Recibe las props adecuadas
  
  return (
    <div className="user-card">
      {/* TODO: Muestra la foto del usuario */}
      <img  className="user-photo" />
      <div className="user-card-info">
        {/* TODO: Muestra el nombre y la dirección del usuario */}
        <h3>Nombre Apellido</h3>
        <p>Dirección del usuario</p>
      </div>
      {/* TODO: Llama a la función adecuada al hacer clic */}
      <button className="user-select-btn">
        Acceder
      </button>
    </div>
  );
}

export default UserCard;
