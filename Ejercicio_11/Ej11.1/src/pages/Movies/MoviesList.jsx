import { getAllMovies } from "../../lib/cinema.js";
import MovieCard from "../../components/MovieCard.jsx";

export default function MoviesList() {
  const movies = getAllMovies();

  return (
    <div className="stack">
      <h1>Películas</h1>

      <div className="grid">
        {movies.map((m) => (
          <MovieCard key={m.id} movie={m} />
        ))}
      </div>
    </div>
  );
}