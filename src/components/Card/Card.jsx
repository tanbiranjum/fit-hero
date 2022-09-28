import React from "react";
import "./Card.css";

const Card = ({ data }) => {
  return (
    <div className="card">
      <img src={`img/${data.image}`} alt="" className="card__img" />
    </div>
  );
};

export default Card;
