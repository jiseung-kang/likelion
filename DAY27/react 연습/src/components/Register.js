import { useState } from "react";

export const Input = () => {
  const [value, setValue] = useState("");
  // Input에는 값이 바뀐다
  // Input의 value가 바뀐다
  // React에서 '바뀌는 값' 을 나타낼 때 State 라는 걸 사용
  const handleChange = (e) => {
    // DOM에서 Event를 생성하면 Event 객체가 생성
    // Event 객체에서는 해당 이벤트가 발생할 때 필요한 정보들이 담겨져 있음.
    setValue(e.target.value);
  };

  return <input type="text" value={value} onChange={handleChange} />;
};

export const Register = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  // 바뀌는 값

  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      {id && <div>{id}</div>}
      <div>
        <label htmlFor="id">아이디</label>
        <input type="text" id="id" value={id} onChange={handleIdChange} />
      </div>
      <div>
        <label htmlFor="pwd">비밀번호</label>
        <input
          type="password"
          id="pwd"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <button type="submit">회원가입</button>
    </form>
  );
};
