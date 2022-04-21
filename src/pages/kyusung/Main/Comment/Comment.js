import "./Comment.scss";

function Comment({ commentList, handleDelete, changeIconHandler, feedListId }) {
  const postComment = commentList.map(({ id, userName, content, isLiked }) => {
    return (
      <li key={id}>
        <span>{userName}</span>
        <p>{content}</p>
        <div className="comments-right-info">
          <button
            className="deleteComments"
            onClick={() => handleDelete(id, feedListId)}
          >
            삭제
          </button>
          <i
            className={`${isLiked ? "fa-solid" : "fa-regular"} fa-heart`}
            onClick={() => changeIconHandler(id, feedListId)}
          />
        </div>
      </li>
    );
  });
  return <ul className="comments">{postComment}</ul>;
}

export default Comment;
