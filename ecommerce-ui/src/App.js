//import React from "react";
import React, { Component } from "react";
import "./App.css";
import Card from "./Card";
import airbnbs from "./airbnbs.json";
import ShoppingCart from "./ShoppingCart";

class App extends Component {
  state = {
    A: 0,
    shoppingList: [1]
  };

  changList(temp) {
    this.setState({
      shoppingList: temp
    });
  }

  render() {
    return (
      <div>
        <ShoppingCart shList={this.state.shoppingList} />
        <br />
        <Card data={airbnbs} changList={this.state.shoppingList} />
      </div>
    );
  }
}

export default App;
