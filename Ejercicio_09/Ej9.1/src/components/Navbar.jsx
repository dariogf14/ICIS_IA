import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <NavLink
        to="/"
        style={({ isActive }) => ({
          fontWeight: isActive ? 'bold' : 'normal'
        })}
      >
        Inicio
      </NavLink>

      {' | '}

      <NavLink
        to="/posts"
        style={({ isActive }) => ({
          fontWeight: isActive ? 'bold' : 'normal'
        })}
      >
        Artículos
      </NavLink>
    </nav>
  );
};

export default Navbar;