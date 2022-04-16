import React from "react";
import "./Comment.scss";

function Comment({ commentList, handleDelete, changeIconHandler }) {
  const postComment = commentList.map((commentItem, commentIndex) => {
    return (
      <li key={commentIndex}>
        <span>{commentItem.userId}</span>
        <p>{commentItem.comment}</p>
        <div className="comments-right-info">
          <button
            className="deleteComments"
            onClick={() => handleDelete(commentIndex)}
          >
            삭제
          </button>
          <i
            className={`${
              commentItem.heart ? "fa-solid" : "fa-regular"
            } fa-heart`}
            onClick={() => changeIconHandler(commentIndex)}
          />
        </div>
      </li>
    );
  });
  return <ul className="comments">{postComment}</ul>;
}

export default Comment;
