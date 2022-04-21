import React from "react";
import Nav from "../../../components/Nav/Nav";
import NavHyeonsu from "./NavHyeonsu/NavHyeonsu";
import Feed from "./Feed/Feed";
import Aside from "./Aside/Aside";
import "./Main.scss";

const Main = () => {
  const token = localStorage.getItem("token");

  fetch("http://10.58.1.245:8000/users/tokencheck", {
    method: "POST",
    body: JSON.stringify({
      Authorization: token,
    }),
  })
    .then(res => res.json())
    .then(res => console.log(res));

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
