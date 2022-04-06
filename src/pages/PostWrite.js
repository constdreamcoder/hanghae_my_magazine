import React from "react";

// elements
import { Grid, Text, Input, Button, Radio } from "../elements";

// shared
import Upload from "../shared/Upload";

// components
import Layout from "../components/Layout";

const PostWrite = () => {
  return (
    <React.Fragment>
      <h1>게시글 작성</h1>
      <Grid>
        <Upload />
      </Grid>

      <Text size="1.25rem">레이아웃 고르기</Text>
      {/* 오른쪽 정렬 */}
      <Grid padding="16px">
        <Radio text="오른쪽에 이미지 왼쪽에 텍스트" id="right" value="right" />
      </Grid>

      <Layout layout="right"></Layout>

      {/* 왼쪽 정렬 */}
      <Grid padding="16px">
        <Radio text="왼쪽에 이미지 오른쪽에 텍스트" id="left" value="left" />
      </Grid>

      <Layout layout="left"></Layout>

      {/* 가운데 정렬 */}
      <Grid padding="16px">
        <Radio text="하단에 이미지 상단에 텍스트" id="bottom" value="bottom" />
      </Grid>

      <Layout layout="bottom"></Layout>

      {/* 게시글 작성 */}
      <Grid padding="16px">
        <Input multiLine label="게시글 내용" placeholder="게시글 내용" />
        <Button text="게시글 작성" bg="rgba(27, 156, 252, 0.55)"></Button>
      </Grid>
    </React.Fragment>
  );
};

export default PostWrite;
