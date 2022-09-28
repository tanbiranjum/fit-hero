import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import Drawer from "./components/Drawer/Drawer";
import Header from "./components/Header/Header";

function App() {
  const [cards, setCards] = useState([]);
  const [cardTotalTime, setCardTotalTime] = useState(0);

  useEffect(() => {
    fetch("db.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <div className="app">
      <div className="container">
        <Header />
        <p className="container__heading">Select Your Daily Activies</p>
        <div className="cards">
          {cards?.map((card) => (
            <Card
              key={card.id}
              data={card}
              cardTotalTime={cardTotalTime}
              setCardTotalTime={setCardTotalTime}
            />
          ))}
        </div>
      </div>
      <Drawer cardTotalTime={cardTotalTime} />
    </div>
  );
}

export default App;
