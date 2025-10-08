export default function CardsSection() {
  const cards = Array(4).fill({
    title: "Explora la Naturaleza",
    text: "Descubre cómo cuidar el medio ambiente y conectar con la vida natural.",
    img: "https://via.placeholder.com/300x200"
  });

  return (
    <section className="container my-5">
      <div className="row">
        {cards.map((card, index) => (
          <div className="col-md-3" key={index}>
            <div className="card">
              <img src={card.img} className="card-img-top" alt="Naturaleza" />
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}