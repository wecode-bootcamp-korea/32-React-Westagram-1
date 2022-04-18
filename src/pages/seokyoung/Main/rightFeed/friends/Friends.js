import React from "react";
import Friend from "./friend/Friend";

// props로 친구들 목록 던져서 업데이트 해보기

function Friends() {
  return (
    <div className="recommendFrineds">
      <div className="freinds">
        <Friend />
        <Friend />
        <Friend />
      </div>
    </div>
  );
}

export default Friends;
