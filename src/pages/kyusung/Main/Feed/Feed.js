import { useState, useEffect } from "react";
// import Aside from "../Aside/Aside";
import Comment from "../Comment/Comment";
import "./Feed.scss";

const Feed = ({ feedPosts }) => {
  const [userId, setUserId] = useState("");
  const [comment, setUserComment] = useState("");
  const [commentArray, setCommentArray] = useState([]);
  const [idKey, setIdKey] = useState();

  useEffect(() => {
    fetch("data/common/commentData.json", {
      method: "GET",
    })
      .then(res => res.json())
      .then(data => {
        setCommentArray(data);
        setIdKey(data.length + 1);
      });
  }, []);

  const handleCommentEnter = e => {
    e.preventDefault();
    setIdKey(idKey + 1);
    if (userId !== "" && comment !== "") {
      const newArr = [...commentArray];
      newArr.push({
        id: idKey,
        userName: userId,
        content: comment,
        isLiked: false,
      });
      setCommentArray(newArr);
      setUserId("");
      setUserComment("");
    }
  };

  const handleDelete = idKey => {
    const comments = [...commentArray].filter(comment => {
      return comment.id !== idKey;
    });
    setCommentArray(comments);
  };

  const changeIconHandler = idKey => {
    const onClickHeart = [...commentArray];
    const changeHeart = onClickHeart.find(x => x.id === idKey);
    changeHeart.isLiked = !changeHeart.isLiked;

    setCommentArray(onClickHeart);
  };
  const iconHandler = e => {
    if (e.target.className === "fa-regular fa-heart") {
      e.target.className = "fa-solid fa-heart";
    } else if (e.target.className !== "fa-regular fa-heart") {
      e.target.className = "fa-regular fa-heart";
    }
  };

  return (
    <article>
      <div className="articleHeader">
        <div className="headerLeft">
          <img src={feedPosts.userImg} alt="feedUserImg" />
          <span>Wecode 32기~!</span>
        </div>
        <div className="headerRight">
          <i className="fa-solid fa-ellipsis fa-2x" />
        </div>
      </div>

      <div className="feeds-img">
        <img src={feedPosts.feedImg} alt="my Article" />
      </div>
      <div className="feeds-img-info">
        <div className="feeds-info-img">
          <i className="fa-regular fa-heart" onClick={iconHandler} />
          <i className="fa-regular fa-comment" />
          <i className="fa-regular fa-bookmark" />
        </div>
        <div className="likes">
          <img src={feedPosts.userImg} alt="feedLike" />

          <p>
            <span className="author">Voyage_dev</span>님 외
            <span className="countLikes">10</span>명이 좋아합니다
          </p>
        </div>
        <Comment
          commentList={commentArray}
          handleDelete={handleDelete}
          changeIconHandler={changeIconHandler}
        />
      </div>
      <form id="instaForm">
        <input
          id="username"
          type="text"
          placeholder="사용자 아이디를 입력하세요!"
          value={userId}
          onChange={e => setUserId(e.target.value)}
        />
        <input
          id="userComments"
          type="text"
          placeholder="댓글 달기!"
          value={comment}
          onChange={e => setUserComment(e.target.value)}
        />
        <button id="submit" onClick={handleCommentEnter}>
          제출
        </button>
      </form>
    </article>
  );
};

export default Feed;
