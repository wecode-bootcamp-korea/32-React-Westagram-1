import React from "react";
import Friends from "./friends/Friends";
import MyProfile from "./myprofile/MyProfile";

function RightFeed() {
  return (
    <div className="feedRight">
      <MyProfile />
      <Friends />
    </div>
  );
}

export default RightFeed;
