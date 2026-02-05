// Simulación de una API en memoria
// Estos datos se pierden al recargar la página (comportamiento esperado)

let projects = [
  {
    id: "p1",
    name: "Desarrollo de la Aplicación Móvil",
    description: "Creación de una app móvil para iOS y Android",
  },
  {
    id: "p2",
    name: "Diseño de la Nueva Web Corporativa",
    description: "Rediseño completo del sitio web de la empresa",
  },
];

let tasks = [
  {
    id: "t1",
    projectId: "p1",
    title: "Diseñar interfaz de usuario",
    completed: false,
  },
  {
    id: "t2",
    projectId: "p1",
    title: "Implementar autenticación de usuario",
    completed: true,
  },
  {
    id: "t3",
    projectId: "p2",
    title: "Crear wireframes",
    completed: false,
  },
];

/* ===============================
   PROYECTOS
   =============================== */

export function getProjects() {
  return projects;
}

export function getProject(projectId) {
  const project = projects.find(p => p.id === projectId);
  const projectTasks = tasks.filter(t => t.projectId === projectId);

  return {
    project,
    tasks: projectTasks,
  };
}

export function addProject(data) {
  projects.push({
    id: Math.random().toString(),
    name: data.name,
    description: data.description,
  });
}

export function deleteProject(projectId) {
  projects = projects.filter(project => project.id !== projectId);
  tasks = tasks.filter(task => task.projectId !== projectId);
}

/* ===============================
   TAREAS
   =============================== */

export function addTask(projectId, title) {
  tasks.push({
    id: Math.random().toString(),
    projectId,
    title,
    completed: false,
  });
}

export function toggleTask(taskId) {
  const task = tasks.find(t => t.id === taskId);
  if (task) {
    task.completed = !task.completed;
  }
}

export function deleteTask(taskId) {
  tasks = tasks.filter(task => task.id !== taskId);
}