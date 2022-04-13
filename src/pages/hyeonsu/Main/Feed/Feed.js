import React, { useState } from "react";
import Post from "../Post/Post";

function Feed() {
  const [postArr, setPostArr] = useState(
    Array(5)
      .fill("a")
      .map((v, i) => {
        return {
          id: i,
          userId: Math.random().toString(36).substring(2, 11),
          liked: Math.floor(Math.random() * 2),
          bookmarked: Math.floor(Math.random() * 2),
        };
      })
  );

  const onPostLikeButtonClick = index => {
    const postCopy = [...postArr];
    postCopy[index].liked = !postCopy[index].liked;
    setPostArr(postCopy);
  };

  const onPostBookmarkButtonClick = index => {
    const postCopy = [...postArr];
    postCopy[index].bookmarked = !postCopy[index].bookmarked;
    setPostArr(postCopy);
  };

  const postList = postArr.map((post, index) => (
    <Post
      key={index}
      id={post.id}
      userId={post.userId}
      liked={post.liked}
      bookmarked={post.bookmarked}
      onPostLikeButtonClick={onPostLikeButtonClick}
      onPostBookmarkButtonClick={onPostBookmarkButtonClick}
    />
  ));

  return <main className="feed">{postList}</main>;
}

export default Feed;
