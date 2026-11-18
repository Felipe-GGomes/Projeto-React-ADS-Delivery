import { Card } from '../components/Card';
import './Home.css'

export function Home() {
  const pratos = [
    {
      id: 1,
      titulo: "Hambúrguer Artesanal",
      descricao: "Pão brioche, blend 180g, queijo cheddar e bacon.",
      preco: "32,90",
      imagem: "https://via.placeholder.com/320x200"
    },
    {
      id: 2,
      titulo: "Pizza Margherita",
      descricao: "Molho de tomate pelati, mussarela de búfala e manjericão.",
      preco: "45,00",
      imagem: "https://via.placeholder.com/320x200"
    },
    {
      id: 3,
      titulo: "Hambúrguer Artesanal",
      descricao: "Pão brioche, blend 180g, queijo cheddar e bacon.",
      preco: "32,90",
      imagem: "https://via.placeholder.com/320x200"
    },
    {
      id: 3,
      titulo: "Pizza Margherita",
      descricao: "Molho de tomate pelati, mussarela de búfala e manjericão.",
      preco: "45,00",
      imagem: "https://via.placeholder.com/320x200"
    },

    {
      id: 4,
      titulo: "Hambúrguer Artesanal",
      descricao: "Pão brioche, blend 180g, queijo cheddar e bacon.",
      preco: "32,90",
      imagem: "https://via.placeholder.com/320x200"
    },
  ];

  return (
    <main>
      <section className='home-banner'>
        <div className="home-banner-content">
          <h3>
            <i className="fa-solid fa-star"></i> 4.9 • 1.2k+ avaliações
          </h3>
          <h1>Gastronomia artesanal,</h1>
          <h2>direto na sua mesa</h2>
          <p>
            Massa fresca enrolada à mão toda manhã, cortes maturados a
            lenha e molhos com redução lenta. O aconchego da alta culinária
            italiana com entrega rápida e impecável.
          </p>
          <button className='home-banner-btn'>
            <i class="fa-solid fa-utensils"></i> Explorar Cardápio
          </button>
        </div>

        <img 
          src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
          alt="Imagem de comida" />
      </section>

      <section className='Card-title'>
        <h1>Pratos em Destaque</h1>
        <article className="card-container">
          {pratos.map((prato) => (
            <Card key={prato.id} prato={prato} />
          ))}
        </article>
      </section>
    </main>
  );
}