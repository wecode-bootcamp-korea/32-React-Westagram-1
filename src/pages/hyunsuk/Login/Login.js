import React from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

const Login = props => {
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
              required
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              id="id"
            />
            <input
              required
              type="password"
              placeholder="비밀번호"
              id="password"
            />
            <button id="button" onClick={moveToMain}>
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
