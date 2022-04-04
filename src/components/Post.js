import React from "react";

//components
import { PostHeader } from "./Header";
import CommentLine from "./CommentLine";

// elements
import { Grid, Image, Text } from "../elements";
const Post = (props) => {
  return (
    <React.Fragment>
      <Grid>
        <PostHeader></PostHeader>
      </Grid>
      <Grid is_flex>
        <Grid width="auto" margin="10px 0px">
          <Image shape="rectangle" />
        </Grid>
        <Grid center="center">
          <Text>리액트 너무 어렵 ㅠㅠ</Text>
        </Grid>
      </Grid>
      <Grid>
        <CommentLine></CommentLine>
      </Grid>
    </React.Fragment>
  );
};

export default Post;
