import { Card } from '../components/Card';

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
    <main style={{ backgroundColor: "#FDF9F3",}}>
      <h1>Home</h1>
      <div className="card-container">
        {pratos.map((prato) => (
          <Card key={prato.id} prato={prato} />
        ))}
      </div>
    </main>
  );
}