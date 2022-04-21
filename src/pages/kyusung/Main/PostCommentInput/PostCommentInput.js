import { useState } from "react";

function PostFeed({ data, addComment }) {
  const [userId, setUserId] = useState("");
  const [comment, setComment] = useState("");

  return (
    <>
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
        onChange={e => setComment(e.target.value)}
      />
      <button
        id="submit"
        type="button"
        onClick={() => addComment(data.id, userId, comment)}
      >
        제출
      </button>
    </>
  );
}

export default PostFeed;
