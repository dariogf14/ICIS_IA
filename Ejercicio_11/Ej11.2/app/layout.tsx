export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body style={{ fontFamily: "system-ui", margin: 0 }}>
        <header style={{ padding: 16, borderBottom: "1px solid #eee" }}>
          <a href="/" style={{ textDecoration: "none", fontWeight: 700 }}>🍲 Blog de Recetas</a>
        </header>
        <main style={{ maxWidth: 900, margin: "0 auto", padding: 16 }}>{children}</main>
      </body>
    </html>
  );
}