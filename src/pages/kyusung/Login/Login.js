import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate("/main-kyusung");
  };

  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const isValid = id.includes("@") && pw.length > 7 ? true : false;

  return (
    <div className="container">
      <div className="main">
        <p className="westagram-title">Westagram</p>
        <div className="login">
          <input
            id="login_id"
            typeof="text"
            placeholder="전화번호,사용자 이름 또는 이메일"
            onChange={e => setId(e.target.value)}
          />
          <input
            type="password"
            id="password"
            placeholder="비밀번호"
            onChange={e => setPw(e.target.value)}
          />
          <button
            id="submit"
            type="submit"
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
