import { Form, redirect, useActionData } from "react-router-dom";
import { addTask } from "../utils/api";

export async function newTaskAction({ request, params }) {
  const data = await request.formData();
  const title = data.get("title");

  if (!title) {
    return { error: "El título es obligatorio" };
  }

  addTask(params.projectId, title);
  return redirect(`/projects/${params.projectId}`);
}

export default function NewTaskPage() {
  const error = useActionData();

  return (
    <Form method="post">
      <h1>Añadir Nueva Tarea</h1>

      <input name="title" placeholder="Título de la tarea" />

      {error && <p style={{ color: "red" }}>{error.error}</p>}

      <button>Añadir Tarea</button>
    </Form>
  );
}