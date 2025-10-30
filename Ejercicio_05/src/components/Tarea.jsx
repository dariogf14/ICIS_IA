const coloresPrioridad = {
  alta: 'danger',
  media: 'warning',
  baja: 'success',
};

const Tarea = ({ tarea, toggleCompletada }) => {
  return (
    <div
      className={`list-group-item d-flex align-items-center justify-content-between border-start border-4 border-${coloresPrioridad[tarea.prioridad]}`}
      style={{
        backgroundColor: tarea.completada ? '#f8f9fa' : 'white',
        textDecoration: tarea.completada ? 'line-through' : 'none',
        cursor: 'pointer'
      }}
      onClick={() => toggleCompletada(tarea.id)}
    >
      <span>{tarea.texto}</span>
      <span className={`badge bg-${coloresPrioridad[tarea.prioridad]}`}>
        {tarea.prioridad}
      </span>
    </div>
  );
};

export default Tarea;