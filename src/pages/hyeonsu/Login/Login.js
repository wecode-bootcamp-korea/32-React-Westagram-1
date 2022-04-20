import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  const [isButtonValid, setIsButtonValid] = useState(false);
  const [passwordInputType, setPasswordInputType] = useState("password");
  const [pwShowButtonText, setPwShowButtonText] = useState("비밀번호 표시");
  const [crudentials, setCrudentials] = useState({
    id: "",
    password: "",
  });
  const { id, password } = crudentials;

  const handleChange = e => {
    const { name, value } = e.target;

    setCrudentials(prev => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const onPwShowButtonClick = () => {
    if (passwordInputType === "password") {
      setPasswordInputType("text");
      setPwShowButtonText("숨기기");
    } else {
      setPasswordInputType("password");
      setPwShowButtonText("비밀번호 표시");
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    const isIdValid = id.includes("@");
    const isPwValid = password.length >= 8;

    setIsButtonValid(isIdValid && isPwValid);
  }, [id, password]);

  const onSubmit = e => {
    e.preventDefault();

    fetch("http://10.58.1.245:8000/users/signin", {
      method: "POST",
      body: JSON.stringify({
        email: id,
        password: password,
      }),
    })
      .then(response => response.json())
      .then(json => {
        if (json.message === "SUCCESS") {
          localStorage.setItem("token", json.access_token);
          navigate("/main-hyeonsu");
        } else {
          alert("일치하지 않는 정보입니다!");
        }
      });
  };

  return (
    <div className="login">
      <h1 className="login-title">westagram</h1>
      <form action="#" className="login-inputs" onSubmit={onSubmit}>
        <input
          className="login-input input-id"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          name="id"
          value={id}
          onChange={handleChange}
        />
        <div className="login-input-wrapper">
          <input
            className="login-input input-pw"
            type={passwordInputType}
            placeholder="비밀번호"
            name="password"
            value={password}
            onChange={handleChange}
          />
          <button
            type="button"
            onClick={onPwShowButtonClick}
            className="pw-show-button"
          >
            {pwShowButtonText}
          </button>
        </div>

        <button
          className="login-button"
          type="submit"
          disabled={!isButtonValid}
        >
          로그인
        </button>
      </form>
      <a className="login-link" href="/">
        비밀번호를 잊으셨나요?
      </a>
    </div>
  );
};

export default Login;
