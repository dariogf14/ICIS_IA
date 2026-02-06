import { Link, useParams } from "react-router-dom";
import { getMovieById, getCastByMovieId } from "../../lib/cinema.js";
import ActorCard from "../../components/ActorCard.jsx";

export default function MovieDetail() {
  const { movieId } = useParams();
  const movie = getMovieById(movieId);

  if (!movie) {
    return (
      <div className="stack">
        <h1>Película no encontrada</h1>
        <Link to="/movies" className="btn">
          Volver
        </Link>
      </div>
    );
  }

  const cast = getCastByMovieId(movieId);

  return (
    <div className="stack">
      <Link to="/movies" className="muted">
        ← Volver a películas
      </Link>

      <div className="detail">
        <img className="detail-img" src={movie.poster} alt={movie.title} />

        <div className="detail-body">
          <h1>
            {movie.title} <span className="muted">({movie.year})</span>
          </h1>
          <p>
            <strong>Director:</strong> {movie.director}
          </p>
          <p>{movie.synopsis}</p>
        </div>
      </div>

      <section className="stack">
        <h2>Reparto</h2>
        <div className="list">
          {cast.map((actor) => (
            <ActorCard
              key={actor.id}
              actor={actor}
              subtitle={`Personaje: ${actor.character}`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}