import React from "react";
//import React, { Component } from "react";
import "./App.css";
import Card from "./Card";
import airbnbs from "./airbnbs.json";
import ShoppingCart from "./ShoppingCart";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      totalx: 0,
      shoppingList: []
    };
  }

  changShoppingList = temp => {
    if (this.state.shoppingList.includes(temp)) {
      alert("You already have this rental in your cart!");
    } else {
      this.setState(f => {
        return { shoppingList: [...f.shoppingList, temp] };
      });
    }
  };

  removeShoppingList = i => {
    this.setState(prevState => {
      let g = prevState.shoppingList;
      g.splice(i, 1);
      return { shoppingList: g };
    });
  };

  render() {
    let zz = 0;
    return (
      <div>
        <h2>{this.state.a}</h2>
        <ShoppingCart
          shList={this.state.shoppingList}
          removeList={this.removeShoppingList}
          totalx={
            //          this.calcTotal
            this.state.shoppingList.map(x => {
              return (zz += parseInt(x.payment["cost"]));
            })
          }
        />
        <br />
        <Card data={airbnbs} changList={this.changShoppingList} />
      </div>
    );
  }
}

export default App;
