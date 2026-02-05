import {
  Form,
  useActionData,
  useNavigation,
  redirect,
} from "react-router-dom";
import { addProject } from "../utils/api";

export async function newProjectAction({ request }) {
  const data = await request.formData();
  const name = data.get("name");

  if (!name || name.trim().length < 5) {
    return { error: "El nombre debe tener al menos 5 caracteres" };
  }

  addProject({
    name,
    description: data.get("description"),
  });

  return redirect("/projects");
}

export default function NewProjectPage() {
  const error = useActionData();
  const navigation = useNavigation();

  return (
    <Form method="post">
      <h1>Crear Proyecto</h1>

      <input name="name" placeholder="Nombre del proyecto" />
      <textarea name="description" placeholder="Descripción" />

      {error && <p style={{ color: "red" }}>{error.error}</p>}

      <button disabled={navigation.state === "submitting"}>
        {navigation.state === "submitting"
          ? "Guardando..."
          : "Crear Proyecto"}
      </button>
    </Form>
  );
}