import { getPool } from "@/lib/db";

export type Receta = {
  id: number;
  titulo: string;
  descripcion_corta: string;
  ingredientes: string;
  instrucciones: string;
  tiempo_coccion: number;
  fecha_creacion: string;
};

export async function getRecetas() {
  const pool = getPool();
  const [rows] = await pool.query(
    `SELECT id, titulo, descripcion_corta, tiempo_coccion, fecha_creacion
     FROM recetas
     ORDER BY fecha_creacion DESC`
  );
  return rows as any[];
}

export async function getRecetaById(id: number) {
  const pool = getPool();
  const [rows] = await pool.query(
    `SELECT id, titulo, descripcion_corta, ingredientes, instrucciones, tiempo_coccion, fecha_creacion
     FROM recetas
     WHERE id = ?`,
    [id]
  );
  const receta = (rows as any[])[0];
  return receta ?? null;
}