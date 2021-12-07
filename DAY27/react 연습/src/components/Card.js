import React from "react";

// React Component 들은 함수를 선언할 때 대문자로 시작한다.
// 함수를 활용한 컴포넌트 선언 방법
// 얘는 비교적 최신 문법 (React 16.8 버전부터 본격적으로 사용, 2019년)
export const Card = () => {
  // JSX
  return <div className="hello">Hello World</div>;
};

// Class를 활용한 컴포넌트 선언 방법
// 얘는 좀 OLD 한 방식
export class ClassCard extends React.Component {
  render() {
    return <div className="hello">Hello World</div>;
  }
}
