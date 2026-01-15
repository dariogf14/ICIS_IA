// =======================================================
//  APUNTES PARA EL EXAMEN DE REACT - BIBLIOTECA ESCOLAR
//  (Preparado para copiar/pegar en Visual Studio Code)
// =======================================================
//
//  IMPORTANTE:
//  - Este archivo es SOLO de apuntes, ejemplos y patrones.
//  - No está pensado para que todo se ejecute a la vez.
//  - Úsalo como chuleta durante el examen para copiar trozos.
//
// =======================================================



// ==============================
// 1. IMPORTS TÍPICOS EN REACT
// ==============================

// En casi todos los componentes vas a necesitar useState
import { useState } from "react";



// ==============================
// 2. COMPONENTES Y JSX
// ==============================

// Un componente funcional básico de React:
function MiComponenteBasico() {
  // Siempre devuelve JSX (HTML dentro de JS)
  return <h1>Hola desde un componente</h1>;
}



// ==============================
// 3. useState - ESTADO EN REACT
// ==============================

// useState sirve para guardar y actualizar información reactiva.
// Sintaxis básica:
// const [estado, setEstado] = useState(valorInicial);

function EjemploUseState() {
  // Creamos un contador con valor inicial 0
  const [contador, setContador] = useState(0);

  // Función para aumentar el contador
  function incrementar() {
    // IMPORTANTE: nunca modificar directamente el estado,
    // siempre usar la función setContador.
    setContador(contador + 1);
  }

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={incrementar}>Sumar 1</button>
    </div>
  );
}



// ==========================================
// 4. PROPS - PASAR DATOS ENTRE COMPONENTES
// ==========================================

// Componente padre que pasa datos al hijo
function Padre() {
  const nombre = "Alumnos React";
  const edadMedia = 20;

  return <Hijo nombre={nombre} edad={edadMedia} />;
}

// Componente hijo que recibe props
function Hijo({ nombre, edad }) {
  // Las props se reciben en el parámetro de la función
  // y se usan dentro del JSX.
  return (
    <p>
      Nombre: {nombre} | Edad: {edad}
    </p>
  );
}



// =============================================
// 5. RENDERIZADO CONDICIONAL (CAMBIO DE PÁGINA)
// =============================================

function AppConPaginas() {
  // Guardamos en qué página estamos
  const [pagina, setPagina] = useState("dashboard");

  return (
    <div>
      {/* Menú para cambiar la página */}
      <nav>
        <button onClick={() => setPagina("dashboard")}>Dashboard</button>
        <button onClick={() => setPagina("libros")}>Libros</button>
        <button onClick={() => setPagina("alumnos")}>Alumnos</button>
      </nav>

      {/* Renderizado condicional:
          Si pagina === "dashboard", se muestra Dashboard, etc. */}
      {pagina === "dashboard" && <div>Contenido del Dashboard</div>}
      {pagina === "libros" && <div>Listado de libros</div>}
      {pagina === "alumnos" && <div>Listado de alumnos</div>}
    </div>
  );
}



// ========================================
// 6. LISTAS CON .map() Y PROPIEDAD key
// ========================================

// Ejemplo de un array de libros típico que te pueden dar:
const librosData = [
  {
    id: 1,
    titulo: "El Quijote",
    ejemplaresDisponibles: 2,
  },
  {
    id: 2,
    titulo: "Cien años de soledad",
    ejemplaresDisponibles: 1,
  },
];

// Listar libros con .map()
function ListaLibrosEjemplo({ libros }) {
  // Usar .map() para recorrer un array y devolver JSX.
  // IMPORTANTE: cada elemento debe tener una key única (normalmente el id).
  return (
    <ul>
      {libros.map((libro) => (
        <li key={libro.id}>
          {libro.titulo} - Ejemplares disponibles: {libro.ejemplaresDisponibles}
        </li>
      ))}
    </ul>
  );
}



// ==============================
// 7. EVENTOS Y FORMULARIOS
// ==============================

// Manejo básico de un formulario en React:
function FormularioBasico() {
  function handleSubmit(e) {
    // Prevenimos el comportamiento por defecto del formulario (recargar página)
    e.preventDefault();

    // Accedemos a los campos por su atributo name:
    const valorNombre = e.target.nombre.value;
    console.log("Nombre enviado:", valorNombre);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="nombre" placeholder="Escribe tu nombre" />
      <button type="submit">Enviar</button>
    </form>
  );
}



// =================================================
// 8. MANEJO DE ARRAYS EN EL ESTADO (AÑADIR / EDITAR)
// =================================================

function EjemploArrayEnEstado() {
  // Array de números como ejemplo
  const [numeros, setNumeros] = useState([1, 2, 3]);

  // Añadir un número al final del array
  function anadirNumero() {
    const nuevoNumero = Date.now(); // ID único de ejemplo
    // Usar el operador spread (...) para copiar el array y añadir al final
    setNumeros((prev) => [...prev, nuevoNumero]);
  }

  // Actualizar un número concreto usando .map()
  function multiplicarPorDos(idBuscado) {
    setNumeros((prev) =>
      prev.map((n) => (n === idBuscado ? n * 2 : n))
    );
  }

  // Eliminar un número usando .filter()
  function eliminarNumero(idBuscado) {
    setNumeros((prev) => prev.filter((n) => n !== idBuscado));
  }

  return (
    <div>
      <button onClick={anadirNumero}>Añadir número</button>
      {numeros.map((n) => (
        <div key={n}>
          {n}
          <button onClick={() => multiplicarPorDos(n)}>x2</button>
          <button onClick={() => eliminarNumero(n)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
}



// =======================================================
// 9. FECHAS TÍPICAS EN EL EXAMEN (HOY Y DENTRO DE 21 DÍAS)
// =======================================================

function EjemploFechas() {
  // Fecha de hoy en formato YYYY-MM-DD (ej: 2025-12-04)
  const hoy = new Date().toISOString().split("T")[0];

  // Fecha dentro de 21 días
  const en21 = new Date(Date.now() + 21 * 24 * 60 * 60 * 1000)
    .toISOString()
    .split("T")[0];

  return (
    <div>
      <p>Hoy: {hoy}</p>
      <p>Dentro de 21 días: {en21}</p>
    </div>
  );
}



// ======================================================
// 10. ESTADÍSTICAS DEL DASHBOARD (TIPO EXAMEN BIBLIOTECA)
// ======================================================

// Ejemplo de arrays similares a los del examen
const alumnosData = [
  { id: 1, nombre: "Ana" },
  { id: 2, nombre: "Luis" },
];

const prestamosData = [
  {
    id: 1,
    libroId: 1,
    alumnoId: 1,
    fechaPrestamo: "2025-11-01",
    fechaDevolucionPrevista: "2025-11-21",
    estado: "activo",
  },
  {
    id: 2,
    libroId: 2,
    alumnoId: 2,
    fechaPrestamo: "2025-10-01",
    fechaDevolucionPrevista: "2025-10-21",
    estado: "devuelto",
    fechaDevolucionReal: "2025-10-20",
  },
];

function EjemploDashboard() {
  const [libros] = useState(librosData);
  const [prestamos] = useState(prestamosData);

  const hoy = new Date().toISOString().split("T")[0];

  // Total de libros (número de elementos en el array libros)
  const totalLibros = libros.length;

  // Número de préstamos activos
  const prestamosActivos = prestamos.filter((p) => p.estado === "activo").length;

  // Número de préstamos vencidos (activos cuya fecha prevista < hoy)
  const prestamosVencidos = prestamos.filter(
    (p) => p.estado === "activo" && p.fechaDevolucionPrevista < hoy
  ).length;

  // Cálculo del libro más prestado
  const libroMasPrestado = (() => {
    // Objeto para contar cuántas veces se presta cada libroId
    const contador = {};

    prestamos.forEach((p) => {
      if (!contador[p.libroId]) contador[p.libroId] = 0;
      contador[p.libroId]++;
    });

    // Buscamos el libroId con mayor número de préstamos
    let maxId = null;
    let maxCount = 0;

    for (const id in contador) {
      if (contador[id] > maxCount) {
        maxCount = contador[id];
        maxId = id;
      }
    }

    // Buscamos el libro en el array de libros
    const libro = libros.find((l) => l.id === Number(maxId));

    // Devolvemos el título o "Ninguno" si no hay préstamos
    return libro ? libro.titulo : "Ninguno";
  })();

  return (
    <div>
      <p>Total de libros: {totalLibros}</p>
      <p>Préstamos activos: {prestamosActivos}</p>
      <p>Préstamos vencidos: {prestamosVencidos}</p>
      <p>Libro más prestado: {libroMasPrestado}</p>
    </div>
  );
}



// ========================================================
// 11. FUNCIÓN PARA CREAR UN NUEVO PRÉSTAMO (EXAMEN TÍPICO)
// ========================================================

function AppConPrestamos() {
  const [libros, setLibros] = useState(librosData);
  const [alumnos] = useState(alumnosData);
  const [prestamos, setPrestamos] = useState(prestamosData);

  const hoy = new Date().toISOString().split("T")[0];
  const en21 = new Date(Date.now() + 21 * 24 * 60 * 60 * 1000)
    .toISOString()
    .split("T")[0];

  // Esta función es la que se le pasa al formulario como onCrear
  function handleCrearPrestamo(dataFormulario) {
    // dataFormulario suele tener: libroId y alumnoId

    // Creamos el objeto préstamo completo
    const nuevoPrestamo = {
      id: Date.now(), // ID único
      libroId: Number(dataFormulario.libroId),
      alumnoId: Number(dataFormulario.alumnoId),
      fechaPrestamo: hoy,
      fechaDevolucionPrevista: en21,
      estado: "activo",
    };

    // Añadimos el préstamo al array de préstamos
    setPrestamos((prev) => [...prev, nuevoPrestamo]);

    // Restamos 1 ejemplar al libro correspondiente
    setLibros((prev) =>
      prev.map((libro) =>
        libro.id === nuevoPrestamo.libroId
          ? {
              ...libro,
              ejemplaresDisponibles: libro.ejemplaresDisponibles - 1,
            }
          : libro
      )
    );

    // Enunciados de examen suelen pedir mostrar en consola
    console.log("Préstamo creado:", nuevoPrestamo);
  }

  return (
    <div>
      {/* Aquí iría un formulario al que le pasas libros, alumnos y onCrear */}
      {/* <FormNuevoPrestamo libros={libros} alumnos={alumnos} onCrear={handleCrearPrestamo} /> */}
      <p>Ejemplo de App con función handleCrearPrestamo definida.</p>
    </div>
  );
}



// ====================================================
// 12. FORMULARIO DE NUEVO PRÉSTAMO (CON SELECTS)
// ====================================================

function FormNuevoPrestamoEjemplo({ libros, alumnos, onCrear }) {
  const hoy = new Date().toISOString().split("T")[0];
  const en21 = new Date(Date.now() + 21 * 24 * 60 * 60 * 1000)
    .toISOString()
    .split("T")[0];

  function handleSubmit(e) {
    e.preventDefault();

    const libroId = e.target.libro.value;
    const alumnoId = e.target.alumno.value;

    // Controlar que se haya seleccionado libro y alumno
    if (!libroId || !alumnoId) {
      alert("Debes seleccionar un libro y un alumno");
      return;
    }

    // Creamos un objeto simplificado para pasárselo a App
    const data = {
      libroId,
      alumnoId,
      fechaPrestamo: hoy,
      fechaDevolucionPrevista: en21,
    };

    // Llamamos a la función que viene de App
    onCrear(data);

    // Limpiar formulario
    e.target.reset();

    // Mostrar datos del préstamo en consola
    console.log("Datos del préstamo enviados desde el formulario:", data);
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Select de libros: solo los que tienen ejemplaresDisponibles > 0 */}
      <label>Libro:</label>
      <select name="libro">
        <option value="">Seleccionar libro</option>
        {libros
          .filter((l) => l.ejemplaresDisponibles > 0)
          .map((l) => (
            <option key={l.id} value={l.id}>
              {l.titulo} ({l.ejemplaresDisponibles} disponibles)
            </option>
          ))}
      </select>

      {/* Select de alumnos */}
      <label>Alumno:</label>
      <select name="alumno">
        <option value="">Seleccionar alumno</option>
        {alumnos.map((a) => (
          <option key={a.id} value={a.id}>
            {a.nombre}
          </option>
        ))}
      </select>

      <button type="submit">Crear préstamo</button>
    </form>
  );
}



// =====================================================
// 13. FUNCIÓN PARA DEVOLVER UN LIBRO (EXAMEN TÍPICO)
// =====================================================

function AppConDevolucion() {
  const [libros, setLibros] = useState(librosData);
  const [prestamos, setPrestamos] = useState(prestamosData);

  const hoy = new Date().toISOString().split("T")[0];

  // Función que recibe el id de un préstamo a devolver
  function handleDevolver(idPrestamo) {
    // Primero actualizamos el préstamo: estado = "devuelto" y fechaDevolucionReal = hoy
    setPrestamos((prev) =>
      prev.map((p) =>
        p.id === idPrestamo
          ? {
              ...p,
              estado: "devuelto",
              fechaDevolucionReal: hoy,
            }
          : p
      )
    );

    // Buscamos el préstamo para saber qué libro es
    const prestamo = prestamos.find((p) => p.id === idPrestamo);

    if (!prestamo) return;

    // Aumentamos en 1 los ejemplaresDisponibles de ese libro
    setLibros((prev) =>
      prev.map((l) =>
        l.id === prestamo.libroId
          ? {
              ...l,
              ejemplaresDisponibles: l.ejemplaresDisponibles + 1,
            }
          : l
      )
    );
  }

  return (
    <div>
      {/* Ejemplo de cómo podrías usar la función: */}
      {prestamos
        .filter((p) => p.estado === "activo")
        .map((p) => (
          <div key={p.id}>
            Préstamo {p.id} - Libro {p.libroId} - Estado: {p.estado}
            <button onClick={() => handleDevolver(p.id)}>Devolver</button>
          </div>
        ))}
    </div>
  );
}



// =====================================================
// 14. ERRORES TÍPICOS EN LOS EXÁMENES (RESUMEN)
// =====================================================
//
// - Olvidar cerrar etiquetas JSX (<div>, <main>, componentes, etc.)
// - No usar key en .map()
// - Modificar arrays directamente (ej: libros.push()) en vez de usar setLibros([...])
// - No convertir los IDs de string a número (Number(libroId))
// - Olvidar e.preventDefault() en formularios
// - No filtrar libros sin ejemplaresDisponibles > 0 en el select
// - Olvidar actualizar ejemplaresDisponibles al crear o devolver préstamos
//
// Ten estos puntos en mente al revisar tu ejercicio en el examen.
// Si tu solución hace estas cosas bien, vas muy fuerte.

    <h1> Bienvenido al gestor de finanzas </h1>
    <p> Por favor, selecciona un usuario para continuar </p>

    <section>
      <div class="item2">
        <img src="public/img/users/elena_navarro.jpg" class="img">
        <h3>Elena Navarro</h3>
        <button class="boton">Ver perfil</button>
      </div>
    </section>