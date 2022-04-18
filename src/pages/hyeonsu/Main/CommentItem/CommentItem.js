import React from "react";
import "./CommentItem.scss";

const CommentItem = ({
  item,
  onDeleteButtonClick,
  onCommentLikeButtonClick,
}) => {
  return (
    <li className="post-comment-item">
      <div className="post-comment-item-left">
        <a href="#">
          <strong className="user-id">{item.userName}</strong>
        </a>
        <span className="post-comment-content">{item.content}</span>
      </div>
      <div className="post-comment-item-right">
        <button
          className={`button-heart ${item.isLiked && "liked"}`}
          aria-label="like this comment"
          onClick={() => onCommentLikeButtonClick(item.id)}
          type="button"
        >
          <i
            className={`fa-heart ${item.isLiked ? "fa-solid" : "fa-regular"}`}
          />
        </button>
        <button
          className="button-delete"
          aria-label="delete this comment"
          onClick={() => onDeleteButtonClick(item.id)}
        >
          <strong className="button-delete-strong">삭제</strong>
        </button>
      </div>
    </li>
  );
};

export default CommentItem;
