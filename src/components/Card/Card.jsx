import React, { useState } from "react";
import "./Card.css";

const Card = ({ data }) => {
  const [active, setActive] = useState(false);
  return (
    <div className="card">
      <img src={`img/${data.image}`} alt="" className="card__img" />
      <h3 className="card__img">{data.name}</h3>
      <p className="card__description"></p>
      <p className="card__age">For Age: ${data.age}</p>
      <p className="card__time">Time Required: ${data.time}s</p>
      <button
        className={active ? "card__btn active-card" : "card__btn"}
        onClick={() => {
          setActive(true);
        }}
      >
        {active ? "Added" : "Add to list"}
      </button>
    </div>
  );
};

export default Card;
