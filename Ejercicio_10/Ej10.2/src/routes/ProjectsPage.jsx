import { useLoaderData } from "react-router-dom";
import ProjectList from "../components/ProjectList.jsx";
import { getProjects } from "../utils/api";

export function projectsLoader() {
  return getProjects();
}

export default function ProjectsPage() {
  const projects = useLoaderData();
  return (
    <>
      <h1>Tus Proyectos</h1>
      <ProjectList projects={projects} />
    </>
  );
}