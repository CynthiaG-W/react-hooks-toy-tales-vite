import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {

  // controls showing/hiding the form
  const [showForm, setShowForm] = useState(false);

  // stores all toys from backend
  const [toys, setToys] = useState([]);

  // fetch toys when component loads
  useEffect(() => {

    // GET request
    fetch("http://localhost:3001/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));

  }, []);

  // toggles toy form visibility
  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  return (
    <>
      <Header />

      {/* display form conditionally */}
      {showForm ? (
        <ToyForm
          toys={toys}
          setToys={setToys}
        />
      ) : null}

      <div className="buttonContainer">

        {/* button to show/hide form */}
        <button onClick={handleClick}>
          Add a Toy
        </button>

      </div>

      {/* render all toys */}
      <ToyContainer
        toys={toys}
        setToys={setToys}
      />
    </>
  );
}

export default App;