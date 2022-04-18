import { useState, useEffect } from "react";
import Comment from "../Comment/Comment";
import MainRight from "../MainRight/MainRight";

import "./Feed.scss";

const Feed = () => {
  const [inputCom, setInputCom] = useState("");
  const [commentArr, setCommentArr] = useState([]);

  function addComment(e) {
    e.preventDefault();
    const newArr = [...commentArr];
    if (inputCom.length > 0) {
      newArr.push({
        id: Date.now(),
        userName: "love_Rumi",
        content: inputCom,
      });
      setCommentArr(newArr);
      setInputCom("");
    }
  }

  useEffect(() => {
    fetch("http://localhost:3000/data/common/commentData.json", {
      method: "GET", // GET method는 기본값이라서 생략이 가능합니다.
    }) // 예시코드에서는 이해를 돕기 위해 명시적으로 기입해뒀습니다.
      .then(res => res.json())
      .then(data => {
        setCommentArr(data);
      });
  }, []);

  return (
    <main>
      <article className="feeds">
        <div className="feedIdProfile">
          <img
            className="feedIdPhoto"
            src="https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
          />
          <span className="feedIdName">Rumi_xoxo</span>
          <img
            className="dot_icon"
            src="https://cdn-icons-png.flaticon.com/512/512/512142.png"
          />
        </div>
        <img
          className="feedPhoto"
          src="https://images.unsplash.com/photo-1649038578950-1a7087c87a8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2235&q=80"
        />
        <div className="feed_icons">
          <img
            className="heart_icon"
            src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png"
          />
          <img
            className="bubble_icon"
            src="https://cdn-icons-png.flaticon.com/512/2462/2462719.png"
          />
          <img
            className="download_icon"
            src="https://cdn-icons-png.flaticon.com/512/747/747416.png"
          />
          <img
            className="save_icon"
            src="https://cdn-icons-png.flaticon.com/512/84/84510.png"
          />
        </div>
        <div className="like_token">
          <img
            className="like_token_profile"
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
        <Comment arr={commentArr} />
        <form className="comment_form">
          <input
            type="text"
            className="comment_input"
            placeholder="댓글 달기..."
            value={inputCom}
            onChange={e => setInputCom(e.target.value)}
          />
          <button type="submit" className="comment_btn" onClick={addComment}>
            게시
          </button>
        </form>
      </article>
      <MainRight />
    </main>
  );
};

export default Feed;
