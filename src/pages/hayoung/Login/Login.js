/* eslint-disable */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Login.scss";

const Login = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const [btnChange, setBtnChange] = useState(true);

  const goToMain = () => {
    navigate("/main-hayoung");
  };

  const isValidation = e => {
    const idValue = userId.includes("@");
    const pwValue = userPw.length >= 5;

    idValue && pwValue ? setBtnChange(false) : setBtnChange(true);
  };

  return (
    <div className="login">
      <h1 className="login_logo">Westagram</h1>
      <div className="login_input">
        <input
          type="text"
          className="inputId"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          value={userId}
          onChange={e => setUserId(e.target.value)}
          onKeyUp={isValidation}
        />
        <input
          type="password"
          className="inputPw"
          placeholder="비밀번호"
          value={userPw}
          onChange={e => setUserPw(e.target.value)}
          onKeyUp={isValidation}
        />
        <button
          className={!btnChange ? "active" : "unactive"}
          onClick={goToMain}
          disabled={btnChange}
        >
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
