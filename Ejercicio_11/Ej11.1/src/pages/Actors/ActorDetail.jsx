import { Link, useParams } from "react-router-dom";
import {
  getActorById,
  getFilmographyByActorId,
} from "../../lib/cinema.js";

export default function ActorDetail() {
  const { actorId } = useParams();
  const actor = getActorById(actorId);

  if (!actor) {
    return (
      <div className="stack">
        <h1>Actor no encontrado</h1>
        <Link to="/actors" className="btn">
          Volver
        </Link>
      </div>
    );
  }

  const movies = getFilmographyByActorId(actorId);

  return (
    <div className="stack">
      <Link to="/actors" className="muted">
        ← Volver a actores
      </Link>

      <div className="detail">
        <img className="detail-img" src={actor.photo} alt={actor.name} />

        <div className="detail-body">
          <h1>{actor.name}</h1>
          <p>
            <strong>Año de nacimiento:</strong> {actor.birthYear}
          </p>
          <p>{actor.bio}</p>
        </div>
      </div>

      <section className="stack">
        <h2>Filmografía</h2>

        <div className="grid">
          {movies.map((m) => (
            <Link key={m.id} to={`/movies/${m.id}`} className="card">
              <img className="card-img" src={m.poster} alt={m.title} />
              <div className="card-body">
                <h3 className="card-title">{m.title}</h3>
                <p className="muted">
                  {m.year} · Personaje: {m.character}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}