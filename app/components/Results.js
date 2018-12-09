import React, { Component } from "react";
import Result from "./Result";

export default class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foundProducts: props.products
    };
  }
  componentWillReceiveProps(nextProps) {
    let foundProducts = nextProps.products.filter(product => {
      return (
        product.name.toLowerCase().match(nextProps.query.toLowerCase()) ||
        product.description.toLowerCase().match(nextProps.query.toLowerCase())
      );
    });
    this.setState({
      foundProducts: foundProducts
    });
  }

  render() {
    return (
      <div className="results">
        {this.state.foundProducts.map((el, i) => (
          <Result product={el} key={i} />
        ))}
      </div>
    );
  }
}
