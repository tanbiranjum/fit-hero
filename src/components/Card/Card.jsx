import React from "react";
import "./Card.css";

const Card = ({ data }) => {
  return (
    <div className="card">
      <img src={`img/${data.image}`} alt="" className="card__img" />
      <h3 className="card__img">{data.name}</h3>
      <p className="card__description"></p>
      <p className="card__age">For Age: ${data.age}</p>
      <p className="card__time">Time Required: ${data.time}s</p>
      <button className="card__btn">Add to list</button>
    </div>
  );
};

export default Card;
