import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";

import Home from "./pages/Home.jsx";
import MoviesList from "./pages/Movies/MoviesList.jsx";
import MovieDetail from "./pages/Movies/MovieDetail.jsx";
import ActorsList from "./pages/Actors/ActorsList.jsx";
import ActorDetail from "./pages/Actors/ActorDetail.jsx";

export default function App() {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/movies" element={<MoviesList />} />
          <Route path="/movies/:movieId" element={<MovieDetail />} />

          <Route path="/actors" element={<ActorsList />} />
          <Route path="/actors/:actorId" element={<ActorDetail />} />

          {}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </>
  );
}