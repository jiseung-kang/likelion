// import styled from "styled-components";

// const CardDiv = styled.div`
//   padding: 20px;
//   border-radius: 10px;
//   border: 1px solid #c4c4c4;
//   margin-bottom: 20px;
//   width: ${(props) => (props.className === "setting" ? "200px" : "400px")};
// `;


// const Card = (props) => {
//   return (
//     <CardDiv className={props.className}>
//       <h3>{props.value}</h3>
//       <hr />
//       <div>{props.children}</div>
//     </CardDiv>
//   );
// };
// const SettingCard = () => {
//   return (
//     <>
//       <button>초기화</button>
//       <button>저장하기</button>
//     </>
//   );
// };
// const ShareCard = () => {
//   return (
//     <>
//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ut
//         eveniet, laudantium, deleniti autem sequi molestias magni quia, aliquam
//         et praesentium nostrum dolores culpa cupiditate unde doloremque labore
//         beatae accusamus.
//       </p>
//       <div>
//         <button>이미지 저장</button>
//         <button>트위터</button>
//         <button>페이스북</button>
//       </div>
//     </>
//   );
// };


// function App() {
//   return (
//     <>
//       <Card className="setting" value="챌린지 설정">
//         <SettingCard />
//       </Card>
//       <Card className="share" value="서비스 공유하기">
//         <ShareCard />
//       </Card>
//     </>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {/* 라우트를 감싸줍니다. */}
      <Route path="/" component={Index}/>
      <Route path="/one" component={One}/>
      <Route path="/two" component={Two}/>
      <Route path="/three" component={Three}/>
    </BrowserRouter>
  );
}

function Index(){
  return <h1>hello world0</h1>
}

function One(){
  return <h1>hello world1</h1>
}

function Two(){
  return <h1>hello world2</h1>
}

function Three(){
  return <h1>hello world3</h1>
}

export default App;