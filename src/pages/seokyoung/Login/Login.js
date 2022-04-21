import "../Login/Login.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [userInfo, setUserInfo] = useState({ inputId: "", inputPass: "" });
  const [isShowPw, setIsShowPw] = useState(true);

  const isBtnActive =
    userInfo.text.includes("@") && userInfo.password.length >= 8;

  const navigate = useNavigate();

  const showPwBtn = () => {
    setIsShowPw(isShowPw => !isShowPw);
  };

  const checkIdPw = e => {
    setUserInfo({ ...userInfo, [e.target.id]: e.target.value });
  };

  const goToMain = () => {
    navigate("/main-seokyoung");
  };

  const postUserData = () => {
    fetch("", {
      method: "POST",
      body: JSON.stringify({
        email: userInfo.text,
        password: userInfo.password,
      }),
    })
      .then(res => res.json())
      .then(result => {
        result.message === "SUCCESS"
          ? localStorage.setItem("token", result.access_token)
          : alert("nop");
      });
    goToMain();
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
              type={isShowPw ? "password" : "text"}
              placeholder="비밀번호"
            />
            <button type="button" onClick={showPwBtn}>
              {isShowPw ? "비밀번호 보기" : "숨기기"}
            </button>
          </form>
          <input
            id="loginBtn"
            className={!isBtnActive ? "loginBtn" : "activeLogin"}
            type="button"
            value="로그인"
            disabled={!isBtnActive}
            onClick={postUserData}
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
