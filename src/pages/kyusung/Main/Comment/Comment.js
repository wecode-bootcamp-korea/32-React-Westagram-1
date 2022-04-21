import "./Comment.scss";

function Comment({ commentList, handleDelete, changeIconHandler }) {
  const postComment = commentList.map(commentItem => {
    return (
      <li key={commentItem.id}>
        <span>{commentItem.userName}</span>
        <p>{commentItem.content}</p>
        <div className="comments-right-info">
          <button
            className="deleteComments"
            onClick={() => handleDelete(commentItem.id)}
          >
            삭제
          </button>
          <i
            className={`${
              commentItem.isLiked ? "fa-solid" : "fa-regular"
            } fa-heart`}
            onClick={() => changeIconHandler(commentItem.id)}
          />
        </div>
      </li>
    );
  });
  return <ul className="comments">{postComment}</ul>;
}

export default Comment;
