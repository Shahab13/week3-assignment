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
      totalx: 0,
      shoppingList: []
    };
    this.setState = this.state.shoppingList.push.bind(this);
  }

  changShoppingList = temp => {
    let y = 0;
    this.setState(
      {
        shoppingList: this.state.shoppingList.push(temp)
        //total: 13
        // totalx: this.state.shoppingList.map(x => {
        //   return (y += x.payment["cost"]);
        // })
      },

      console.log(`y: ${y}------total: ${this.state.totalx}xxx`)
    );

    this.forceUpdate();
  };

  removeShoppingList = i => {
    let y = 0;
    this.setState({
      shoppingList: this.state.shoppingList.splice(i, 1)
    });
    console.log(`y: ${y}------total: ${this.state.totalx}`);
    //this.calcTotal();
    this.forceUpdate();
  };

  render() {
    let zz = 0;
    return (
      <div>
        <ShoppingCart
          shList={this.state.shoppingList}
          removeList={this.removeShoppingList}
          totalx={this.state.shoppingList.map(x => {
            return (zz += parseInt(x.payment["cost"]));
          })}
        />
        <br />
        <Card
          data={airbnbs}
          changList={this.changShoppingList}
          totalx={this.state.shoppingList.map(x => {
            return (zz += x.payment["cost"]);
          })}
        />
      </div>
    );
  }
}

export default App;
