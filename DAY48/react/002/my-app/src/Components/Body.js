import React from "react";
import Header from "./Header";
import Main from "./Main"
import Product from "./Product"
import Footer from "./Footer"

class Body extends React.Component{
  render(){
      return(
          <div>
              <h1>body h1이다!</h1>
              <Header/>
              <Main/>
              <Product/>
              <Footer/>
          </div>
      )
  }
}

export default Body;