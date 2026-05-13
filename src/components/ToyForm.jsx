import React, { useState } from "react";

function ToyForm({ toys, setToys }) {

  // state for form inputs
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  // function runs when form is submitted
  function handleSubmit(e) {

    // prevent page refresh
    e.preventDefault();

    // new toy object
    const newToy = {
      name: name,
      image: image,
      likes: 0,
    };

    // POST request to backend
    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
      .then((res) => res.json())
      .then((createdToy) => {

        // add new toy to state
        setToys([...toys, createdToy]);

        // clear form inputs
        setName("");
        setImage("");
      });
  }

  return (
    <div className="container">

      {/* toy creation form */}
      <form
        className="add-toy-form"
        onSubmit={handleSubmit}
      >

        <h3>Create a toy!</h3>

        {/* toy name input */}
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br />

        {/* toy image input */}
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <br />

        {/* submit button */}
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />

      </form>
    </div>
  );
}

export default ToyForm;