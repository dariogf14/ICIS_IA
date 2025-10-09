// Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-dark text-light py-5">
      <div className="container">
        <h2 className="mb-4 text-success">Formulario de solicitud de plantas</h2>
        <form name="plant-export" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="plant-export" />

          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">Nombre completo</label>
            <input
              type="text"
              className="form-control"
              id="nombre"
              name="nombre"
              placeholder="Ej. Ana López"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="correo" className="form-label">Correo electrónico</label>
            <input
              type="email"
              className="form-control"
              id="correo"
              name="correo"
              placeholder="ana@ejemplo.com"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="tipoPlanta" className="form-label">Tipo de planta de interés</label>
            <select className="form-select" id="tipoPlanta" name="tipoPlanta" required>
              <option value="">Selecciona una opción</option>
              <option value="ornamental">Ornamental</option>
              <option value="medicinal">Medicinal</option>
              <option value="aromática">Aromática</option>
              <option value="tropical">Tropical</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="cantidad" className="form-label">Cantidad aproximada</label>
            <input
              type="number"
              className="form-control"
              id="cantidad"
              name="cantidad"
              placeholder="Ej. 100 unidades"
              min="1"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="comentarios" className="form-label">Comentarios adicionales</label>
            <textarea
              className="form-control"
              id="comentarios"
              name="comentarios"
              rows="4"
              placeholder="Escribe aquí tus observaciones o requerimientos específicos..."
            ></textarea>
          </div>

          <button type="submit" className="btn btn-success">
            Enviar solicitud
          </button>
        </form>
      </div>
    </footer>
  );
}