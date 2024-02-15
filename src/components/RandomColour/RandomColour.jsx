import { useState } from "react";

export default function RandomColour() {
  const [typeOfColour, setTypeOfColour] = useState("hex");
  const [colour, setColour] = useState("#000000");

  function randomColourUtility(length) {
    return Math.floor(Math.random() * length);
  }
  function handleCreateHexRandomColour() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColour = "#";

    for (let i = 0; i < 6; i++) {
      hexColour += hex[randomColourUtility(hex.length)];
    }
    console.log(hexColour);

    setColour(hexColour);
  }
  function handleCreateRgbRandomColour() {
    const r = randomColourUtility(256);
    const g = randomColourUtility(256);
    const b = randomColourUtility(256);

    setColour(`rgb${r},${g},${b}`);
  }

  const containerStyle = {
    background: colour,
  };

  return (
    <div className="container" style={containerStyle}>
      <button onClick={() => setTypeOfColour("hex")}> Create HEX </button>
      <button onClick={() => setTypeOfColour("rgb")}> Create RGB </button>
      <button
        onClick={
          typeOfColour === "hex"
            ? handleCreateHexRandomColour
            : handleCreateRgbRandomColour
        }
      >
        {" "}
        Generate Random Colour
      </button>
      <div className="display-rgb">
        <h3>{typeOfColour === "rgb" ? "RGB Colour" : "HEX Colour"}</h3>
        <h1>{colour}</h1>
      </div>
    </div>
  );
}
