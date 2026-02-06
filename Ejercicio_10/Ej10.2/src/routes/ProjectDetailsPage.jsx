import { useLoaderData, useSubmit } from "react-router-dom";
import TaskList from "../components/TaskList";
import { getProject, deleteProject } from "../utils/api";
import { redirect } from "react-router-dom";

export function projectDetailsLoader({ params }) {
  return getProject(params.projectId);
}

export async function projectAction({ request, params }) {
  const data = await request.formData();
  const intent = data.get("intent");

  if (intent === "delete-project") {
    deleteProject(params.projectId);
    return redirect("/projects");
  }

  return null;
}

export default function ProjectDetailsPage() {
  const { project, tasks } = useLoaderData();
  const submit = useSubmit();

  return (
    <>
      <h1>{project.name}</h1>

      <button
        onClick={() => {
          if (window.confirm("¿Eliminar proyecto?")) {
            submit({ intent: "delete-project" }, { method: "delete" });
          }
        }}
      >
        Eliminar Proyecto
      </button>

      <TaskList tasks={tasks} />
    </>
  );
}