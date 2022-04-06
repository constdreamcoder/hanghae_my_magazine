import React, { Fragment } from "react";

// elements
import { Grid, Text, Input, Button, Radio } from "../elements";

// shared
import Upload from "../shared/Upload";

// components
import Layout from "../components/Layout";

// packages
import { useSelector, useDispatch } from "react-redux";
import { actionCreator as postActions } from "../redux/modules/post";

const PostWrite = (props) => {
  const dispatch = useDispatch();
  // 이미 App.js에서 session 여부끼지 체크를 했기 때문에 로그인 여부만 체크
  const is_login = useSelector((state) => state.user.is_login);

  const { history } = props;

  const [contents, setContents] = React.useState("");

  const changeContents = (e) => {
    setContents(e.target.value);
  };

  const addPost = () => {
    dispatch(postActions.addPostFB(contents));
  };

  if (!is_login) {
    return (
      <Grid margin="100px 0px" padding="16px" center>
        <Text size="32px" bold>
          앗! 잠깐!
        </Text>
        <Text size="16px">로그인 후에만 글을 쓸 수 있어요!</Text>
        {/* 버그: 버튼 동작 안함 -> 나중에 수정 예정  */}
        <Button
          bg="rgb(27,156,252)"
          _onCick={() => {
            history.replace("/");
          }}
        >
          로그인 하러 가기
        </Button>
      </Grid>
    );
  }
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
        <Input
          multiLine
          label="게시글 내용"
          placeholder="게시글 내용"
          _onChange={changeContents}
        />
        <Button
          text="게시글 작성"
          bg="rgba(27, 156, 252, 0.55)"
          _onClick={addPost}
        ></Button>
      </Grid>
    </React.Fragment>
  );
};

export default PostWrite;
