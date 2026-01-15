// FormNuevoPrestamo.jsx
// Formulario para crear un nuevo préstamo
export default function FormNuevoPrestamo() {
    // Cálculo de fechas
    const hoy = new Date().toISOString().split('T')[0];
    const en21 = new Date(Date.now() + 21*24*60*60*1000).toISOString().split('T')[0];
    // Necesitas recibir: libros, alumnos y una función onCrear(objetoPrestamo)
    // 1. Dos selects: uno para libro (solo con ejemplaresDisponibles > 0)
    //    y otro para alumno
    // 2. Al pulsar el botón "Crear Préstamo":
    //      - Crear objeto con id único
    //      - fechaPrestamo = hoy
    //      - fechaDevolucionPrevista = en21
    //      - estado = "activo"
    //      - Llamar a la función onCrear que te pasen desde App
    // 3. Controlar que no se pueda prestar si no hay ejemplares
    // 4. Mostrar datos préstamo en consola y limpiar formulario tras éxito

    return (
        <div className="form-container">
            <h2>Nuevo Préstamo</h2>
            {/* Aquí tu formulario con dos selects y botón */}
        </div>
    );
}