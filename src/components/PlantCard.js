import React, { useState } from "react";

function PlantCard({ plant,onDelete }) {
  const [soldOut, setSoldOut] = useState(false);
  const handleSoldOut = () => {
    setSoldOut(true); 
  };
  const handleDelete = () => {
    onDelete(plant.id)
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: ${plant.price.toFixed(2)}</p>
      {soldOut ? (
        <button>Out of Stock</button>
      ) : (
        <button className="primary" onClick={handleSoldOut}>
          In Stock
        </button>
      )}
      <button className="delete" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
}

export default PlantCard;
