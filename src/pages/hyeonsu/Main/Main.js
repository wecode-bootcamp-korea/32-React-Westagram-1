import React from "react";
import Nav from "../../../components/Nav/Nav";
import Feed from "./Feed/Feed";
import Aside from "./Aside/Aside";
import "./Main.scss";
import NavHyeonsu from "./NavHyeonsu/NavHyeonsu";

const Main = () => {
  return (
    <>
      <Nav />
      <NavHyeonsu />
      <div className="wrapper">
        <Feed />
        <Aside />
      </div>
    </>
  );
};

export default Main;
