import React, { useState } from "react";
import './App.css';
//import logo from './logo.svg';


function CakeOrderApp() {
  const [flavor, setFlavor] = useState("");
  const [size, setSize] = useState("");
  const [layers, setLayers] = useState("");
  const [filling, setFilling] = useState("");
  const [instructions, setInstructions] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log({ flavor, size, layers, filling, instructions });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Customize Your Cake On Your Favourite Sweet Indulgance</h2>
      <label>
        Flavor:
        <select value={flavor} onChange={(e) => setFlavor(e.target.value)}>
          <option value="">Select a flavor</option>
          <option value="chocolate">Chocolate</option>
          <option value="vanilla">Vanilla</option>
          <option value="strawberry">Strawberry</option>
        </select>
      </label>
      <br />
      <label>
        Size:
        <input
          type="radio"
          name="size"
          value="6 inch"
          checked={size === "6 inch"}
          onChange={(e) => setSize(e.target.value)}
        />
        6 inch
        <input
          type="radio"
          name="size"
          value="8 inch"
          checked={size === "8 inch"}
          onChange={(e) => setSize(e.target.value)}
        />
        8 inch
        <input
          type="radio"
          name="size"
          value="10 inch"
          checked={size === "10 inch"}
          onChange={(e) => setSize(e.target.value)}
        />
        10 inch
      </label>
      <br />
      <label>
        Layers:
        <input
          type="number"
          value={layers}
          onChange={(e) => setLayers(e.target.value)}
        />
      </label>
      <br />
      <label>
        Filling:
        <input
          type="text"
          value={filling}
          onChange={(e) => setFilling(e.target.value)}
        />
      </label>
      <br/>
      <label>
        Special Guidelines:
        <input id="new"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
        />
      </label>
      <br />
      <button>Place Order</button>
    </form>
  );
}

export default CakeOrderApp;




