import { useEffect, useState } from "react";
import "./Main.scss";
import Nav from "../../../components/Nav/Nav";
import Aside from "./Aside/Aside";
import Feed from "./Feed/Feed";
const Main = () => {
  const [feedList, setFeedList] = useState([]);

  useEffect(() => {
    fetch("data/kyusung/feedData.json", {
      method: "GET",
    })
      .then(res => res.json())
      .then(data => {
        setFeedList(data);
      });
  }, []);
  return (
    <>
      <Nav />
      <section>
        <div className="mainPage">
          <div className="feeds">
            {feedList.map((data, i) => {
              const feedPosts = feedList[i];
              return <Feed key={feedPosts.id} feedPosts={feedPosts} />;
            })}
          </div>
          <Aside />
        </div>
      </section>
    </>
  );
};

export default Main;
