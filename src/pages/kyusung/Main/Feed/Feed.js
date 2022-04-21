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
  const addComment = (id, userName, content) => {
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
  const changeIconHandler = idKey => {
    const onClickHeart = [...feedList];

    const currentHeart = onClickHeart.find(el => el.id === idKey);
    console.log(currentHeart.comment[idKey].isLiked);
    // const changeHandler =
    //   !onClickHeart[currentHeart].comment[currentHeart].isLiked;
    // console.log(changeHandler);

    setFeedList(onClickHeart);
  };

  const handleDelete = idKey => {
    const comments = [...feedList].filter(comment => {
      return comment.id !== idKey;
    });
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
