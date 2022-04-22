import React from "react";
import CommentItem from "../CommentItem/CommentItem";
import "./CommentList.scss";

const CommentList = ({
  comments,
  onDeleteButtonClick,
  onCommentLikeButtonClick,
}) => {
  const postCommentItems = comments.map(commentItem => {
    return (
      <CommentItem
        key={commentItem.id}
        item={commentItem}
        onDeleteButtonClick={onDeleteButtonClick}
        onCommentLikeButtonClick={onCommentLikeButtonClick}
      />
    );
  });

  return <ul className="post-comment-list">{postCommentItems}</ul>;
};

export default CommentList;
