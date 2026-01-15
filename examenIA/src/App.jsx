import React, { useState, useMemo } from 'react';

// Import de componentes
import UserSelectionScreen from './components/UserSelectionScreen';
import Dashboard from './components/Dashboard';
import TransactionHistory from './components/TransactionHistory';
import TransactionForm from './components/TransactionForm';
import Modal from './components/Modal';

// Import de datos iniciales
import usersData from './data/users.json';
import accountsData from './data/accounts.json';
import transactionsData from './data/transactions.json';
import categoriesData from './data/categories.json';

// Import de estilos
import './App.css';


function App() {
  // --- GESTIÓN DE ESTADO ---
  // declaras los estados de la aplicacón, por ejemplo,
  // para las transacciones:
  const [transactions, setTransactions] = useState(transactionsData);
 

  // --- MANEJADORES DE EVENTOS ---
  // TODO: Implementa la lógica de las funciones manejadoras de eventos.
  // por ejemplo, algunos posibles serían

  
  function handleAddTransaction(newTransaction) {
    // Pista: Añade la nueva transacción al principio de la lista de transacciones.
    const nuevaTransaccion = {
      transactionId: (newTransaction.transactionId),
      accountId: (newTransaction.accountId),
      fecha: (newTransaction.fecha),
      descripcion: (newTransaction.descripcion),
      categoriaId: (newTransaction.categoriaId),
      monto: (newTransaction.monto),
      tipo: (newTransaction.tipo)
    }
  }
  
  function handleDeleteTransaction(transactionId) {
    // Pista: Filtra la lista de transacciones para eliminar la que coincida con el ID.
    const transactionesFiltradasID = transactions.filter(
      p => p.id != transactionId
    )
  }

  function handleFilterChange(newFilters) {
    // Pista: Actualiza el estado de los filtros.
  }

 
  // --- DATOS DERIVADOS Y CÁLCULOS ---
  //Cálculos necesarios para la funcionalidad de la app,
  // por ejemplo algunos de ellos serían:
  
  // TODO: 1. Calcula las cuentas que pertenecen al usuario actual ('currentUser').
  const userAccounts = []; // Reemplaza esto con tu lógica (p. ej., usando useMemo y .filter())

   // TODO: 2 Calcula el resumen para el Dashboard (solo el patrimonio neto).
  // Pista: Suma los saldos de todas las cuentas del usuario.
  const dashboardSummary=0 //Reemplaza esto por la operación correcta

  // TODO: 3 Filtrar as transacciones que se mostrarán en el historial.
  // Pista: Empieza con las transacciones del usuario y luego aplica el filtro de cuenta.
  const filteredTransactions = []; // Reemplaza esto

  // --- LÓGICA DE RENDERIZADO ---

  // Al iniciar muestra la pantalla de selección de usuario.
  if (!currentUser) {
    // TODO: Pasa las props necesarias a UserSelectionScreen
    
    return <UserSelectionScreen />;
  }

  // Si hay un usuario, muestra la aplicación principal.
  return (
    <>
      <header className="app-header">
        <h1>Gestor de Finanzas</h1>
        <div className="user-selector">
          {/* TODO: Muestra el nombre del usuario actual y un botón para "Cambiar Usuario" */}
          <span>Bienvenido...</span>
          <button>Cambiar Usuario</button>
        </div>
      </header>
      <main className="container">
        <div className="main-layout">
          {/* TODO: Pasa las props necesarias a cada componente */}
          <Dashboard />
          <TransactionHistory />
        </div>
      </main>

      {/* TODO: Pasa las props necesarias al Modal y al Formulario */}
      <Modal>
        <TransactionForm />
      </Modal>
    </>
  );
}

export default App;
