import React from 'react';
import TeamMemberList from './TeamMemberList';

const prioridadColor = prioridad => {
  switch (prioridad) {
    case 'Alta': return 'bg-danger';
    case 'Media': return 'bg-warning';
    case 'Baja': return 'bg-success';
    default: return 'bg-secondary';
  }
};

export default function ProjectCard({ proyecto, onActualizarEstado }) {
  const { id, titulo, descripcion, responsables, prioridad, estado } = proyecto;

  const handleChange = (e) => {
    const nuevoEstado = e.target.value;
    onActualizarEstado(id, nuevoEstado);
  };

  return (
    <div className="card project-card">
      <div className="card-body p-3">
        <div className="d-flex align-items-start">
          <div className={`priority-indicator ${prioridadColor(prioridad)}`} title={`Prioridad: ${prioridad}`} />
          <div className="flex-grow-1 ms-2">
            <h6 className="mb-1">{titulo}</h6>
            <p className="small text-muted mb-2">{descripcion}</p>

            <div className="mb-2">
              <small className="text-muted">Responsables:</small>
              <TeamMemberList miembros={responsables} />
            </div>

            <div className="d-flex align-items-center justify-content-between">
              <div>
                <span className={`badge ${prioridadColor(prioridad)} me-2`}>{prioridad}</span>
                <span className="badge bg-light text-dark">{estado}</span>
              </div>

              <div>
                <select className="form-select form-select-sm" value={estado} onChange={handleChange}>
                  <option value="Pendiente">Pendiente</option>
                  <option value="En Progreso">En Progreso</option>
                  <option value="Completado">Completado</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
