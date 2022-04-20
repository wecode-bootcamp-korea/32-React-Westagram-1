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
    inputPw.length >= 8 && inputId.includes("@")
      ? btnChange(false, true)
      : btnChange(true, false);
  };

  const navigate = useNavigate();

  const onSubmit = e => {
    e.preventDefault();

    fetch("http://10.58.1.245:8000/users/signin", {
      method: "POST",
      body: JSON.stringify({
        email: inputId,
        password: inputPw,
      }),
    })
      .then(response => response.json())
      .then(json => {
        if (json.message === "SUCCESS") {
          navigate("/main-hyunsuk");
          localStorage.setItem("token", json.access_token);
        } else {
          alert("틀렸습니다");
        }
      });
  };

  return (
    <div className="Login">
      <div className="LoginWrapper">
        <h1>Westagram</h1>
        <div className="loginDiv">
          <form action="#" onKeyUp={valueCheck} onSubmit={onSubmit}>
            <input
              required
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              name="email"
              onChange={handleInputId}
            />
            <input
              required
              type="password"
              placeholder="비밀번호"
              name="passWord"
              onChange={handleInputPw}
            />
            <button
              className={bgColor ? "btnOn" : "btnOff"}
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
