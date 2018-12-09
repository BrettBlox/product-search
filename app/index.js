import React, { Component } from "react";
import ReactDOM from "react-dom";
var products = require("./products.js");
class Result extends Component {
  displayPrice (price) {
    return price / 100.0;
  }

  render() {
    return (
      <div className="in-stock">
        <h2>
          <a href="#">{this.props.product.name}</a>
        </h2>
        <p>{this.displayPrice(this.props.product.price)}</p>
        <p>{this.props.product.description}</p>
      </div>
    );
  }
}

class Results extends Component {
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

class SearchBar extends Component {
  handleQuery(e) {
    this.props.onQuery(e.target.value);
  }
  render() {
    return (
      <div className="search-bar">
        <input onChange={this.handleQuery.bind(this)} placeholder="Search" />
      </div>
    );
  }
}

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };
  }

  handleQuery(query) {
    this.setState({ query: query.toLowerCase().trim() });
  }

  render() {
    return (
      <div className="search">
        <SearchBar onQuery={this.handleQuery.bind(this)} />
        <Results products={this.props.products} query={this.state.query} />
      </div>
    );
  }
}

export default Search;
ReactDOM.render(<Search products={products} />, document.getElementById("app"));
