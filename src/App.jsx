import { useEffect, useState } from "react";
import "./App.css";
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
          {cards?.map((card) => {
            console.log(card);
          })}
        </div>
      </div>
      <Drawer />
    </div>
  );
}

export default App;
