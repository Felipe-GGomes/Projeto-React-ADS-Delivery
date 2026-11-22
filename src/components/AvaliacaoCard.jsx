import './AvaliacaoCard.css';

export function AvaliacaoCard({ avaliacao }) {
  return (
    <article className="avaliacao-card">
      <div className="avaliacao-estrelas">
        {[1, 2, 3, 4, 5].map((num) => (
            num <= avaliacao.estrelas && <i key={num} className="fa-solid fa-star"></i>
        ))}
        </div>

      <p className="avaliacao-comentario">"{avaliacao.comentario}"</p>

      <footer className="avaliacao-autor">
        <img src={avaliacao.avatar} alt={avaliacao.nome} className="avaliacao-avatar" />
        <div className="avaliacao-avatar">
          <h4 className="avaliacao-nome">{avaliacao.nome}</h4>
          <p className="avaliacao-cargo">{avaliacao.cargo}</p>
        </div>
      </footer>
    </article>
  );
}