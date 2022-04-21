import { useState } from "react";

function PostFeed({ data, addComment }) {
  const [putUserComment, setUserComment] = useState({
    userName: "",
    content: "",
  });
  const { userName, content } = putUserComment;

  const putUserCommentHandler = e => {
    e.preventDefault();
    const { name, value } = e.target;

    setUserComment(prev => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <form
      id="instaForm"
      onSubmit={e => {
        addComment(e, data.id, putUserComment);
      }}
    >
      <input
        name="userName"
        type="text"
        placeholder="사용자 아이디를 입력하세요!"
        value={userName}
        onChange={putUserCommentHandler}
      />
      <input
        name="content"
        type="text"
        placeholder="댓글 달기!"
        value={content}
        onChange={putUserCommentHandler}
      />
      <button id="submit" type="submit">
        제출
      </button>
    </form>
  );
}

export default PostFeed;
