import React from "react";
import "./Comment.scss";

function Comment({ commentList, handleDelete, changeIconHandler }) {
  const postComment = commentList.map((commentItem, commentIndex) => {
    return (
      <li key={commentItem.idKey}>
        <span>{commentItem.userId}</span>
        <p>{commentItem.comment}</p>
        <div className="comments-right-info">
          <button
            className="deleteComments"
            onClick={() => handleDelete(commentItem.idKey)}
          >
            삭제
          </button>
          <i
            className={`${
              commentItem.heart ? "fa-solid" : "fa-regular"
            } fa-heart`}
            onClick={() => changeIconHandler(commentItem.idKey)}
          />
        </div>
      </li>
    );
  });
  return <ul className="comments">{postComment}</ul>;
}

export default Comment;
