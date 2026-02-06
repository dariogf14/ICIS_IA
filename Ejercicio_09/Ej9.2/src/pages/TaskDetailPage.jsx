import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { TasksContext } from "../context/TasksContext";

const TaskDetailPage = () => {
  const { taskId } = useParams();
  const navigate = useNavigate();
  const { tasks, deleteTask } = useContext(TasksContext);

  const task = tasks.find((t) => t.id === Number(taskId));

  if (!task) return <p>Tarea no encontrada</p>;

  const handleDelete = () => {
    deleteTask(task.id);
    navigate("/dashboard", { replace: true });
  };

  return (
    <>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p>Estado: {task.status}</p>
      <button onClick={handleDelete}>Borrar</button>
    </>
  );
};

export default TaskDetailPage;