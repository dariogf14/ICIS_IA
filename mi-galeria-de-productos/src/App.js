import React from 'react';
import GaleriaProductos from './components/GaleriaProductos';
import { productos } from './datos/Productos';
import './App.css';

function App() {
  return <GaleriaProductos productos={productos} />;
}

export default App;