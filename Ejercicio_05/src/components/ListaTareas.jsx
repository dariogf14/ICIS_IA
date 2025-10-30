import Tarea from './Tarea';

const ListaTareas = ({ tareas, toggleCompletada }) => {
  return (
    <div className="list-group mb-3">
      {tareas.map(t => (
        <Tarea key={t.id} tarea={t} toggleCompletada={toggleCompletada} />
      ))}
    </div>
  );
};

export default ListaTareas;