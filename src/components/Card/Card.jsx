import React, { useState } from "react";
import "./Card.css";

const Card = ({ data, setCardTotalTime, cardTotalTime }) => {
  const [active, setActive] = useState(false);

  const handleAddButton = () => {
    setActive(true);
    setCardTotalTime(cardTotalTime + data.time * 1);
  };

  return (
    <div className="card">
      <img src={`img/${data.image}`} alt="" className="card__img" />
      <h3 className="card__name">{data.name}</h3>
      <p className="card__description">{data.description}</p>
      <p className="card__age">For Age: {data.age}</p>
      <p className="card__time">Time Required: {data.time}s</p>
      <button
        className={active ? "card__btn active-card" : "card__btn"}
        onClick={handleAddButton}
      >
        {active ? "Added" : "Add to list"}
      </button>
    </div>
  );
};

export default Card;
