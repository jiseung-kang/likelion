import React from "react";
import { connect, useDispatch } from "react-redux";
import store, { setInputValue } from "./store";

function Four() {
  const {quantity} = store.getState()
  
  return(
    <div>
      {/* <h1>Four</h1> */}
      <p>{quantity}</p>
    </div>
  )
}

// function Three() {
//   return(
//     <div>
//       <h1>Three</h1>
//       <Four/>
//     </div>
//   )
// }

// function Two() {
//   return(
//     <div>
//       <h1>Two</h1>
//       <Three/>
//     </div>
//   )
// }


// function One() {
//   return(
//     <div>
//       <h1>One</h1>
//       <Two/>
//     </div>
//   )
// }

function Input() {
  const dispatch = useDispatch()
  return(
    <div>
      <input id="test" type="text"/>
      <button onClick={()=>{
        dispatch(setInputValue())
        }
        }>눌러!</button>
    </div>
  )
}

const App = () => {
  return (
    <div>
      {/* <One/> */}
      <Four />
      <Input/>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("mapStateToProps", state)
  return { quantity: state };
}

// const mapDisPatchToProps = (dispatch) => {
//   console.log("mapDisPatchToProps", dispatch)
//   return {
//     // getInputValue: (text) => dispatch(getInputValue(text)),
//   };
// }

export default connect(mapStateToProps)(App);