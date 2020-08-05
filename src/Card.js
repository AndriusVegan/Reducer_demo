import React from "react";
import "./Card.css";

function Card() {
  const [{}, dispatch] = useDataLayer();

  const addItem = () =>
    dispatch({
      type: "ADD_TO_BASKET",
      item: "iPad Pro",
    });

  return (
    <div className="card">
      <button>Add to basket</button>
    </div>
  );
}

export default Card;
