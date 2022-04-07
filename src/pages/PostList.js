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
  const user_info = useSelector((state) => state.user.user);

  console.log(post_list);

  React.useEffect(() => {
    if (post_list.length === 0) {
      dispatch(postActions.getPostFB());
    }
  }, []);
  return (
    <React.Fragment>
      {post_list.map((p, idx) => {
        if (p.user_info.user_id === user_info?.uid) {
          return <Post key={p.id} {...p} is_me={true} />;
        } else {
          return <Post key={p.id} {...p} is_me={false} />;
        }
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
