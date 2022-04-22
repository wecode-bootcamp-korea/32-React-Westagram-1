import React, { useEffect, useState } from "react";
import CommentList from "../CommentList/CommentList";
import "./Post.scss";

const Post = ({ post, onPostLikeButtonClick, onPostBookmarkButtonClick }) => {
  const [commentList, setCommentList] = useState([]);
  const [commentInput, setCommentInput] = useState("");
  const [commentCounter, setCommentCounter] = useState(0);

  useEffect(() => {
    fetch("data/common/commentData.json")
      .then(res => res.json())
      .then(data => {
        setCommentList(data);
        setCommentCounter(data.length + 1);
      });
  }, []);

  const { id, userName, isLiked, isBookmarked } = post;
  const isCommentButtonValid = commentInput.length >= 1;

  const onSubmit = e => {
    e.preventDefault();

    if (commentInput.slice().trim().length > 0) {
      setCommentCounter(commentCounter => commentCounter + 1);

      setCommentList(prev => [
        ...prev,
        {
          id: commentCounter,
          userName: "garuda352",
          content: commentInput,
          isLiked: false,
        },
      ]);
    }

    setCommentInput("");
  };

  const onInputChange = e => {
    setCommentInput(e.target.value);
  };

  const onDeleteButtonClick = clickedItemId => {
    setCommentList(
      [...commentList].filter(comment => comment.id !== clickedItemId)
    );
  };

  const onCommentLikeButtonClick = clickedItemId => {
    const commentListCopy = [...commentList];
    const clickedItem = commentListCopy.find(
      comment => comment.id === clickedItemId
    );
    clickedItem.isLiked = !clickedItem.isLiked;
    setCommentList(commentListCopy);
  };

  return (
    <article className="post">
      <header className="post-header">
        <div className="post-header-left">
          <a href="#">
            <img
              alt="Profile of Hyeonsu Kim"
              src="/images/hyeonsu/user-profile.jpeg"
              className="post-header-profile"
            />
            <strong className="user-id">{userName}</strong>
          </a>
        </div>
        <div className="post-header-right">
          <button type="button" className="post-header-button">
            ...
          </button>
        </div>
      </header>

      <div className="post-images">
        <div className="post-image" />
      </div>

      <div className="post-contents">
        <div className="post-action-buttons">
          <div className="post-action-buttons-left">
            <button
              className={`post-action-button button-heart ${
                isLiked && "liked"
              }`}
              type="button"
              aria-label="Like this post"
              onClick={() => onPostLikeButtonClick(id)}
            >
              <i
                className={`${isLiked ? "fa-solid" : "fa-regular"} fa-heart`}
                aria-hidden
              />
            </button>
            <button
              className="post-action-button button-comment"
              type="button"
              aria-label="Comment this post"
            >
              <i className="fa-regular fa-comment" aria-hidden />
            </button>
            <button
              className="post-action-button button-share"
              type="button"
              aria-label="Share this post"
            >
              <i className="fa-regular fa-share-from-square" aria-hidden />
            </button>
          </div>
          <div className="post-action-buttons-right">
            <button
              className={`post-action-button button-bookmark ${
                isBookmarked && "bookmarked"
              }`}
              type="button"
              aria-label="Bookmark this post"
              onClick={() => onPostBookmarkButtonClick(id)}
            >
              <i
                className={`${
                  isBookmarked ? "fa-solid" : "fa-regular"
                } fa-bookmark`}
                aria-hidden
              />
            </button>
          </div>
        </div>

        <div className="post-liked">
          <a className="post-liked-title" href="#">
            <img
              alt="Profile of sfc.seongnam"
              src="/images/hyeonsu/user-profile-2.jpeg"
            />
            <strong className="user-id">sfc.seongnam</strong>
          </a>
          <span className="has-margin">님</span>
          <button className="post-liked-modal-button" type="button">
            외 60명
          </button>
          <span>이 좋아합니다</span>
        </div>

        <div className="post-description">
          <a href="#">
            <strong className="user-id">garuda352</strong>
          </a>
          <span className="post-description-content">
            우리도 우승하게 해주세요
          </span>
        </div>

        <CommentList
          comments={commentList}
          onDeleteButtonClick={onDeleteButtonClick}
          onCommentLikeButtonClick={onCommentLikeButtonClick}
        />

        <a className="post-created-at" href="#">
          <span>2020년 12월 20일</span>
        </a>
      </div>

      <form className="post-comment" onSubmit={onSubmit}>
        <input
          className="post-comment-input"
          type="text"
          placeholder="댓글 달기..."
          value={commentInput}
          onChange={onInputChange}
        />
        <button
          className="post-comment-button"
          type="submit"
          disabled={!isCommentButtonValid}
        >
          게시
        </button>
      </form>
    </article>
  );
};

export default Post;
