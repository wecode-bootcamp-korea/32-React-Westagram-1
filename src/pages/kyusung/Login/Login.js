import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  const [userInfo, setUserInfo] = useState({
    id: "",
    pw: "",
  });

  const { id, pw } = userInfo;
  const isValid = id.includes("@") && pw.length > 7;
  const navigate = useNavigate();

  const changeIdPwHandler = e => {
    const { name, value } = e.target;

    setUserInfo(prev => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const goToMain = () => {
    //   fetch("http://10.58.0.177:8000/users/signin", {
    //     body: JSON.stringify({
    //       id,
    //       pw,
    //       name: "voyage",
    //       phone_number: "010-0100-0100",
    //     }),
    //   })
    //     .then(response => response.json())
    //     .then(({ message, access_token }) => {
    //       message === "SUCCESS"
    //         ? successLogin(access_token)
    //         : alert("일치하지 않은 정보입니다");
    //     });
    // };
    // const successLogin = accessToken => {
    //   localStorage.setItem("token", accessToken);
    //   navigate("/main-kyusung");
    navigate("/main-kyusung");
  };
  return (
    <div className="container">
      <div className="main">
        <h1 className="westagram-title">Westagram</h1>
        <div className="login">
          <input
            name="id"
            type="text"
            placeholder="전화번호,사용자 이름 또는 이메일"
            onChange={changeIdPwHandler}
          />
          <input
            type="password"
            name="pw"
            placeholder="비밀번호"
            onChange={changeIdPwHandler}
          />
          <button
            id="submit"
            type="button"
            disabled={!isValid}
            onClick={goToMain}
          >
            로그인
          </button>
        </div>
        <div className="bottom">
          <a href="./">비밀번호를 잊으셨나요?</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
