import { getAllActors } from "../../lib/cinema.js";
import ActorCard from "../../components/ActorCard.jsx";

export default function ActorsList() {
  const actors = getAllActors();

  return (
    <div className="stack">
      <h1>Actores</h1>

      <div className="list">
        {actors.map((a) => (
          <ActorCard key={a.id} actor={a} />
        ))}
      </div>
    </div>
  );
}