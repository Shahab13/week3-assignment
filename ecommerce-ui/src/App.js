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
    if (this.state.shoppingList.includes(temp)) {
      alert("You already have this rental in your cart!");
    } else {
      this.setState(
        {
          shoppingList: this.state.shoppingList.push(temp)
        }

        // console.log(`y: ${y}------total: ${this.state.totalx}xxx`)
      );
    }

    this.forceUpdate();
  };

  removeShoppingList = i => {
    this.setState({
      shoppingList: this.state.shoppingList.splice(i, 1)
    });
    //console.log(`y: ${y}------total: ${this.state.totalx}`);
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
