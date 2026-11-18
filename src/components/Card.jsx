import './Card.css';
export function Card({ prato }) {
  return (
    <section className="card" style={{ maxWidth: "320px" }}>
      <img 
        src={prato.imagem} 
        className="card-img-top" 
        alt={prato.titulo} 
      />
      <div className="card-body">
        <h2 className="card-title">{prato.titulo}</h2>
        <p className="card-text">{prato.descricao}</p>
        <div className="card-bottom">
            <h3>R$ {prato.preco}</h3>
            <a href="#" className="btn-solid theme-primary">
            <i className="fa-solid fa-plus"></i> pedir
            </a>
        </div>
      </div>
    </section>
  );
}