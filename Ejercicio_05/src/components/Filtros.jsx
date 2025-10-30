const Filtros = ({ filtro, setFiltro }) => {
  const opciones = ['todas', 'alta', 'media', 'baja'];

  return (
    <div className="mb-3 text-center">
      {opciones.map(op => (
        <button
          key={op}
          className={`btn mx-1 ${filtro === op ? 'btn-primary' : 'btn-outline-primary'}`}
          onClick={() => setFiltro(op)}
        >
          {op.charAt(0).toUpperCase() + op.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default Filtros;