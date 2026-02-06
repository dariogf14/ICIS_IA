import React, { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { TasksContext } from "./context/TasksContext";

const TaskItem = React.memo(({ task }) => {
  const { user } = useContext(AuthContext);
  const { dispatch } = useContext(TasksContext);

  const disabled = user.name !== task.author || user.name === "Invitado";

  return (
    <div style={{ opacity: disabled ? 0.5 : 1 }}>
      {task.text}
      <button disabled={disabled} onClick={() => dispatch({ type: "TOGGLE", payload: task.id })}>
        Hecha
      </button>
      <button disabled={disabled} onClick={() => dispatch({ type: "DELETE", payload: task.id })}>
        Eliminar
      </button>
    </div>
  );
});

export default TaskItem;
