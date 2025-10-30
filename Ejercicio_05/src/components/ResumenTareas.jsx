const ResumenTareas = ({ tareasFiltradas, total }) => {
  if (tareasFiltradas.length === 0) {
    return <p className="text-center text-muted">No hay tareas para este filtro.</p>;
  }

  const completadas = tareasFiltradas.filter(t => t.completada).length;

  if (completadas === tareasFiltradas.length) {
    return <p className="text-center text-success fw-bold">¡Felicidades! Has completado todas las tareas de esta sección.</p>;
  }

  return (
    <p className="text-center text-secondary">
      Mostrando {tareasFiltradas.length} de {total} tareas ({completadas} completadas).
    </p>
  );
};

export default ResumenTareas;