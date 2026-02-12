import Link from "next/link";
import { getRecetas } from "@/lib/recetas";

export default async function HomePage() {
  const recetas = await getRecetas();

  return (
    <section>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1>Recetas</h1>
        <Link href="/recetas/nueva" style={{ padding: "8px 12px", border: "1px solid #ccc", borderRadius: 8 }}>
          + Crear Nueva Receta
        </Link>
      </div>

      {recetas.length === 0 ? (
        <p>No hay recetas todavía.</p>
      ) : (
        <ul style={{ display: "grid", gap: 12, padding: 0, listStyle: "none" }}>
          {recetas.map((r: any) => (
            <li key={r.id} style={{ border: "1px solid #eee", borderRadius: 12, padding: 12 }}>
              <h3 style={{ margin: "0 0 8px" }}>
                <Link href={`/recetas/${r.id}`} style={{ textDecoration: "none" }}>
                  {r.titulo}
                </Link>
              </h3>
              <p style={{ margin: "0 0 8px" }}>{r.descripcion_corta}</p>
              <small>⏱ {r.tiempo_coccion} min</small>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}