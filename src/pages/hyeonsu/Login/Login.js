import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

function Login() {
  const [isButtonValid, setIsButtonValid] = useState(false);
  const [crudentials, setCrudentials] = useState({
    id: "",
    password: "",
  });
  const { id, password } = crudentials;

  const handleChange = e => {
    setCrudentials(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });

    checkValidation();
  };

  const checkValidation = () => {
    const isIdValid = id.includes("@");
    const isPwValid = password.length >= 5;

    setIsButtonValid(isIdValid && isPwValid);
  };

  const navigate = useNavigate();
  const handleSubmit = e => {
    e.preventDefault();

    const isIdCorrect = id === "test@test.com";
    const isPwCorrect = password === "asdf1234";

    isIdCorrect && isPwCorrect
      ? navigate("/main-hyeonsu")
      : alert("회원정보가 일치하지 않습니다!");
  };

  return (
    <div className="login">
      <h1 className="login-title">westagram</h1>
      <form
        action="#"
        className="login-inputs"
        onKeyUp={handleChange}
        onSubmit={handleSubmit}
      >
        <input
          className="login-input input-id"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          name="id"
          value={id}
          onChange={handleChange}
        />
        <input
          className="login-input input-pw"
          type="password"
          placeholder="비밀번호"
          name="password"
          value={password}
          onChange={handleChange}
        />

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
}

export default Login;
