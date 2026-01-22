import { NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div style={{ display: "flex", gap: "2rem" }}>
      <aside>
        <h3>Dashboard</h3>
        <ul>
          <li>
            <NavLink to="/dashboard">Ver tareas</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/new">Añadir tarea</NavLink>
          </li>
        </ul>
      </aside>

      <section>
        <Outlet />
      </section>
    </div>
  );
};

export default DashboardLayout;