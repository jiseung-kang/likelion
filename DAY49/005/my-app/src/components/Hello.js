import React from "react";

const One = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}

const Two = () => {
  return (
    <div>
      <h1>name이 입력된 것이 없습니다.</h1>
    </div>
  )
}

const Hello = (props) => {
  const name = props.name;
  if(name){
    return (
      <One name={name}/>
    )
  }
  else {
    return (
      <Two />
    )
  }
}

// function Hello(props) {
  
// }

export default Hello