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
    //console.log(temp);
    // let x
    this.setState({
      //dummy: this.state.dummy + 1,
      shoppingList: this.state.shoppingList.push(temp)
    });
    this.forceUpdate();
    // console.log(this.state.shoppingList);
  };

  render() {
    console.log(this.state.dummy);
    // console.log(this.state.shoppingList);
    return (
      <div>
        <ShoppingCart shList={this.state.shoppingList} />
        <br />
        <Card data={airbnbs} changList={this.changShoppingList} />
      </div>
    );
  }
}

export default App;
