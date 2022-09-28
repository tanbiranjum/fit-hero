import { useEffect, useState } from "react";
import "./App.css";
import Drawer from "./components/Drawer/Drawer";
import Header from "./components/Header/Header";

function App() {
  const [card, cards] = useState([]);

  useEffect(() => {
    fetch("db.json")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className="app">
      <div className="container">
        <Header />
      </div>
      <Drawer />
    </div>
  );
}

export default App;
