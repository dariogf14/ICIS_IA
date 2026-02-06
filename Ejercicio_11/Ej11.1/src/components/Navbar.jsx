import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <NavLink to="/" className="brand">
          CinemaDB
        </NavLink>

        <div className="navlinks">
          <NavLink to="/movies">Películas</NavLink>
          <NavLink to="/actors">Actores</NavLink>
        </div>
      </div>
    </nav>
  );
}