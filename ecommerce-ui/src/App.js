import React from "react";

import "./App.css";
import Card from "./Card";
import airbnbs from "./airbnbs.json";
import ShoppingCart from "./ShoppingCart";

function App() {
  return (
    <div>
      <ShoppingCart />
      <br />
      <hr />
      <Card data={airbnbs} />
    </div>
  );
}

export default App;
