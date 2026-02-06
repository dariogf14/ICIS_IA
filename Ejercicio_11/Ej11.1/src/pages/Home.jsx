import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="stack">
      <h1>CinemaDB</h1>
      <p className="muted">
        Explora películas y actores. Desde una película verás su reparto, y desde
        un actor verás su filmografía.
      </p>

      <div className="actions">
        <Link className="btn" to="/movies">
          Ver películas
        </Link>
        <Link className="btn" to="/actors">
          Ver actores
        </Link>
      </div>
    </div>
  );
}