// src2/components/TransactionForm.jsx
import React, { useState, useEffect } from 'react';



function TransactionForm() {
  /* 
    TODO: Recibe las props adecuadas
    
  */
  
    // estado inicial del formulario
  
  
  // Eventos de manejo de formulario, por ejemplo:

  function handleSubmit(e) {
  
    // TODO: Validar que todos los campos estén completos.
    
    // TODO: añade los datos de la nueva transacción llamando a la prop adecuada.
    
    // Pista: Limpia el formulario después de enviarlo.
  }

  return (
    <div className="card">
      <h2>Nueva Transacción</h2>
      <div className="transaction-form">
       
        <form>
          <div className="form-control">
            <label htmlFor="description">Descripción</label>
       
            <input
              type="text"
              id="description"
              name="description"
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Monto</label>
       
            <input
              type="number"
              id="amount"
              name="amount"
              step="0.01"
            />
          </div>
          <div className="form-control">
            <label htmlFor="type">Tipo</label>
       
            <select id="type" name="type">
              <option value="gasto">Gasto</option>
              <option value="ingreso">Ingreso</option>
            </select>
          </div>
          <div className="form-control">
            <label htmlFor="accountId">Cuenta</label>
            {/* TODO: Cuentas
            <select id="accountId" name="accountId">
              <option value="" disabled>Selecciona una cuenta</option>
            </select>
          </div>
          <div className="form-control">
            <label htmlFor="categoryId">Categoría</label>
            
            {/* Pista: Las categorías mostradas deberían depender del 'tipo' (ingreso/gasto) seleccionado */}
            <select id="categoryId" name="categoryId">
              <option value="" disabled>Selecciona una categoría</option>
            </select>
          </div>
          <button type="submit">Añadir Transacción</button>
        </form>
      </div>
    </div>
  );
}

export default TransactionForm;
