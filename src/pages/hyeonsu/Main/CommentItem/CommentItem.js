import React from "react";
import "./CommentItem.scss";

const CommentItem = ({
  item,
  onDeleteButtonClick,
  onCommentLikeButtonClick,
}) => {
  const { userName, content, isLiked, id } = item;

  return (
    <li className="post-comment-item">
      <div className="post-comment-item-left">
        <a href="#">
          <strong className="user-id">{userName}</strong>
        </a>
        <span className="post-comment-content">{content}</span>
      </div>
      <div className="post-comment-item-right">
        <button
          className={`button-heart ${isLiked && "liked"}`}
          aria-label="like this comment"
          onClick={() => onCommentLikeButtonClick(id)}
          type="button"
        >
          <i className={`fa-heart ${isLiked ? "fa-solid" : "fa-regular"}`} />
        </button>
        <button
          className="button-delete"
          aria-label="delete this comment"
          onClick={() => onDeleteButtonClick(id)}
        >
          <strong className="button-delete-strong">삭제</strong>
        </button>
      </div>
    </li>
  );
};

export default CommentItem;
