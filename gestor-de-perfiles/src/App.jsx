import './App.css';
import React, { useState, useMemo } from 'react';
import usuariosData from './datos/usuarios';
import UserList from './components/UserList';
import ProfileCard from './components/ProfileCard';
import SearchBar from './components/SearchBar'; // extra, opcional

export default function App() {
  const [usuarioSeleccionadoId, setUsuarioSeleccionadoId] = useState(null);
  const [filtro, setFiltro] = useState(''); // para SearchBar

  const usuariosFiltrados = useMemo(() => {
    const term = filtro.trim().toLowerCase();
    if (!term) return usuariosData;
    return usuariosData.filter(u =>
      u.nombre.toLowerCase().includes(term) || u.email.toLowerCase().includes(term)
    );
  }, [filtro]);

  const usuarioSeleccionado = usuariosData.find(u => u.id === usuarioSeleccionadoId) || null;

  return (
    <div className="container my-4">
      <h2 className="mb-4">Gestor de Perfiles de Usuario</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card p-3">
            <SearchBar filtro={filtro} onCambiarFiltro={setFiltro} />
            <hr />
            <UserList
              usuarios={usuariosFiltrados}
              onSeleccionarUsuario={(id) => setUsuarioSeleccionadoId(id)}
              usuarioActivoId={usuarioSeleccionadoId}
            />
          </div>
        </div>

        <div className="col-md-8">
          {usuarioSeleccionado ? (
            <ProfileCard usuario={usuarioSeleccionado} onCerrar={() => setUsuarioSeleccionadoId(null)} />
          ) : (
            <div className="card p-4">
              <p className="mb-0">Selecciona un usuario para ver los detalles.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}