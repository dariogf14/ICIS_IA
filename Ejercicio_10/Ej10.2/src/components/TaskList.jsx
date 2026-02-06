import { useFetcher, useSubmit } from "react-router-dom";

export default function TaskList({ tasks }) {
  const fetcher = useFetcher();
  const submit = useSubmit();

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <fetcher.Form method="post">
            <input type="hidden" name="intent" value="toggle-task" />
            <input type="hidden" name="taskId" value={task.id} />
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => fetcher.submit(fetcher.form)}
            />
            {task.title}
          </fetcher.Form>

          <button
            onClick={() => {
              if (window.confirm("¿Eliminar tarea?")) {
                submit(
                  { intent: "delete-task", taskId: task.id },
                  { method: "delete" }
                );
              }
            }}
          >
            Eliminar
          </button>
        </li>
      ))}
    </ul>
  );
}