import Card from "./components/Card";
import "./App.css";

function App() {
  const cardData = [
    {
      id: 1,
      title: "Laptop",
      description: "Powerful laptop for coding and daily work.",
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400"
    },
    {
      id: 2,
      title: "Smart Phone",
      description: "Latest smartphone with amazing features.",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400"
    },
    {
      id: 3,
      title: "Headphones",
      description: "High quality headphones for music lovers.",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400"
    }
  ];

  return (
    <div className="container">
      <h1>Product Cards</h1>

      <div className="card-container">
        {cardData.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;