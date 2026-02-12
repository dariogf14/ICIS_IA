import mysql from "mysql2/promise";

declare global {
  var _pool: mysql.Pool | undefined;
}

export function getPool() {
  if (!global._pool) {
    global._pool = mysql.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: Number(process.env.DB_PORT ?? 3306),
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });
  }
  return global._pool;
}