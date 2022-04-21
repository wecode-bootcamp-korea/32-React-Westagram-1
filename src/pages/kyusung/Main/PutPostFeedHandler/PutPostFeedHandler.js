import PostCommentInput from "../PostCommentInput/PostCommentInput";
import Comment from "../Comment/Comment";
import "../PutPostFeedHandler/PutPostFeedHandler.scss";

function PutPostFeedHandler({
  feedList,
  addComment,
  changeIconHandler,
  handleDelete,
}) {
  const iconHandler = e => {
    e.target.className = `${
      e.target.className ? "fa-solid" : "fa-regular"
    }fa-heart`;
  };

  return feedList.map(data => {
    return (
      <article key={data.id}>
        <div className="articleHeader">
          <div className="headerLeft">
            <img src={data.userImg} alt="feedUserImg" />
            <span>Wecode 32기~!</span>
          </div>
          <div className="headerRight">
            <i className="fa-solid fa-ellipsis fa-2x" />
          </div>
        </div>

        <div className="feeds-img">
          <img src={data.feedImg} alt="my Article" />
        </div>
        <div className="feeds-img-info">
          <div className="feeds-info-img">
            <i className="fa-regular fa-heart" onClick={iconHandler} />
            <i className="fa-regular fa-comment" />
            <i className="fa-regular fa-bookmark" />
          </div>
          <div className="likes">
            <img src={data.userImg} alt="feedLike" />

            <p>
              <span className="author">Voyage_dev</span>님 외
              <span className="countLikes">10</span>명이 좋아합니다
            </p>
          </div>
          <Comment
            commentList={data.comment}
            handleDelete={handleDelete}
            changeIconHandler={changeIconHandler}
          />
        </div>
        <form id="instaForm">
          <PostCommentInput data={data} addComment={addComment} />
        </form>
      </article>
    );
  });
}

export default PutPostFeedHandler;
