import React, { useEffect, useState } from "react";

import Comment from "../Comment/Comment";
import "./Feed.css";

const Feed = ({ array, setComment, comment, click }) => {
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
            <img src={data.img} alt="profile" />
            <span>{data.userName}</span>
          </div>
          <div>
            <i className="fa-solid fa-ellipsis" />
          </div>
        </div>

        <div className="main-header-img-div">
          <img src={data.mainImg} alt="" />
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
              <img src={data.img} alt="profile" />
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
            <Comment array={array} />
          </div>

          <form id="reply-form" className="reply">
            <input
              id="reply-input"
              placeholder="댓글 달기..."
              onChange={e => {
                setComment(e.target.value);
              }}
              value={comment}
            />
            <button id="reply-button" onClick={click}>
              게시
            </button>
          </form>
        </div>
      </article>
    );
  });
};
export default Feed;
