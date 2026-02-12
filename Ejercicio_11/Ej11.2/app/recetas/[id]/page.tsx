import Link from "next/link";
import { notFound } from "next/navigation";
import { unstable_noStore as noStore } from "next/cache";
import { getRecetaById } from "@/lib/recetas";
import { getComentariosByRecetaId } from "@/lib/comentarios";
import { borrarRecetaAction, crearComentarioAction } from "@/lib/actions";

export const dynamic = "force-dynamic";

export default async function RecetaDetallePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  noStore();

  // ✅ Next 16: params puede ser Promise
  const { id: idParam } = await params;

  const id = Number(idParam);

  if (!Number.isFinite(id) || id <= 0) {
    notFound();
  }

  const receta = await getRecetaById(id);

  if (!receta) return <p>Receta no encontrada.</p>;

  const comentarios = await getComentariosByRecetaId(id);

  return (
    <article style={{ display: "grid", gap: 12 }}>
      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
        <h1 style={{ margin: 0 }}>{receta.titulo}</h1>

        <Link
          href={`/recetas/${id}/editar`}
          style={{ padding: "6px 10px", border: "1px solid #ccc", borderRadius: 8 }}
        >
          Editar Receta
        </Link>

        <form
          action={async () => {
            "use server";
            await borrarRecetaAction(id);
          }}
        >
          <button
            type="submit"
            style={{ padding: "6px 10px", border: "1px solid #f2b8b8", borderRadius: 8 }}
          >
            Borrar Receta
          </button>
        </form>
      </div>

      <p>
        <b>Descripción:</b> {receta.descripcion_corta}
      </p>
      <p>
        <b>Tiempo:</b> {receta.tiempo_coccion} min
      </p>

      <section>
        <h2>Ingredientes</h2>
        <pre style={{ whiteSpace: "pre-wrap", background: "#fafafa", padding: 12, borderRadius: 10 }}>
          {receta.ingredientes}
        </pre>
      </section>

      <section>
        <h2>Instrucciones</h2>
        <pre style={{ whiteSpace: "pre-wrap", background: "#fafafa", padding: 12, borderRadius: 10 }}>
          {receta.instrucciones}
        </pre>
      </section>

      <section style={{ borderTop: "1px solid #eee", paddingTop: 12 }}>
        <h2>Comentarios</h2>

        <form
          action={async (formData) => {
            "use server";
            await crearComentarioAction(id, formData);
          }}
          style={{ display: "grid", gap: 10, maxWidth: 700, marginBottom: 14 }}
        >
          <label>
            Autor
            <input name="autor" required style={{ width: "100%", padding: 8 }} />
          </label>

          <label>
            Comentario
            <textarea name="texto" required rows={4} style={{ width: "100%", padding: 8 }} />
          </label>

          <button type="submit" style={{ padding: "10px 14px", borderRadius: 10, border: "1px solid #ccc" }}>
            Añadir comentario
          </button>
        </form>

        {comentarios.length === 0 ? (
          <p>No hay comentarios todavía.</p>
        ) : (
          <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: 10 }}>
            {comentarios.map((c: any) => (
              <li key={c.id} style={{ border: "1px solid #eee", borderRadius: 12, padding: 12 }}>
                <b>{c.autor}</b>
                <p style={{ margin: "6px 0 0" }}>{c.texto}</p>
                <small style={{ color: "#666" }}>{String(c.fecha_creacion)}</small>
              </li>
            ))}
          </ul>
        )}
      </section>
    </article>
  );
}