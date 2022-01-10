import React from "react";
import { Link, Route, Switch } from "react-router-dom";

const Coupon = () => {
  return <div>쿠폰페이지</div>;
};

const Question = () => {
  return <div>Q&A페이지</div>;
};
const Notice = () => {
  return <div>공지페이지</div>;
};

const UserMenu = () => {
  return (
    <div>
      <h1>마이페이지</h1>
      <nav>
        <Link to={`/users/coupon`} style={{ margin: "0 5px" }}>
          쿠폰
        </Link>
        <Link to={`/users/question`} style={{ margin: "0 5px" }}>
          Q&A
        </Link>
        <Link to={`/users/notice`} style={{ margin: "0 5px" }}>
          공지사항
        </Link>
      </nav>
    </div>
  );
};

const UserPage = () => {
  return (
    <Switch>
      <Route exact path="/users/">
        <UserMenu />
      </Route>
      <Route exact path="/users/coupon">
        <Coupon />
      </Route>
      <Route exact path="/users/notice">
        <Notice />
      </Route>
      <Route exact path="/users/question">
        <Question />
      </Route>
    </Switch>
  );
};

export default UserPage;
