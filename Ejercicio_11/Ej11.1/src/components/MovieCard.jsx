import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  return (
    <Link to={`/movies/${movie.id}`} className="card">
      <img className="card-img" src={movie.poster} alt={movie.title} />
      <div className="card-body">
        <h3 className="card-title">{movie.title}</h3>
        <p className="muted">{movie.year}</p>
      </div>
    </Link>
  );
}