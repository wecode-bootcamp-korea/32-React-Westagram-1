import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

const Login = props => {
  // const [bgColor, setBgColor] = useState({ backgroundColor: "#c0dffd" });
  // const [disabled, setDisabled] = useState(true);
  // const btnOnAndOff = () => {
  //   if (inputId && inputPw) {
  //     setDisabled(false);
  //     setBgColor({ backgroundColor: "blue" });
  //   }
  // };
  const [inputId, setInputId] = useState();
  const [inputPw, setInputPw] = useState();
  const handleInput = event => {
    setInputId(event.target.value);
    setInputPw(event.target.value);
  };

  const navigate = useNavigate();
  const moveToMain = () => {
    navigate("/main-hyunsuk");
  };

  return (
    <div className="Login">
      <div className="LoginWrapper">
        <h1>Westagram</h1>
        <div className="loginDiv">
          <form action="#">
            <input
              className="userName"
              required
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              id="id"
              // onChange={e => {
              //   setInputId(e.target.value);
              //   btnOnAndOff();
              // }}
              onChange={handleInput}
            />
            <input
              className="userPw"
              required
              type="password"
              placeholder="비밀번호"
              id="password"
              // onChange={e => {
              //   setInputPw(e.target.value);
              //   btnOnAndOff();
              // }}
              onChange={handleInput}
            />
            <button
              id="button"
              onClick={moveToMain}
              // style={bgColor}
              disabled
            >
              로그인
            </button>
            <a href="#">비밀번호를 잊으셨나요?</a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
