import React, { useState } from "react";
import About from "./stylePractice/About";
import Product from "./stylePractice/Product";
import Contact from "./stylePractice/Contact"

const ContentsContainer = ({menu}) => {
  if (menu === "about") {
    return <About />
  }
  else if (menu === "product") {
    return <Product />
  }
  else if (menu === "review") {
    return <Contact />
  }
}

const MenuNav = () => {
  const [menu, setMenu] = useState("about");

  const HandleOnClick = (e) => {
    setMenu(e.target.id);
  }

  return(
    <div>
      <ul>
        <li id="about" onClick={HandleOnClick}>about</li>
        <li id="product" onClick={HandleOnClick}>product</li>
        <li id="contact" onClick={HandleOnClick}>contact</li>
      </ul>

      <ContentsContainer menu={menu} />
    </div>
  )
}

export default MenuNav