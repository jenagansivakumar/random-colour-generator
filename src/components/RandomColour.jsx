import { useState } from "react";

export default function RandomColour() {
  const [typeOfColour, setTypeOfColour] = useState("HEX");
  const [colour, setColour] = useState("#000000");
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: colour,
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "column",
        padding: "20px", // Add padding to separate buttons from top edge
      }}
    >
      <button style={{ marginBottom: "10px" }}> Create HEX </button>
      <button style={{ marginBottom: "10px" }}> Create RGB </button>
      <button> Generate Random Colour</button>
    </div>
  );
}
