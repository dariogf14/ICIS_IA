import { Link } from "react-router-dom";

export default function ActorCard({ actor, subtitle }) {
  return (
    <Link to={`/actors/${actor.id}`} className="row-card">
      <img className="avatar" src={actor.photo} alt={actor.name} />
      <div>
        <h3 className="row-title">{actor.name}</h3>
        {subtitle ? <p className="muted">{subtitle}</p> : null}
      </div>
    </Link>
  );
}