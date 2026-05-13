import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, setToys }) {

  return (

    // container holding all toy cards
    <div id="toy-collection">

      {/* loop through toys array and render a ToyCard for each toy */}
      {toys.map((toy) => (

        <ToyCard
          key={toy.id}
          toy={toy}
          toys={toys}
          setToys={setToys}
        />

      ))}

    </div>
  );
}

export default ToyContainer;