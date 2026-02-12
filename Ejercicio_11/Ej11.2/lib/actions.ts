"use server";

import { getPool } from "./db";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

function required(v: unknown) {
  return typeof v === "string" ? v.trim().length > 0 : v !== null && v !== undefined;
}

export async function crearRecetaAction(formData: FormData) {
  const titulo = String(formData.get("titulo") ?? "").trim();
  const descripcion_corta = String(formData.get("descripcion_corta") ?? "").trim();
  const ingredientes = String(formData.get("ingredientes") ?? "").trim();
  const instrucciones = String(formData.get("instrucciones") ?? "").trim();
  const tiempo_coccion_raw = String(formData.get("tiempo_coccion") ?? "").trim();

  const tiempo_coccion = Number(tiempo_coccion_raw);

  const errores: string[] = [];
  if (!required(titulo)) errores.push("El título es obligatorio.");
  if (!required(descripcion_corta)) errores.push("La descripción corta es obligatoria.");
  if (!required(ingredientes)) errores.push("Los ingredientes son obligatorios.");
  if (!required(instrucciones)) errores.push("Las instrucciones son obligatorias.");
  if (!Number.isFinite(tiempo_coccion) || tiempo_coccion <= 0) errores.push("Tiempo de cocción inválido.");

  if (errores.length) {
    throw new Error(errores.join(" "));
  }

  const pool = getPool();
  const [result] = await pool.execute(
    `INSERT INTO recetas (titulo, descripcion_corta, ingredientes, instrucciones, tiempo_coccion)
     VALUES (?, ?, ?, ?, ?)`,
    [titulo, descripcion_corta, ingredientes, instrucciones, tiempo_coccion]
  );

  const insertId = (result as any).insertId as number;

  revalidatePath("/");
  redirect(`/recetas/${insertId}`);
}

export async function actualizarRecetaAction(id: number, formData: FormData) {
  const titulo = String(formData.get("titulo") ?? "").trim();
  const descripcion_corta = String(formData.get("descripcion_corta") ?? "").trim();
  const ingredientes = String(formData.get("ingredientes") ?? "").trim();
  const instrucciones = String(formData.get("instrucciones") ?? "").trim();
  const tiempo_coccion_raw = String(formData.get("tiempo_coccion") ?? "").trim();
  const tiempo_coccion = Number(tiempo_coccion_raw);

  const errores: string[] = [];
  if (!required(titulo)) errores.push("El título es obligatorio.");
  if (!required(descripcion_corta)) errores.push("La descripción corta es obligatoria.");
  if (!required(ingredientes)) errores.push("Los ingredientes son obligatorios.");
  if (!required(instrucciones)) errores.push("Las instrucciones son obligatorias.");
  if (!Number.isFinite(tiempo_coccion) || tiempo_coccion <= 0) errores.push("Tiempo de cocción inválido.");

  if (errores.length) throw new Error(errores.join(" "));

  const pool = getPool();
  await pool.execute(
    `UPDATE recetas
     SET titulo=?, descripcion_corta=?, ingredientes=?, instrucciones=?, tiempo_coccion=?
     WHERE id=?`,
    [titulo, descripcion_corta, ingredientes, instrucciones, tiempo_coccion, id]
  );

  revalidatePath("/");
  revalidatePath(`/recetas/${id}`);
  redirect(`/recetas/${id}`);
}

export async function borrarRecetaAction(id: number) {
  const pool = getPool();
  await pool.execute(`DELETE FROM recetas WHERE id = ?`, [id]);

  revalidatePath("/");
  redirect("/");
}

export async function crearComentarioAction(recetaId: number, formData: FormData) {
  const autor = String(formData.get("autor") ?? "").trim();
  const texto = String(formData.get("texto") ?? "").trim();

  const errores: string[] = [];
  if (!required(autor)) errores.push("El autor es obligatorio.");
  if (!required(texto)) errores.push("El texto es obligatorio.");
  if (errores.length) throw new Error(errores.join(" "));

  const pool = getPool();
  await pool.execute(
    `INSERT INTO comentarios (receta_id, autor, texto)
     VALUES (?, ?, ?)`,
    [recetaId, autor, texto]
  );

  revalidatePath(`/recetas/${recetaId}`);
}