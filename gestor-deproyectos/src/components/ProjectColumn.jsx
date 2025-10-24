import React from 'react';
import ProjectCard from './ProjectCard';

export default function ProjectColumn({ title, proyectos, onActualizarEstado }) {
  return (
    <div className="column-card">
      <div className="column-header">
        <h5 className="mb-0">{title}</h5>
      </div>

      <div className="mt-3">
        {proyectos.length === 0 && (
          <div className="card p-3 text-muted">No hay proyectos</div>
        )}
        {proyectos.map(proyecto => (
          <div key={proyecto.id} className="mb-3">
            <ProjectCard proyecto={proyecto} onActualizarEstado={onActualizarEstado} />
          </div>
        ))}
      </div>
    </div>
  );
}
