import React,{useEffect,useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants,setPlants] = useState([])
  const [searchTerm,setSearchTerm] = useState("")

useEffect (() => {
  fetch("http://localhost:6001/plants")
  .then(res => res.json())
  .then((data) => setPlants(data))
  .catch((error) => console.error("Error fetching plants:",error))
}, [])
const handleAddPlant = (newPlant) => {
  setPlants([...plants,newPlant]);
};
const handleDeletePlant = (id) => {
  fetch(`http://localhost:6001/plants/${id}`, {
    method: "DELETE",
  })
    .then((res) => {
      if (res.ok) {
        setPlants(plants.filter((plant) => plant.id !== id)); // Remove plant from state
      } else {
        console.error("Failed to delete plant:", res.statusText);
      }
    })
    .catch((error) => console.error("Error deleting plant:", error));
};
const handleSearchChange = (term) => {
  setSearchTerm(term);
};

const filteredPlants = plants.filter((plant) =>
  plant.name.toLowerCase().includes(searchTerm.toLowerCase())
);
  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant}/>
      <Search onSearchChange={handleSearchChange}/>
      <PlantList plants={filteredPlants} onDeletePlant={handleDeletePlant}/>

    </main>
  );
}

export default PlantPage;
