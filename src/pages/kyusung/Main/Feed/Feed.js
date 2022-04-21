import { useState, useEffect } from "react";
import PutPostFeedHandler from "../PutPostFeedHandler/PutPostFeedHandler";
import "./Feed.scss";

const Feed = () => {
  const [feedList, setFeedList] = useState([]);

  useEffect(() => {
    fetch("data/kyusung/feedData.json", {
      method: "GET",
    })
      .then(res => res.json())
      .then(data => {
        setFeedList(data);
      });
  }, []);
  const addComment = (e, id, { userName, content }) => {
    e.preventDefault();

    const newFeedList = [...feedList];
    const currentIdx = feedList.findIndex(el => el.id === id);
    const currentFeed = feedList[currentIdx];
    const newComment = {
      id: currentFeed.comment[currentFeed.comment.length - 1].id + 1,
      userName,
      content,
      isLiked: false,
    };

    newFeedList[currentIdx].comment.push(newComment);

    setFeedList(newFeedList);
  };

  const changeIconHandler = (idKey, feedListId) => {
    const onClickHeart = [...feedList];
    const currentHeart = onClickHeart[feedListId - 1].comment.find(
      el => el.id === idKey
    );
    currentHeart.isLiked = !currentHeart.isLiked;
    setFeedList(onClickHeart);
  };

  const handleDelete = (idKey, feedListId) => {
    const comments = [...feedList];
    const commentDelete = comments[feedListId - 1].comment.filter(comment => {
      return comment.id !== idKey;
    });
    comments[feedListId - 1].comment = commentDelete;

    setFeedList(comments);
  };

  return (
    <PutPostFeedHandler
      feedList={feedList}
      addComment={addComment}
      changeIconHandler={changeIconHandler}
      handleDelete={handleDelete}
    />
  );
};

export default Feed;
