import React, { useState } from "react";
import "./AsideBottomDescription.scss";
function AsideBottomDescription() {
  const [description] = useState([
    "소개",
    "도움말",
    "홍보 센터",
    "채용 정보",
    "개인정보 처리방침",
    "약관",
    "위치",
  ]);

  const result = description.map((descript, i) => {
    return <span key={i}>{descript}</span>;
  });
  return (
    <div className="westagram-info">
      {result}
      <p>© 2022 INSTAGRAM FROM META</p>
    </div>
  );
}

export default AsideBottomDescription;
