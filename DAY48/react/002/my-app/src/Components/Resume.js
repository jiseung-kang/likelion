import React from "react";
import Hello from "./Hello";

function Resume(props){
    return (
      <div className="resume">
        <h1>{props.name} 자기소개서</h1>
        <Hello name={props.name}/>
        <h2>취미 : {props.hobby}</h2>
        <h2>좋아하는 음식 : {props.food}</h2>
        <h2>색깔 : <span style={{color:props.color}}>{props.color}</span></h2>
      </div>
    )

}

export default Resume;