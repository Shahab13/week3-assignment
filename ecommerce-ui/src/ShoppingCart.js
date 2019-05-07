import React, { Component } from "react";
import logo from "./logo.svg";

export default class ShoppingCart extends Component {
  render() {
    const shoppCard = {
      height: "150px",
      width: "20%",
      backgroundColor: "red",
      border: "1px solid rgb(32, 30, 30)",
      marginLeft: "80px",
      marginTop: "10px",
      marginRight: "20px",
      position: "relative"
    };
    const logoStyle = {
      position: "absolute",
      top: "1px",
      right: "1px",
      color: "yellow"
      //backgroundColor: "green"
    };
    const buttonStyle = {
      position: "absolute",
      bottom: "5px",
      right: "10px",
      color: "red",
      backgroundColor: "yellow"
    };

    const divStyle = { position: "relative" };
    return (
      <div style={divStyle}>
        <div style={shoppCard}>
          <img src={logo} className="App-logo" alt="logo" style={logoStyle} />
          <button style={buttonStyle}>Remove</button>
        </div>
      </div>
    );
  }
}
