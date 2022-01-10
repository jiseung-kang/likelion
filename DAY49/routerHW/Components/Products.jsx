import React from "react";
import { Route, Switch } from "react-router-dom";

const productId = ({ match }) => {
  console.log(match);
  return (
    <>
      <div>path : {match.path}</div>
    </>
  );
};

const ResumeRouter = () => {
  return (
    <Switch>
      <Route path="/products/1" component={productId}></Route>
      <Route path="/products/2" component={productId}></Route>
      <Route path="/products/3" component={productId}></Route>
    </Switch>
  );
};

export default ResumeRouter;
