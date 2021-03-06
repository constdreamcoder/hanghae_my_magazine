import React from "react";

import { Grid, Text } from "../elements";

const CommentLine = (props) => {
  return (
    <React.Fragment>
      <Grid is_flex padding="5px">
        <Grid is_flex width="12.5em" padding="5px">
          <Grid>
            <Text>좋아요3개</Text>
          </Grid>
          <Grid>
            <Text>댓글{props.comment_cnt}개</Text>
          </Grid>
        </Grid>
        <Grid center="end">❤</Grid>
      </Grid>
    </React.Fragment>
  );
};

export default CommentLine;
