import React, { Component } from "react";
import ReactDOM from "react-dom";
import Search from "./components/Search";

var products = require("./products.js");

export default Search;
ReactDOM.render(<Search products={products} />, document.getElementById("app"));
