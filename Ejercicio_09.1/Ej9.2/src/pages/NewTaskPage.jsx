import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { TasksContext } from "../context/TasksContext";

const NewTaskPage = () => {
  const navigate = useNavigate();
  const { addTask } = useContext(TasksContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ title, description, status: "pending" });
    navigate("/dashboard");
  };

  return (
    <>
      <h2>Nueva Tarea</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <br />
        <textarea
          placeholder="Descripción"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <button type="submit">Guardar</button>
      </form>
    </>
  );
};

export default NewTaskPage;