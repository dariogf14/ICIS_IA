// src2/components/TransactionHistory.jsx
import React from 'react';

// Componente para un único item de la lista
function TransactionItem() {
  // TODO: Recibe las props adecuadas
  
  

  return (
    <li className="transaction-item">
      <div className="transaction-icon">
        {/* TODO: Muestra la imagen del icono de la categoría */}
      </div>
      <div className="transaction-details">
        {/* TODO: Muestra la descripción de la transacción */}
        <span className="description">Descripción de la transacción</span>
        {/* TODO: Muestra la fecha y el nombre de la cuenta */}
        <span className="meta">dd/mm/aaaa | Nombre de la Cuenta</span>
      </div>
      <div className="transaction-amount">
        {/* TODO: Muestra el monto formateado, con un '+' o '-' delante */}
        +0,00 €
        {/* TODO: Llama a la función que elimina la transación */}
        <button className="delete-btn">
          &times;
        </button>
      </div>
    </li>
  );
}

// Componente para el historial completo
function TransactionHistory() {
  /* 
    TODO: Recibe las props adecuadas

    programar eventos necesarios
    
  */

 

  return (
    <div className="card">
      <div className="history-header">
        <h2>Historial de Transacciones</h2>
        {/* TODO: Abre el modal para añadir una transacción al hacer clic en este botón */}
        <button className="primary-action-btn">
          Añadir Transacción
        </button>
      </div>
      <div className="history-filters">
        {/* TODO: filtros de cuenta */}
        <select name="account">
          <option value="all">Todas las Cuentas</option>
          {/* 
            TODO: Añadir las cuentas
          */}
        </select>
      </div>
      <ul className="transaction-list">
        {/* 
          TODO: Transaciones
          Por cada transación ..........
          No olvides pasarle todas las props que necesita.
        */}
         <TransactionItem /> {/* Esto es solo un placeholder, debes reemplazarlo por tu mapeo */}
      </ul>
    </div>
  );
}

export default TransactionHistory;
