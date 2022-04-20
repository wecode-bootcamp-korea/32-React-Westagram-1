import { useState, useEffect } from "react";
import Comments from "../Comments/Comments";

import "./Feed.scss";

const Feed = () => {
  const [feedList, setFeedList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/data/hayoung/feedData.json", {
      method: "GET",
    })
      .then(res => res.json())
      .then(data => {
        setFeedList(data);
      });
  }, []);

  return feedList.map(data => {
    return (
      <article className="feeds">
        <div className="feedIdProfile">
          <img
            className="feedIdPhoto"
            alt="userPhoto"
            src="https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
          />
          <span className="feedIdName">{data.userName}</span>
          <img
            className="dot_icon"
            alt="dot"
            src="https://cdn-icons-png.flaticon.com/512/512/512142.png"
          />
        </div>
        <img className="feedPhoto" alt="feed photo" src={data.feedImg} />
        <div className="feed_icons">
          <img
            className="heart_icon"
            alt="heart icon"
            src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png"
          />
          <img
            className="bubble_icon"
            alt="bubble icon"
            src="https://cdn-icons-png.flaticon.com/512/2462/2462719.png"
          />
          <img
            className="download_icon"
            alt="download icon"
            src="https://cdn-icons-png.flaticon.com/512/747/747416.png"
          />
          <img
            className="save_icon"
            alt="save icon"
            src="https://cdn-icons-png.flaticon.com/512/84/84510.png"
          />
        </div>
        <div className="like_token">
          <img
            className="like_token_profile"
            alt="like token icon"
            src="https://images.unsplash.com/photo-1606225457115-9b0de873c5db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          />
          <p>
            <strong>jibsa_rumi</strong>님 <strong>외 320명</strong>이 좋아합니다
          </p>
        </div>
        <div className="feed_text">
          <span className="feed_user_id">Rumi_xoxo</span>
          <p>나는 귀엽다 😻</p>
        </div>
        <Comments />
      </article>
    );
  });
};

export default Feed;
