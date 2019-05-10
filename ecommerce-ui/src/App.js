//import React from "react";
import React, { Component } from "react";
import "./App.css";
import Card from "./Card";
import airbnbs from "./airbnbs.json";
import ShoppingCart from "./ShoppingCart";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shoppingList: []
    };
    //this.setState = this.setState.bind(this);
    this.setState = this.state.shoppingList.push.bind(this);
  }

  changShoppingList = temp => {
    this.setState({
      shoppingList: this.state.shoppingList.push(temp)
    });
    this.forceUpdate();
  };

  removeShoppingList = i => {
    this.setState({
      shoppingList: this.state.shoppingList.splice(i, 1)
    });
    console.log("r");
    this.forceUpdate();
  };

  render() {
    return (
      <div>
        <ShoppingCart
          shList={this.state.shoppingList}
          removeList={this.removeShoppingList}
        />
        <br />
        <Card data={airbnbs} changList={this.changShoppingList} />
      </div>
    );
  }
}

export default App;
