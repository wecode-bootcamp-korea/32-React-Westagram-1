import React, { useEffect, useState } from "react";

import Comments from "../Comments/Comments";

import "./Feed.scss";

const Feed = () => {
  const [feedList, setFeedList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/data/hyunsuk/feedData.json", {
      method: "GET",
    })
      .then(res => res.json())
      .then(data => setFeedList(data));
  }, []);

  return feedList.map(data => {
    return (
      <article key={data.id} className="first-section-article">
        <div className="main-header-div">
          <div className="first-section-article-pfdiv">
            <img alt={`data of ${data.userName}`} src={data.img} />
            <span>{data.userName}</span>
          </div>
          <div>
            <i className="fa-solid fa-ellipsis" />
          </div>
        </div>

        <div className="main-header-img-div">
          <img alt="profile-big" src={data.mainImg} />
        </div>

        <div className="main-header-sub-div">
          <div className="iconlist">
            <div className="iconlist-1">
              <i className="fa-solid fa-heart" />
              <i className="fa-solid fa-comment" />
              <i className="fa-solid fa-comment" />
            </div>
            <div className="iconlist-2">
              <i className="fa-solid fa-bookmark" />
            </div>
          </div>

          <div className="main-header-sub-like-div">
            <div className="first-section-article-pfdiv">
              <img alt="profile-sm" src={data.img} />
              <span>
                {data.userName}
                {data.likeMsg}
              </span>
            </div>
          </div>

          <div className="main-header-sub-comment-div">
            <span>{data.userName}</span>
            <span>{data.uploadMsg}</span>
            <a href="#">더 보기</a>
          </div>

          <div className="main-header-sub-comment-div">
            <span>{data.userName2}</span>
            <span>{data.uploadMsg2}</span>
          </div>

          <div className="time-div">
            <span className="time">{data.timeMsg}</span>
          </div>

          <Comments />
        </div>
      </article>
    );
  });
};
export default Feed;
