export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container">
        <a className="navbar-brand" href="#">Naturaleza Viva</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link active" href="#">Inicio</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Proyectos</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Recursos</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Contacto</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}