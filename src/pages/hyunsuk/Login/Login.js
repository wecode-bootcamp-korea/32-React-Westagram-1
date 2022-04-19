import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");

  const [disabled, setDisabled] = useState(true);
  const [changeBgColor, setChangeBgColor] = useState({
    backgroundColor: "#c0dffd",
  });
  const handleInputId = event => {
    setInputId(event.target.value);
  };

  const handleInputPw = event => {
    setInputPw(event.target.value);
  };

  const btnChange = (boolean, color) => {
    setDisabled(boolean);
    setChangeBgColor({ backgroundColor: `${color}` });
  };

  const valueCheck = () => {
    inputPw.length >= 5 && inputId.includes("@")
      ? btnChange(false, "blue")
      : btnChange(true, "#c0dffd");
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
              // onKeyUp={valueCheck}
            />
            <input
              className="userPw"
              required
              type="password"
              placeholder="비밀번호"
              id="password"
              onChange={handleInputPw}
              // onKeyUp={valueCheck}
            />
            <button
              id="button"
              onClick={moveToMain}
              disabled={disabled}
              style={changeBgColor}
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
