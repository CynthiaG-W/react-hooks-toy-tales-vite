import React from "react";

function ToyCard({ toy, toys, setToys }) {

  // function to increase toy likes
  function handleLike() {

    // updated likes count
    const updatedLikes = toy.likes + 1;

    // PATCH request to backend
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        likes: updatedLikes,
      }),
    })
      .then((res) => res.json())
      .then((updatedToy) => {

        // update toy in state while keeping order
        const updatedToys = toys.map((t) =>
          t.id === updatedToy.id ? updatedToy : t
        );

        setToys(updatedToys);
      });
  }

  // function to delete toy
  function handleDelete() {

    // DELETE request
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "DELETE",
    }).then(() => {

      // remove deleted toy from state
      const filteredToys = toys.filter(
        (t) => t.id !== toy.id
      );

      setToys(filteredToys);
    });
  }

  return (
    <div className="card" data-testid="toy-card">

      {/* toy name */}
      <h2>{toy.name}</h2>

      {/* toy image */}
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />

      {/* toy likes */}
      <p>{toy.likes} Likes </p>

      {/* like button */}
      <button
        className="like-btn"
        onClick={handleLike}
      >
        Like {"<3"}
      </button>

      {/* donate/delete button */}
      <button
        className="del-btn"
        onClick={handleDelete}
      >
        Donate to GoodWill
      </button>

    </div>
  );
}

export default ToyCard;