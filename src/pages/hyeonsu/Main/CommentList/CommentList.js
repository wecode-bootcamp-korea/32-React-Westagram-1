import React from "react";
import "./CommentList.scss";

function CommentList({
  comments,
  onDeleteButtonClick,
  onCommentLikeButtonClick,
}) {
  const postCommentItem = comments.map(commentItem => {
    return (
      <li key={commentItem.id} className="post-comment-item">
        <div className="post-comment-item-left">
          <a href="#">
            <strong className="user-id">{commentItem.userId}</strong>
          </a>
          <span className="post-comment-content">{commentItem.content}</span>
        </div>
        <div className="post-comment-item-right">
          <button
            className={`button-heart ${commentItem.liked && "liked"}`}
            aria-label="like this comment"
            onClick={() => onCommentLikeButtonClick(commentItem.id)}
            type="button"
          >
            <i
              className={`fa-heart ${
                commentItem.liked ? "fa-solid" : "fa-regular"
              }`}
            />
          </button>
          <button
            className="button-delete"
            aria-label="delete this comment"
            onClick={() => onDeleteButtonClick(commentItem.id)}
          >
            <strong className="button-delete-strong">삭제</strong>
          </button>
        </div>
      </li>
    );
  });

  return <ul className="post-comment-list">{postCommentItem}</ul>;
}

export default CommentList;
