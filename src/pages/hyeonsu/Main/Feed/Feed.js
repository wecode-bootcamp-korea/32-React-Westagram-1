import React, { useEffect, useState } from "react";
import Post from "../Post/Post";

const Feed = () => {
  const [postArr, setPostArr] = useState([]);

  useEffect(() => {
    fetch("data/hyeonsu/feedData.json")
      .then(res => res.json())
      .then(data => setPostArr(data));
  }, []);

  const onPostLikeButtonClick = clickedPostId => {
    const postArrCopy = [...postArr];
    const clickedPost = postArr.find(post => post.id === clickedPostId);
    clickedPost.isLiked = !clickedPost.isLiked;
    setPostArr(postArrCopy);
  };

  const onPostBookmarkButtonClick = clickedPostId => {
    const postArrCopy = [...postArr];
    const clickedPost = postArr.find(post => post.id === clickedPostId);
    clickedPost.isBookmarked = !clickedPost.isBookmarked;
    setPostArr(postArrCopy);
  };

  const postList = postArr.map(post => (
    <Post
      key={post.id}
      post={post}
      onPostLikeButtonClick={onPostLikeButtonClick}
      onPostBookmarkButtonClick={onPostBookmarkButtonClick}
    />
  ));

  return <main className="feed">{postList}</main>;
};

export default Feed;
