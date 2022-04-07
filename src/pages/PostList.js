import React from "react";

//packages
import { useDispatch, useSelector } from "react-redux";
import { actionCreator as postActions } from "../redux/modules/post";

// components
import Post from "../components/Post";

// elements
import { Button } from "../elements";

// shared
import Permit from "../shared/Permit";

const PostList = (props) => {
  const { history } = props;
  const dispatch = useDispatch();
  const post_list = useSelector((state) => state.post.list);

  console.log(post_list);

  React.useEffect(() => {
    if (post_list.length === 0) {
      dispatch(postActions.getPostFB());
    }
  }, []);
  return (
    <React.Fragment>
      {post_list.map((p, idx) => {
        return <Post key={p.id} {...p} />;
      })}
      <Permit>
        <Button
          is_float
          text="+"
          _onClick={() => history.push("/write")}
        ></Button>
      </Permit>
    </React.Fragment>
  );
};

export default PostList;
