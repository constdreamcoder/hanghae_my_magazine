import React from "react";

import { PostHeader } from "../components/Header";

import { useSelector } from "react-redux";

const PostDetail = () => {
  const post = useSelector((state) => state.post.list);
  console.log(post);
  return (
    <React.Fragment>
      <div>상세 페이지입니다.</div>
    </React.Fragment>
  );
};

export default PostDetail;
