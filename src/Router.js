import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginHayoung from "./pages/hayoung/Login/Login";
import MainHayoung from "./pages/hayoung/Main/Main";

import LoginSeokYoung from "./pages/seokyoung/Login/Login";
import MainSeokYoung from "./pages/seokyoung/Main/Main";

import LoginHyeonsu from "./pages/hyeonsu/Login/Login";
import MainHyeonsu from "./pages/hyeonsu/Main/Main";

import LoginHyunsuk from "./pages/hyunsuk/Login/Login";
import MainHyunsuk from "./pages/hyunsuk/Main/Main";

import LoginKyusung from "./pages/kyusung/Login/Login";
import MainKyusung from "./pages/kyusung/Main/Main";

import App from "./App";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />

        <Route path="/login-hayoung" element={<LoginHayoung />} />
        <Route path="/main-hayoung" element={<MainHayoung />} />

        <Route path="/login-seokyoung" element={<LoginSeokYoung />} />
        <Route path="/main-seokyoung" element={<MainSeokYoung />} />

        <Route path="/login-hyeonsu" element={<LoginHyeonsu />} />
        <Route path="/main-hyeonsu" element={<MainHyeonsu />} />

        <Route path="/login-hyunsuk" element={<LoginHyunsuk />} />
        <Route path="/main-hyunsuk" element={<MainHyunsuk />} />

        <Route path="/login-kyusung" element={<LoginKyusung />} />
        <Route path="/main-kyusung" element={<MainKyusung />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
