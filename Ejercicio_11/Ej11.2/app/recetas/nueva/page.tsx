import { crearRecetaAction } from "@/lib/actions";

export default function NuevaRecetaPage() {
  return (
    <section>
      <h1>Nueva receta</h1>

      <form action={crearRecetaAction} style={{ display: "grid", gap: 10, maxWidth: 700 }}>
        <label>
          Título
          <input name="titulo" required style={{ width: "100%", padding: 8 }} />
        </label>

        <label>
          Descripción corta
          <input name="descripcion_corta" required style={{ width: "100%", padding: 8 }} />
        </label>

        <label>
          Ingredientes
          <textarea name="ingredientes" required rows={6} style={{ width: "100%", padding: 8 }} />
        </label>

        <label>
          Instrucciones
          <textarea name="instrucciones" required rows={8} style={{ width: "100%", padding: 8 }} />
        </label>

        <label>
          Tiempo de cocción (min)
          <input name="tiempo_coccion" type="number" min={1} required style={{ width: "100%", padding: 8 }} />
        </label>

        <button type="submit" style={{ padding: "10px 14px", borderRadius: 10, border: "1px solid #ccc" }}>
          Crear
        </button>

        <p style={{ color: "#666" }}>
          Nota: si hay errores, Next mostrará el error. (Si quieres, te paso versión con manejo de errores en UI con useFormState).
        </p>
      </form>
    </section>
  );
}