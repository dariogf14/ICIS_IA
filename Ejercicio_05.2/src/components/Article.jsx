const Article = ({ article, handlePin }) => {
  return (
    <div
      className={`card w-75 mb-3 shadow-sm ${article.pinned ? 'border-warning border-3' : ''}`}
    >
      <div className="card-body">
        <h5 className="card-title">
          {article.title} {article.pinned && <span className="badge bg-warning text-dark ms-2">Fijado</span>}
        </h5>
        <p className="card-text">Categoría: {article.category}</p>
        <button
          className={`btn ${article.pinned ? 'btn-secondary' : 'btn-outline-secondary'}`}
          onClick={() => handlePin(article.id)}
        >
          {article.pinned ? 'Desfijar' : 'Fijar'}
        </button>
      </div>
    </div>
  );
};

export default Article;