import React from "react";
import { useNavigate } from "react-router-dom";

import "./Login.scss";

const Login = () => {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate("/main-hayoung");
  };

  return (
    <div className="login">
      <h1 className="login_logo">Westagram</h1>
      <div className="login_input">
        <input
          type="text"
          className="inputId"
          placeholder="전화번호, 사용자 이름 또는 이메일"
        />
        <input type="password" className="inputPw" placeholder="비밀번호" />
        <button className="login_btn" onClick={goToMain}>
          로그인
        </button>
      </div>
      <div className="forget_pw">
        <a className="forgetPwLink" href="#">
          비밀번호를 잊으셨나요?
        </a>
      </div>
    </div>
  );
};

export default Login;
