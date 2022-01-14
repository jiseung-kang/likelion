// import ReactDOM from "react-dom";
// import React, { Component } from "react";

// class ClassComp extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { number: 0 };
//   }

//   componentWillMount() {
// 		//컴포넌트가 생성될때 실행됩니다 (렌더링 되기 이전)
//     console.log("componentWillMount");
//   }

//   componentDidMount() {
// 	//마운트가 완료되고 나서 실행됩니다 (렌더링 이후) 
//     console.log("componentDidMount");
//   }

//   shouldComponentUpdate(nextProps, nextState) {
// 		//상태 업데이트가 되고 컴포넌트가 업데이트 되기 전(렌더되기전) 실행됩니다.
// 		//초기렌더링에서 발생하지 않습니다.
//     console.log("shouldComponentUpdate");
//     return true;
//   }

//   componentWillUpdate(nextProps, nextState) {
// 		//UNSAFE_componentWillUpdate()로 변경됨, 17버전 까지는 사용가능합니다.
// 		//초기렌더링에서 발생하지 않고, 그이후 업데이트가 되고나서 발생
//     console.log("componetWillUpdate");
//   }

//   componentDidUpdate(nextProps, nextState) {
// 		//업데이트가 되고나서 실행됩니다.
//     console.log("componentDidUpdate");
//   }

  

//   handleClick = () => {
//     this.setState((state) => {
//       return {
//         number: state.number + 1,
//       };
//     });
//   };
//   render() {
//     console.log("render");
//     return (
//       <div>
//         <button onClick={this.handleClick}>Click me!</button>
//         <span>{this.state.number}</span>
//       </div>
//     );
//   }
// }

// class App extends Component {
//   render() {
//     return <ClassComp />;
//   }
// }

// ReactDOM.render(<App />, document.getElementById("root"));


import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
// import App from "./App";

function App() {
  const [num, setNum] = useState(0);

  const onClick = () => {
    setNum(num + 1);
  };

  useEffect(() => {  // 1 - useEffect
    console.log("ComponentDidMount");
  }, []); 
 

  useEffect(() => { // 2 - useEffect
    console.log("componentDidUpdate");
    return console.log("componentWillUnmount");
  }, [num]);
  return <button onClick={onClick}>{num}</button>;
}

ReactDOM.render(<App />, document.getElementById("root"));