// AppR.jsx
import { useState } from 'react';

// IMPORTACIÓN DE COMPONENTES
import Dashboard from "./components/Dashboard";
import ListaLibros from "./components/ListaLibros";
import ListaAlumnos from "./components/ListaAlumnos";
import PrestamosActivos from "./components/PrestamosActivos";
import FormNuevoPrestamo from "./components/FormNuevoPrestamoR";

// IMPORTACIÓN DE DATOS
// import { librosData } from "./data/libros";
// import { alumnosData } from "./data/alumnos";
// import { prestamosData } from "./data/prestamos";

import "./App.css";

function App() {

    // ================== ESTADO GLOBAL ==================
    const [libros, setLibros] = useState(librosData);
    const [alumnos] = useState(alumnosData);
    const [prestamos, setPrestamos] = useState(prestamosData);

    const [pagina, setPagina] = useState("dashboard");
    const hoy = new Date().toISOString().split("T")[0];

    // ================== DASHBOARD: CÁLCULO DE ESTADÍSTICAS ==================

    const totalLibros = libros.length;

    // Préstamos activos
    const prestamosActivos = prestamos.filter(p => p.estado === "activo").length;

    // Préstamos vencidos
    const prestamosVencidos = prestamos.filter(
        p => p.estado === "activo" && p.fechaDevolucionPrevista < hoy
    ).length;

    // Libro más prestado
    const libroMasPrestado = (() => {
        const contador = {};

        prestamos.forEach(p => {
            if (!contador[p.libroId]) contador[p.libroId] = 0;
            contador[p.libroId]++;
        });

        let maxId = null;
        let maxCount = 0;

        for (const id in contador) {
            if (contador[id] > maxCount) {
                maxCount = contador[id];
                maxId = id;
            }
        }

        const libro = libros.find(l => l.id === Number(maxId));
        return libro ? libro.titulo : "Ninguno";
    })();

    // ================== FUNCIÓN: DEVOLVER LIBRO ==================

    function handleDevolver(idPrestamo) {
        setPrestamos(prev =>
            prev.map(p =>
                p.id === idPrestamo
                    ? {
                        ...p,
                        estado: "devuelto",
                        fechaDevolucionReal: hoy
                    }
                    : p
            )
        );

        const prestamo = prestamos.find(p => p.id === idPrestamo);

        // Aumentar ejemplares
        setLibros(prev =>
            prev.map(l =>
                l.id === prestamo.libroId
                    ? { ...l, ejemplaresDisponibles: l.ejemplaresDisponibles + 1 }
                    : l
            )
        );
    }

    // ================== FUNCIÓN: CREAR NUEVO PRÉSTAMO ==================

    function handleCrearPrestamo(obj) {
        const nuevo = {
            id: Date.now(),
            libroId: Number(obj.libroId),
            alumnoId: Number(obj.alumnoId),
            fechaPrestamo: hoy,
            fechaDevolucionPrevista: obj.fechaDevolucionPrevista,
            estado: "activo"
        };

        setPrestamos(prev => [...prev, nuevo]);

        // Restar un ejemplar
        setLibros(prev =>
            prev.map(l =>
                l.id === nuevo.libroId
                    ? { ...l, ejemplaresDisponibles: l.ejemplaresDisponibles - 1 }
                    : l
            )
        );

        console.log("Préstamo creado:", nuevo);
    }

    return (
        <>
            {/* CABECERA */}
            <header>
                <h1>Biblioteca Escolar</h1>
            </header>

            {/* MENÚ ESTÁTICO */}
            <nav>
                <div className="menu-estatico">
                    <a href="#dashboard" onClick={() => setPagina('dashboard')}>Dashboard</a>
                    <a href="#libros"    onClick={() => setPagina('libros')}>Libros</a>
                    <a href="#alumnos"   onClick={() => setPagina('alumnos')}>Alumnos</a>
                    <a href="#prestamos" onClick={() => setPagina('prestamos')}>Préstamos Activos</a>
                    <a href="#nuevo"     onClick={() => setPagina('nuevo')}>Nuevo Préstamo</a>
                </div>
            </nav>

            <main>

                {/* DASHBOARD * /}
                {pagina === "dashboard" && (
                    <Dashboard
                        total={totalLibros}
                        prestados={prestamosActivos}
                        vencidos={prestamosVencidos}
                        masPrestado={libroMasPrestado}
                    />
                )}

                {/* LIBROS * /}
                {pagina === "libros" && (
                    <ListaLibros libros={libros} />
                )}

                {/* ALUMNOS * /}
                {pagina === "alumnos" && (
                    <ListaAlumnos
                        alumnos={alumnos}
                        libros={libros}
                        prestamos={prestamos}
                    />
                )}

                {/* PRÉSTAMOS ACTIVOS * /}
                {pagina === "prestamos" && (
                    <PrestamosActivos
                        prestamos={prestamos}
                        alumnos={alumnos}
                        libros={libros}
                        onDevolver={handleDevolver}
                    />
                )}

                {/* NUEVO PRÉSTAMO * /}
                {pagina === "nuevo" && (
                    <FormNuevoPrestamoR
                        libros={libros}
                        alumnos={alumnos}
                        onCrear={handleCrearPrestamo}
                    />
                ) */}
            </main>
        </>
    );
}

export default App;