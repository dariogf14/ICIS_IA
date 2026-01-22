import { Link } from "react-router-dom";
import { useContext } from "react";
import { TasksContext } from "../context/TasksContext";

const TaskListPage = () => {
  const { tasks } = useContext(TasksContext);

  return (
    <>
      <h2>Lista de Tareas</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <Link to={`/dashboard/task/${task.id}`}>
              {task.title} ({task.status})
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskListPage;