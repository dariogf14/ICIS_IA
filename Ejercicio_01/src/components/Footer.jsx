export default function ContactForm() {
  return (
    <section className="container my-5">
      <h2 className="mb-4">Solicita más información</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre completo</label>
          <input type="text" className="form-control" id="nombre" placeholder="Tu nombre" />
        </div>
        <div className="mb-3">
          <label htmlFor="correo" className="form-label">Correo electrónico</label>
          <input type="email" className="form-control" id="correo" placeholder="nombre@ejemplo.com" />
        </div>
        <div className="mb-3">
          <label htmlFor="mensaje" className="form-label">Mensaje</label>
          <textarea className="form-control" id="mensaje" rows="4"></textarea>
        </div>
        <button type="submit" className="btn btn-success">Enviar solicitud</button>
      </form>
    </section>
  );
}