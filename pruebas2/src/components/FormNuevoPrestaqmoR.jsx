// FormNuevoPrestamoR.jsx
export default function FormNuevoPrestamoR({ libros, alumnos, onCrear }) {

    const hoy = new Date().toISOString().split("T")[0];
    const en21 = new Date(Date.now() + 21 * 24 * 60 * 60 * 1000)
        .toISOString()
        .split("T")[0];

    function handleSubmit(e) {
        e.preventDefault();

        const data = {
            libroId: e.target.libro.value,
            alumnoId: e.target.alumno.value,
            fechaDevolucionPrevista: en21
        };

        if (!data.libroId || !data.alumnoId) {
            alert("Debes seleccionar un libro y un alumno.");
            return;
        }

        onCrear(data);

        e.target.reset();
    }

    return (
        <div className="form-container">
            <h2>Nuevo Préstamo</h2>

            <form onSubmit={handleSubmit}>
                {/* SELECT LIBROS */}
                <label>Libro:</label>
                <select name="libro">
                    <option value="">Seleccionar libro</option>
                    {libros
                        .filter(l => l.ejemplaresDisponibles > 0)
                        .map(l => (
                            <option key={l.id} value={l.id}>
                                {l.titulo} ({l.ejemplaresDisponibles} disponibles)
                            </option>
                        ))}
                </select>

                {/* SELECT ALUMNOS */}
                <label>Alumno:</label>
                <select name="alumno">
                    <option value="">Seleccionar alumno</option>
                    {alumnos.map(a => (
                        <option key={a.id} value={a.id}>
                            {a.nombre}
                        </option>
                    ))}
                </select>

                <button type="submit">Crear Préstamo</button>
            </form>
        </div>
    );
}