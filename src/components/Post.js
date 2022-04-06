import React from "react";

//components
import { PostHeader } from "./Header";
import CommentLine from "./CommentLine";

// elements
import { Grid, Image, Text } from "../elements";
const Post = (props) => {
  const user = {
    user_info: { ...props.user_info },
    insert_dt: props.insert_dt,
  };

  return (
    <React.Fragment>
      <Grid>
        <PostHeader {...user}></PostHeader>
      </Grid>
      <Grid is_flex>
        <Grid width="auto" margin="10px 0px">
          <Image url={props.image_url} shape="rectangle" />
        </Grid>
        <Grid center="center">
          <Text>{props.contents}</Text>
        </Grid>
      </Grid>
      <Grid>
        <CommentLine comment_cnt={props.comment_cnt}></CommentLine>
      </Grid>

      {/* <Grid>
        <PostHeader></PostHeader>
      </Grid>
      <Grid is_flex>
        <Grid center="center">
          <Text>리액트 너무 어렵 ㅠㅠ</Text>
        </Grid>
        <Grid width="auto" margin="10px 0px">
          <Image shape="rectangle" />
        </Grid>
      </Grid>
      <Grid>
        <CommentLine></CommentLine>
      </Grid> */}
    </React.Fragment>
  );
};

export default Post;
