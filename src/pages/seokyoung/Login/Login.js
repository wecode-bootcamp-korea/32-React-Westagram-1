import "../Login/Login.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate("/main-seokyoung");
  };

  const [values, setValues] = useState({ text: "", password: "" });

  const checkIdPw = e => {
    setValues({ ...values, [e.target.type]: e.target.value });
  };

  const active = values.text.includes("@") && values.password.length >= 8;

  const signUp = () => {
    fetch("http://10.58.1.201:8000/users/signin", {
      method: "POST",
      body: JSON.stringify({
        email: values.text,
        password: values.password,
      }),
    })
      .then(res => res.json())
      .then(result => {
        result.message === "SUCCESS"
          ? localStorage.setItem("token", result.access_token)
          : alert("nop");
      });
  };

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
            onClick={signUp}
            // onClick={goToMain}
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
