import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Login.scss";

const Login = () => {
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");

  const [disabled, setDisabled] = useState(true);
  const [bgColor, setBgColor] = useState(false);

  const handleInputId = event => {
    setInputId(event.target.value);
  };

  const handleInputPw = event => {
    setInputPw(event.target.value);
  };

  const btnChange = (boolean, color) => {
    setDisabled(boolean);
    setBgColor(color);
  };

  const valueCheck = () => {
    inputPw.length >= 5 && inputId.includes("@")
      ? btnChange(false, true)
      : btnChange(true, false);
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
          <form action="#" onKeyUp={valueCheck}>
            <input
              className="userName"
              required
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              id="id"
              onChange={handleInputId}
            />
            <input
              className="userPw"
              required
              type="password"
              placeholder="비밀번호"
              id="password"
              onChange={handleInputPw}
            />
            <button
              className={bgColor ? "btnOn" : "btnOff"}
              id="button"
              onClick={moveToMain}
              disabled={disabled}
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
