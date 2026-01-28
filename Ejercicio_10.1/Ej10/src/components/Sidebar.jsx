import { useState } from "react";
import CountryList from "./CountryList";

export default function Sidebar({ countries }) {
  const [search, setSearch] = useState("");

  const filtered = countries
    .filter(c =>
      c.name.common.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) =>
      a.name.common.localeCompare(b.name.common)
    );

  return (
    <>
      <h2>Países del Mundo</h2>
      <input
        placeholder="Buscar país..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <CountryList countries={filtered} />
    </>
  );
}