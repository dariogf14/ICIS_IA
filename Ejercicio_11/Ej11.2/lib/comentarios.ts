import { getPool } from "./db";

export async function getComentariosByRecetaId(recetaId: number) {
  const pool = getPool();
  const [rows] = await pool.query(
    `SELECT id, receta_id, autor, texto, fecha_creacion
     FROM comentarios
     WHERE receta_id = ?
     ORDER BY fecha_creacion DESC`,
    [recetaId]
  );
  return rows as any[];
}