import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import RootLayout from "./routes/RootLayout.jsx";
import HomePage from "./routes/HomePage.jsx";
import ProjectsPage, {
  projectsLoader,
} from "./routes/ProjectsPage.jsx";
import ProjectDetailsPage, {
  projectDetailsLoader,
  projectAction,
} from "./routes/ProjectDetailsPage.jsx";
import NewProjectPage, {
  newProjectAction,
} from "./routes/NewProjectPage.jsx";
import NewTaskPage, {
  newTaskAction,
} from "./routes/NewTaskPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "projects",
        element: <ProjectsPage />,
        loader: projectsLoader,
      },
      {
        path: "projects/new",
        element: <NewProjectPage />,
        action: newProjectAction,
      },
      {
        path: "projects/:projectId",
        element: <ProjectDetailsPage />,
        loader: projectDetailsLoader,
        action: projectAction,
      },
      {
        path: "projects/:projectId/new-task",
        element: <NewTaskPage />,
        action: newTaskAction,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);