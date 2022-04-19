import React from "react";
import "./comment.scss";

const Comment = ({ arr }) => {
  return (
    <ul className="comments">
      {arr.map(e => {
        return (
          <li className="comment" key={e.id}>
            <h1 className="commentUserId">{e.userName}</h1>
            <h1 className="userComment">{e.content}</h1>
            <button className="deleteBtn">삭제{e.isLiked}</button>
            <button className="likeBtn">
              <i class="fa-regular fa-heart"></i>
              {e.isLiked}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Comment;
