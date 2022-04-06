import React from "react";

//components
import { PostHeader } from "./Header";
import CommentLine from "./CommentLine";

// elements
import { Grid, Image, Text } from "../elements";

//packages

const Post = (props) => {
  const user = {
    user_info: { ...props.user_info },
    insert_dt: props.insert_dt,
  };
  if (props.layout === "right") {
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
      </React.Fragment>
    );
  }
  if (props.layout === "left") {
    return (
      <React.Fragment>
        <Grid>
          <PostHeader {...user}></PostHeader>
        </Grid>
        <Grid is_flex>
          <Grid center="center">
            <Text>{props.contents}</Text>
          </Grid>
          <Grid width="auto" margin="10px 0px">
            <Image url={props.image_url} shape="rectangle" />
          </Grid>
        </Grid>
        <Grid>
          <CommentLine comment_cnt={props.comment_cnt}></CommentLine>
        </Grid>
      </React.Fragment>
    );
  }

  if (props.layout === "bottom") {
    return (
      <React.Fragment>
        <Grid>
          <PostHeader {...user}></PostHeader>
        </Grid>
        <Grid center="center">
          <Text>{props.contents}</Text>
        </Grid>
        <Grid margin="10px 0px">
          <Image url={props.image_url} shape="wide-rectangle" />
        </Grid>
        <Grid>
          <CommentLine comment_cnt={props.comment_cnt}></CommentLine>
        </Grid>
      </React.Fragment>
    );
  }

  return <React.Fragment></React.Fragment>;
};

export default Post;
