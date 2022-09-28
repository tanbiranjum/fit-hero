import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import Drawer from "./components/Drawer/Drawer";
import Header from "./components/Header/Header";

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("db.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <div className="app">
      <div className="container">
        <Header />
        <p>Select Your Daily Activies</p>
        <div className="cards">
          {console.log(cards)}
          {cards?.map((card) => (
            <Card key={card.id} data={card} />
          ))}
        </div>
      </div>
      <Drawer />
    </div>
  );
}

export default App;
