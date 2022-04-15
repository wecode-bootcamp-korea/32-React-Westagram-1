import React from "react";
import Nav from "../../../components/Nav/Nav";
import Feed from "./Feed/Feed";
import Aside from "./Aside/Aside";
import "./Main.scss";

const Main = () => {
  return (
    <>
      <Nav />
      <div className="wrapper">
        <Feed />
        <Aside />
      </div>
    </>
  );
};

export default Main;
