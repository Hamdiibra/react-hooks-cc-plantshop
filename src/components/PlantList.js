import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants ,onDeletePlant}) {
  return (
    <div className="plant-list">
      {plants.map((plant) => (
        <PlantCard key={plant.id} plant={plant} onDelete={onDeletePlant}/>
      ))}
    </div>
  );
}

export default PlantList;
