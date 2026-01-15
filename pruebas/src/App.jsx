import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Dashboard from "./components/Dashboard";
import ListaLibros from "./components/ListaLibros";
import ListaAlumnos from "./components/ListaAlumnos";
import PrestamosActivos from "./components/PrestamosActivos";
import FormNuevoPrestamo from "./components/FormNuevoPrestamo";

import { librosData } from "./data/libros";
import { alumnosData } from "./data/alumnos";
import { prestamosData } from "./data/prestamos";
// -----------------------------------------------------------------------------------
function App() {

    // ================== ESTADO GLOBAL ==================
    // Guarda aquí los libros (puedes modificar ejemplaresDisponibles)
    const [libros, setLibros] = useState(librosData);

    // Alumnos (solo lectura)
    const [alumnos] = useState(alumnosData);

    // Todos los préstamos (activos y devueltos)
    const [prestamos, setPrestamos] = useState(prestamosData);

    // Controla qué página se muestra
    const [pagina, setPagina] = useState('dashboard');

    // Fecha de hoy en formato YYYY-MM-DD
    const hoy = new Date().toISOString().split('T')[0];

    // ============== LÓGICA QUE TIENES QUE PROGRAMAR =================
    // 1. Calcular estadísticas para el Dashboard:
    //      - Total de libros
    //      - Préstamos activos
    //      - Préstamos vencidos
    //      - Libro más prestado (título)

    // 2. Función para devolver un libro:
    //      - Cambiar estado a "devuelto"
    //      - Poner fecha real de devolución
    //      - Aumentar ejemplares disponibles

    // 3. Función para crear nuevo préstamo:
    //      - Recibir datos del formulario
    //      - Crear objeto completo con ID único
    //      - Restar ejemplar disponible
    //      - Añadir al array de préstamos

    // 4. Pasar todas las props necesarias a cada componente

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
            {/* DASHBOARD */}
            {pagina === 'dashboard' && (
                <Dashboard
                    // Aquí tienes que pasar: total, prestados, vencidos y libro más prestado
                />
            )}

            {/* CATÁLOGO DE LIBROS */}
            {pagina === 'libros' && (
                <ListaLibros
                    // Pasar los libros (y si quieres, funciones si las necesitas)
                />
            )}

            {/* LISTA DE ALUMNOS CON MODAL */}
            {pagina === 'alumnos' && (
                <ListaAlumnos
                    // Necesito alumnos, préstamos y libros para el modal
                />
            )}

            {/* PRÉSTAMOS ACTIVOS */}
            {pagina === 'prestamos' && (
                <PrestamosActivos
                    // Necesita préstamos, alumnos, libros y función para devolver
                />
            )}

            {/* NUEVO PRÉSTAMO */}
            {pagina === 'nuevo' && (
                <FormNuevoPrestamo
// -----------------------------------------------------------------------------------------------
                  libros={libros}
                  alumnos={alumnos}
                  onCrear={handleCrearPrestamo}   // esta función la deberías definir arriba
                />
            )}
          </main>
        </>
    );
}

export default App;