// import React, { useState, useRef } from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   const emailInput = useRef(null); // email input에 대한 useRef
//   const pwInput = useRef(null); // pw input에 대한 useRef
//   const [emailValue, setEmailValue] = useState('')
//   const [pwValue, setPwValue] = useState('')
//   const inputCheck = (e) => {
//     e.preventDefault();
//     if (emailInput.current.value === '') {
//       alert('이메일을 입력하세요.')
//       emailInput.current.focus();
//       return
//     } else if (pwInput.current.value === '') {
//       alert('비밀번호를 입력하세요.')
//       pwInput.current.focus();
//       return
//     }
//     setEmailValue(emailInput.current.value)
//     setPwValue(pwInput.current.value)
//   }

//   const scrollBox = useRef(null)

//   const scrollToTop = (e) => {
//     console.log(scrollBox.current.offsetHeight);
//     scrollBox.current.scrollTop = 0;
//   }


//   return (
//     <div ref={scrollBox} style={{height: '400px', overflow: 'scroll'}}>
//       <form style={{display: 'flex', flexDirection: 'column', height: '3000px'}}>
//         <label>
//           이메일 : <input type="email" ref={emailInput} />
//         </label>
//         <label>
//           비밀번호 : <input type="password" ref={pwInput}/>
//         </label>
  
//         <button type="submit" style={{ width: "100px" }} onClick={inputCheck}>
//           로그인
//         </button>
//         <span>입력한 이메일 : {emailValue}</span>
//         <span>입력한 비밀번호 : {pwValue}</span>
//       </form>
//       <button onClick={scrollToTop}>위로</button>
//     </div>
//   );
// }

// export default App;

// import { useState, useRef, useMemo } from "react";

// const App = () => {
//   const inputName = useRef(null);
//   const inputId = useRef(null);
//   const [userInfo, setUserInfo] = useState([]);
//   const [name, setName] = useState("");
//   const [id, setId] = useState("");

//   const getNum = (li) => {
//     console.log("렌더링");
//     return li.length;
//   };

//   const n = useMemo(() => getNum(userInfo), [userInfo]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newInfo = [...userInfo, { name: name, id: id }];
//     inputName.current.value = "";
//     inputId.current.value = "";
//     inputName.current.focus();
//     setUserInfo(newInfo); // onSubmit 이벤트가 발생될 때마다 상태값 변경됨
//     console.log("렌더링-3");
//   };

//   const handleInputName = (e) => {
//     setName(e.target.value); // onChange 이벤트가 발생될 때마다 상태값 변경됨
//     console.log("렌더링-1");
//   };

//   const handleInputId = (e) => {
//     setId(e.target.value); // onChange 이벤트가 발생될 때마다 상태값 변경됨
//     console.log("렌더링-2");
//   };

//   return (
//     <>
//       <form>
//         <input
//           type="text"
//           placeholder="이름을 입력하세요"
//           onChange={handleInputName}
//           ref={inputName}
//         />
//         <input
//           type="text"
//           placeholder="아이디를 입력하세요"
//           onChange={handleInputId}
//           ref={inputId}
//         />
//         <button type="submit" onClick={handleSubmit}>
//           버튼
//         </button>
//       </form>
//       <ul>
//         {userInfo.map((value, index) => (
//           <li key={index}>
//             <h3>{value.name}</h3>
//             <strong>@{value.id}</strong>
//           </li>
//         ))}
//       </ul>
//       <span>{n}</span>
//     </>
//   );
// };

// export default App;

// import React from "react";

// const App = () => {
//   return (
//     <HelloLicat value={{ name: "gary", id: "garyIsFree" }} />
//   );
// };

// const HelloLicat = (props) => {
//   const id = props.value.id;
//   const name = props.value.name;
//   return (
//     <div>
//       <h2>{id}</h2>
//       <strong>{name}</strong>
//       <HelloLicatTwo value={{ id, name}}/>
//     </div>
//   );
// };

// const HelloLicatTwo = (props) => {
//   const id = props.value.id;
//   const name = props.value.name;
//   return (
//     <div>
//       <h2>Two : {id}</h2>
//       <strong>Two : {name}</strong>
//     </div>
//   );
// };

// export default App;


// import React, { createContext } from "react";
// import ReactDOM from "react-dom";

// const UserInfo = createContext({ name: "gary", id: "garyIsFree" });

// const App = () => {
//   return (
//     <HelloLicat/>
//   );
// };

// const HelloLicat = () => {
//   return (
//     <UserInfo.Consumer>
//       {(value) => (
//         <div>
//           <input type="text" />
//           <h2>{value.name}</h2>
//           <strong>{`@ ${value.id}`}</strong>
//         </div>
//       )}
//     </UserInfo.Consumer>
//   );
// };

// export default App;

import { useContext, createContext } from "react";

const UserInfo = createContext({ name: "gary", id: "garyIsFree" });

const App = () => {
  return (
    <HelloLicat/>
  );
};

// const HelloLicat = () => {
//   return (
//     <UserInfo.Consumer>
//       {(value) => (
//         <div>
//           <input type="text" />
//           <h2>{value.name}</h2>
//           <strong>{`@ ${value.id}`}</strong>
//         </div>
//       )}
//     </UserInfo.Consumer>
//   );
// };

const HelloLicat = () => {
  const { name, id } = useContext(UserInfo);
  return (
    <div>
      <h2>{name}</h2>
      <strong>{id}</strong>
      <HelloLicatTwo/>
    </div>
  );
};

const HelloLicatTwo = () => {
  const { name, id } = useContext(UserInfo);
  return (
    <div>
      <h2>{name}</h2>
      <strong>{id}</strong>
    </div>
  );
};

export default App;