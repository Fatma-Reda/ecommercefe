import React, { Component } from "react";
import "./App.css";

import Login from "./containers/loginform/UserForm";
import Register from "./containers/registerform/UserForm";
import Header from "./containers/header/header";
import Home from "./containers/home/home";
import addProduct from "./containers/addProduct/addProduct";
import ProductDetails from "./containers/product/ProductDetails";

import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products/" exact component={addProduct} />
					<Route path="/products/:id" exact component={ProductDetails} /> 
          <Route path="/register" exact component={Register} />
          <Route path="/users/authenticate" exact component={Login} />
        </Switch>
      </div>
    );
  }
}

export default App;
