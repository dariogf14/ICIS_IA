import React, { useState, useMemo } from 'react';
import proyectosData from '../datos/proyectos';
import ProjectColumn from './ProjectColumn';

export default function Dashboard() {
  const [proyectos, setProyectos] = useState(proyectosData);

  const handleActualizarEstado = (proyectoId, nuevoEstado) => {
    setProyectos(prev =>
      prev.map(p => (p.id === proyectoId ? { ...p, estado: nuevoEstado } : p))
    );
  };

  const pendientes = useMemo(() => proyectos.filter(p => p.estado === 'Pendiente'), [proyectos]);
  const enProgreso = useMemo(() => proyectos.filter(p => p.estado === 'En Progreso'), [proyectos]);
  const completados = useMemo(() => proyectos.filter(p => p.estado === 'Completado'), [proyectos]);

  return (
    <div className="container-fluid py-3">
      <div className="mb-3 topbar rounded">
        <i className="bi bi-kanban"></i> Dashboard de Proyectos
      </div>

      <div className="row g-3">
        <div className="col-md-4">
          <ProjectColumn
            title="Pendiente"
            proyectos={pendientes}
            onActualizarEstado={handleActualizarEstado}
          />
        </div>

        <div className="col-md-4">
          <ProjectColumn
            title="En Progreso"
            proyectos={enProgreso}
            onActualizarEstado={handleActualizarEstado}
          />
        </div>

        <div className="col-md-4">
          <ProjectColumn
            title="Completado"
            proyectos={completados}
            onActualizarEstado={handleActualizarEstado}
          />
        </div>
      </div>
    </div>
  );
}
