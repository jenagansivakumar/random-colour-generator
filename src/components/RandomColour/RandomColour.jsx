import { useState } from "react";
import "./index.css"; // Import the CSS file

export default function RandomColour() {
  const [typeOfColour, setTypeOfColour] = useState("HEX");
  const [colour, setColour] = useState("#000000");

  const containerStyle = {
    background: colour, // Dynamic background color
  };

  return (
    <div className="container" style={containerStyle}>
      <button> Create HEX </button>
      <button> Create RGB </button>
      <button> Generate Random Colour</button>
    </div>
  );
}
