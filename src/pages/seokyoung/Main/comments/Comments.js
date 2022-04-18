import React from "react";
import Comment from "../comment/Comment";

function Comments({ commentsList, deleteComment }) {
  return (
    <ul className="commentPostList">
      {commentsList.map(item => (
        <Comment key={item.id} comment={item} deleteFunction={deleteComment} />
      ))}
    </ul>
  );
}

export default Comments;
