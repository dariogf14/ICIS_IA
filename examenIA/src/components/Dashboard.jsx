// src2/components/Dashboard.jsx
import React from 'react';

// Función de utilidad para formatear la moneda
function formatCurrency(amount) {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
  }).format(amount);
}

// Componente para mostrar la lista de cuentas
function AccountList() {
  // TODO: Recibe las props
  
  return (
    <div className="account-list">
      <h3>Cuentas</h3>
      <ul>
        {/* 
          TODO: Mapea el array de cuentas
          Por cada cuenta renderiza un <li> con su nombre y saldo.
          
         
        */}
      </ul>
    </div>
  );
}

// Componente principal del Dashboard
function Dashboard() {
  // TODO: Recibe las props adecuadas desde App.jsx
  
  return (
    <div className="card">
      <div className="dashboard-header">
        <h2>Dashboard</h2>
      </div>
      <div className="dashboard-summary">
        <div className="summary-card">
          <h3>Patrimonio Neto</h3>
          {/* TODO: Muestra aquí el patrimonio neto formateado */}
          <p className="amount">0,00 €</p>
        </div>
      </div>
      {/* TODO: Pasa la prop adecuada a AccountList */}
      <AccountList />
    </div>
  );
}

export default Dashboard;
