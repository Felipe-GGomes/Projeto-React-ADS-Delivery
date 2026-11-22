import { AvaliacaoCard } from '../components/AvaliacaoCard';
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

    const avaliacoes = [
    {
      id: 1,
      estrelas: 5,
      comentario: "Massa fresca impecável e entrega super rápida. Chegou quentinho como se tivesse acabado de sair da cozinha.",
      nome: "Camila Ferreira",
      cargo: "Advogada",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80"
    },
    {
      id: 2,
      estrelas: 5,
      comentario: "O hambúrguer artesanal tem um sabor defumado incrível. Virou nosso pedido fixo de sexta-feira!",
      nome: "Lucas Mendes",
      cargo: "Arquiteto",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80"
    },
    {
      id: 3,
      estrelas: 5,
      comentario: "O hambúrguer artesanal tem um sabor defumado incrível. Virou nosso pedido fixo de sexta-feira!",
      nome: "Lucas Mendes",
      cargo: "Arquiteto",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80"
    },
    {
      id: 3,
      estrelas: 5,
      comentario: "Atendimento atencioso e porções muito bem servidas. Dá para sentir o cuidado em cada ingrediente.",
      nome: "Mariana Costa",
      cargo: "Designer",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80"
    }
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

      <section className='home-funcinamento'>
        <h2>Horário de Funcionamento</h2>

        <div className="horario">
          <div className="horario-item">
            <h3>Terça a Sexta-feira</h3>
            <p className="horario-turno">18h30 – 23h30</p>
          </div>

          <div className="horario-item">
            <h3>Sábado e Domingo</h3>
            <div className="horario-finalSemana">
              <span className="horario-turno">12h00 – 15h30</span>
              <span className="horario-turno-dois">18h30 – 00h00</span>
            </div>
          </div>

          <div className="horario-item horario-fechado">
            <h3>Segunda-feira</h3>
            <p>Fechado</p>
          </div>
        </div>

      </section>

      <section className="avaliacoes-section">
        <span className="avaliacoes-tag">AVALIAÇÕES REAIS</span>
        <h2>O que nossos clientes dizem</h2>

        <div className="avaliacoes-grid">
          {avaliacoes.map((item) => (
            <AvaliacaoCard key={item.id} avaliacao={item} />
          ))}
        </div>
      </section>
    </main>
  );
}