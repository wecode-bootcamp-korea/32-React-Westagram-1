import "../Login/Login.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();
  const goToMain = e => {
    if (!values.text.includes("@")) {
      alert("이메일 형식이 아닙니다.");
    } else if (values.password.length <= 8) {
      alert("비밀번호는 8자리 이상이여야 합니다.");
    } else {
      alert("로그인 성공!");
      navigate("/main-seokyoung");
    }
  };

  const [values, setValues] = useState({ text: "", password: "" });

  const checkIdPw = e => {
    setValues({ ...values, [e.target.type]: e.target.value });
  };

  const active = values.text && values.password;

  return (
    <div className="Login">
      <section className="mainBox">
        <h1 className="logo">westagram</h1>
        <div id="inputBox" className="inputBox">
          <form className="form" onChange={checkIdPw}>
            <input
              id="inputId"
              className="inputUserInfo"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input
              id="inputPass"
              className="inputUserInfo"
              type="password"
              placeholder="비밀번호"
            />
          </form>
          <input
            id="loginBtn"
            className={!active ? "loginBtn" : "activeLogin"}
            type="button"
            value="로그인"
            disabled={!active}
            onClick={goToMain}
          />
        </div>
        <a className="forgotPassword" href="main.html">
          비밀번호를 잊으셨나요?
        </a>
      </section>
    </div>
  );
}

export default Login;
