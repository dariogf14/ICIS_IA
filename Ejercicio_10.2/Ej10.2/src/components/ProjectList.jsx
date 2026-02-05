import { Link } from "react-router-dom";

export default function ProjectList({ projects }) {
  return (
    <ul>
      {projects.map(project => (
        <li key={project.id}>
          <Link to={project.id}>{project.name}</Link>
        </li>
      ))}
    </ul>
  );
}