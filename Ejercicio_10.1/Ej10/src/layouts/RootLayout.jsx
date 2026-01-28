import { Outlet, useLoaderData } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function RootLayout() {
  const countries = useLoaderData();

  return (
    <div className="layout">
      <aside>
        <Sidebar countries={countries} />
      </aside>

      <main>
        <Outlet />
      </main>
    </div>
  );
}