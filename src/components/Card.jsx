import React from "react";

const Card = () => {
  const handleClick = async () => {
    try {
      const response = await fetch("http://127.0.0.1:80");
      const json = await response.json();
      // console.log(response)
      document.querySelector(".jokes").innerHTML = json.message;
    } catch (error) {
      console.error("Error fetching joke:", error);
    }
  };

  return (
    <div className="card-body">
      <div className="card-border">
        <h1 className="heading">Jokes Apart</h1>
        <p className="jokes">Get Your Joke</p>
        <button className="getJoke" onClick={handleClick}>
          Get Joke!
        </button>
      </div>
    </div>
  );
};

export default Card;
