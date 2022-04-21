import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { email, password } = userInfo;
  const isButtonValid = email.includes("@") && password.length >= 8;

  const handleChange = e => {
    const { name, value } = e.target;

    setUserInfo(prev => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const onPwShowButtonClick = () => {
    setIsShowPassword(isShowPassword => !isShowPassword);
  };

  const successLogin = accessToken => {
    localStorage.setItem("token", accessToken);
    navigate("/main-hyeonsu");
  };

  const postUserInfo = e => {
    e.preventDefault();

    fetch("http://10.58.1.245:8000/users/login", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then(response => response.json())
      .then(({ message, access_token }) =>
        message === "SUCCESS"
          ? successLogin(access_token)
          : alert("일치하지 않는 정보입니다!")
      );
  };

  return (
    <div className="login">
      <h1 className="login-title">westagram</h1>
      <form action="#" className="login-inputs" onSubmit={postUserInfo}>
        <input
          className="login-input input-id"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <div className="login-input-wrapper">
          <input
            className="login-input input-pw"
            type={isShowPassword ? "text" : "password"}
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
            {isShowPassword ? "숨기기" : "비밀번호 표시"}
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
