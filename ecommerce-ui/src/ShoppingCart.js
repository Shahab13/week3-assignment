import React, { Component } from "react";
//import logo from "./logo.svg";

export default class ShoppingCart extends Component {
  state = { B: 0 };
  render() {
    const shoppCard = {
      height: "400px",
      width: "20%",
      backgroundColor: "white",
      border: "1px solid rgb(32, 30, 30)",
      marginLeft: "10px",
      marginTop: "30px",
      marginRight: "20px",
      position: "relative",
      float: "left"
    };
    /*  const logoStyle = {
      position: "absolute",
      top: "1px",
      right: "1px",
      color: "yellow"
      //backgroundColor: "green"
    };*/
    const buttonStyle = {
      position: "absolute",
      bottom: "8px",
      right: "5px",
      color: "red",
      backgroundColor: "yellow"
    };
    const divStyle = { position: "relative" };

    let shoppingList = this.props.shList.map((x, i) => {
      return (
        <div style={divStyle} key={i}>
          <div style={divStyle}>
            {/*<img src={logo} className="App-logo" alt="logo" style={logoStyle} />*/}
            <img src={x["image"]} alt="Oops!" className="MyRoundImage" />
            <br />

            <span>{x.location["city"]}</span>
            <span> ${x.payment["cost"]}</span>
            <button
              style={buttonStyle}
              onClick={() => this.props.removeList(i)}
            >
              Remove
            </button>
            <hr />
          </div>
          <br />
        </div>
      );
    });

    return (
      <div style={shoppCard}>
        <h2 style={{ color: "red", paddingLeft: "5px" }}>
          Shopping Cart: ${this.props.totalx.pop()}
        </h2>
        <hr />
        <div>{shoppingList}</div>
      </div>
    );
  }
}
