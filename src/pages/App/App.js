import React from "react";
import { Link } from "react-router-dom";

import "./App.scss";

function App() {
  return (
    <ul className="link-list">
      <li className="link-item">
        <div>
          <ul className="page-list">
            <li className="page-title">
              <h1>Hayoung</h1>
            </li>
            <li className="page-item">
              <Link to="/login-hayoung">Login</Link>
            </li>
            <li className="page-item">
              <Link to="/main-hayoung">Main</Link>
            </li>
          </ul>
        </div>
      </li>

      <li className="link-item">
        <div>
          <ul className="page-list">
            <li className="page-title">
              <h1>Seokyoung</h1>
            </li>
            <li className="page-item">
              <Link to="/login-seokyoung">Login</Link>
            </li>
            <li className="page-item">
              <Link to="/main-seokyoung">Main</Link>
            </li>
          </ul>
        </div>
      </li>

      <li className="link-item">
        <div>
          <ul className="page-list">
            <li className="page-title">
              <h1>Hyeonsu</h1>
            </li>
            <li className="page-item">
              <Link to="/login-hyeonsu">Login</Link>
            </li>
            <li className="page-item">
              <Link to="/main-hyeonsu">Main</Link>
            </li>
          </ul>
        </div>
      </li>

      <li className="link-item">
        <div>
          <ul className="page-list">
            <li className="page-title">
              <h1>Hyunsuk</h1>
            </li>
            <li className="page-item">
              <Link to="/login-hyunsuk">Login</Link>
            </li>
            <li className="page-item">
              <Link to="/main-hyunsuk">Main</Link>
            </li>
          </ul>
        </div>
      </li>

      <li className="link-item">
        <div>
          <ul className="page-list">
            <li className="page-title">
              <h1>Kyusung</h1>
            </li>
            <li className="page-item">
              <Link to="/login-kyusung">Login</Link>
            </li>
            <li className="page-item">
              <Link to="/main-kyusung">Main</Link>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  );
}

export default App;
