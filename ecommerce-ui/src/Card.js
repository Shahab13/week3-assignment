import React, { Component } from "react";

export default class Card extends Component {
  state = { A: 0, B: [1, 2] };

  handleClick = x => {
    console.log("Hi");

    //this.props.changList = x;
    console.log(this.props.changList);
    //() => this.changShoppingList(this.state.shoppingList)
    console.log(x);

    // this.setState({
    //   A: this.state.A + 1
    // });
    // console.log(this.A);
  };
  render() {
    const divStyle = { position: "relative" };
    const titleStyle = {
      color: "rgb(118, 118, 118)",
      paddingLeft: "5px",
      fontSize: 15
    };
    const buttonStyle = {
      position: "absolute",
      bottom: "5px",
      right: "10px",
      color: "yellow",
      backgroundColor: "green"
    };

    let myData = this.props.data.map((x, i) => {
      return (
        <div className="Card" style={divStyle} key={i}>
          <img src={x["image"]} alt="Oops!" className="MyImage" />
          <span style={titleStyle}>{x["title"]}</span>
          <br />
          <span style={titleStyle}>{x["houseType"]}</span>

          <br />
          <br />
          <span style={{ paddingLeft: "5px" }}>
            Location: {x.location["country"]},{" "}
          </span>
          <span style={{ paddingLeft: "5px" }}>{x.location["city"]}.</span>
          <br />

          <span style={{ paddingLeft: "5px" }}>
            Price: ${x.payment["cost"]}
          </span>
          <br />
          <span style={{ paddingLeft: "5px" }}>{x.payment["description"]}</span>
          <br />
          <button style={buttonStyle} onClick={() => this.props.changList(x)}>
            Add to cart
          </button>
          <br />
          {/* <span style={{ paddingLeft: "5px" }}>
            A= {this.state.A} id={i}
          </span> */}
        </div>
      );
    });

    return <div>{myData}</div>;
  }
}
/************************************** */
