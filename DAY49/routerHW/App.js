import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import UserPage from "./Components/UserPage";
import Products from "./Components/Products";
import Cart from "./Components/Cart";
import Home from "./Components/Home";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/cart" component={Cart} />
        <Route path="/users" children={UserPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
