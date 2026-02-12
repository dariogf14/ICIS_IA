import Link from "next/link";
import { notFound } from "next/navigation";
import { unstable_noStore as noStore } from "next/cache";
import { getRecetaById } from "@/lib/recetas";
import { actualizarRecetaAction } from "@/lib/actions";

export const dynamic = "force-dynamic";

export default async function EditarRecetaPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  noStore();

  const { id: idParam } = await params;
  const id = Number(idParam);

  if (!Number.isFinite(id) || id <= 0) {
    notFound();
  }

  const receta = await getRecetaById(id);
  if (!receta) return <p>Receta no encontrada.</p>;

  return (
    <section style={{ display: "grid", gap: 12, maxWidth: 900 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1 style={{ margin: 0 }}>Editar receta</h1>
        <Link href={`/recetas/${id}`} style={{ padding: "6px 10px", border: "1px solid #ccc", borderRadius: 8 }}>
          ← Volver
        </Link>
      </div>

      <form
        action={async (formData) => {
          "use server";
          await actualizarRecetaAction(id, formData);
        }}
        style={{ display: "grid", gap: 10 }}
      >
        <label>
          Título
          <input name="titulo" defaultValue={receta.titulo} required style={{ width: "100%", padding: 8 }} />
        </label>

        <label>
          Descripción corta
          <input
            name="descripcion_corta"
            defaultValue={receta.descripcion_corta}
            required
            style={{ width: "100%", padding: 8 }}
          />
        </label>

        <label>
          Tiempo de cocción (min)
          <input
            name="tiempo_coccion"
            type="number"
            min={1}
            defaultValue={receta.tiempo_coccion}
            required
            style={{ width: "100%", padding: 8 }}
          />
        </label>

        <label>
          Ingredientes
          <textarea
            name="ingredientes"
            defaultValue={receta.ingredientes}
            required
            rows={6}
            style={{ width: "100%", padding: 8 }}
          />
        </label>

        <label>
          Instrucciones
          <textarea
            name="instrucciones"
            defaultValue={receta.instrucciones}
            required
            rows={8}
            style={{ width: "100%", padding: 8 }}
          />
        </label>

        <button type="submit" style={{ padding: "10px 14px", borderRadius: 10, border: "1px solid #ccc" }}>
          Guardar cambios
        </button>
      </form>
    </section>
  );
}