import { useState } from "react";
import Aside from "../Aside/Aside";
import Comment from "../Comment/Comment";
import "./Feed.scss";

const Feed = () => {
  const [userId, setUserId] = useState("");
  const [comment, setUserComment] = useState("");

  const [commentArray, setCommentArray] = useState([
    { idKey: 0, userId: "Voyage-dev", comment: "피드가 이쁘네요" },
    { idKey: 1, userId: "CHLRBTJD", comment: "강아지가 예뻐요" },
  ]);

  const [idKey, setIdKey] = useState(commentArray.length + 1);

  const handleCommentEnter = e => {
    e.preventDefault();
    if (userId !== "" && comment !== "") {
      setIdKey(idKey + 1);
      const newArr = [...commentArray];
      newArr.push({
        idKey: idKey,
        userId: userId,
        comment: comment,
        heart: false,
      });
      setCommentArray(newArr);
      setUserId("");
      setUserComment("");
    }
  };

  const handleDelete = idKey => {
    // const comments = [...commentArray].filter((item, index) => index !== idKey);
    const comments = [...commentArray].filter(comment => {
      return comment.idKey !== idKey;
    });

    setCommentArray(comments);
  };

  const changeIconHandler = idKey => {
    const onClickHeart = [...commentArray];
    const a = onClickHeart.find(x => x.idKey === idKey);
    a.heart = !a.heart;

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
    <section>
      <div className="mainPage">
        <div className="feeds">
          <article>
            <div className="articleHeader">
              <div className="headerLeft">
                <i className="fa-brands fa-apple fa-2x" />
                <span>Wecode 32기~!</span>
              </div>
              <div className="headerRight">
                <i className="fa-solid fa-ellipsis fa-2x" />
              </div>
            </div>

            <div className="feeds-img">
              <img src="/images/kyusung/westagramPuppy.jpg" alt="my Article" />
            </div>
            <div className="feeds-img-info">
              <div className="feeds-info-img">
                <i className="fa-regular fa-heart" onClick={iconHandler} />
                <i className="fa-regular fa-comment" />
                <i className="fa-regular fa-bookmark" />
              </div>
              <div className="likes">
                <img src="/images/kyusung/me.png" alt="feedLike" />

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
        </div>
        <Aside />
      </div>
    </section>
  );
};
export default Feed;
