import { useState, useEffect, React } from "react";
import Comment from "../Comment/Comment";

const Comments = () => {
  const [inputCom, setInputCom] = useState("");
  const [commentArr, setCommentArr] = useState([]);

  function addComment(e) {
    e.preventDefault();
    const newArr = [...commentArr];
    if (inputCom.length > 0) {
      newArr.push({
        id: 1,
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
    <>
      {" "}
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
    </>
  );
};

export default Comments;
