import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {
  return (
    <ul className="cards">
      {/* render PlantCards components in here */}
      {plants.map((plants) => (
        <PlantCard key={plants.id} plant={plant} />
      ))}
      </ul>
  );
}

export default PlantList;
