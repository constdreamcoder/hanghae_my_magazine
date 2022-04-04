import React from "react";

// elements
import { Input, Grid, Text, Button } from "../elements";

const Signup = (props) => {
  return (
    <React.Fragment>
      <h1>회원가입</h1>
      <Grid>
        <Input label="아이디" placeholder="아이디" />
      </Grid>
      <Grid>
        <Input label="닉네임" placeholder="닉네임" />
      </Grid>
      <Grid>
        <Input label="비밀번호" placeholder="비밀번호" />
      </Grid>
      <Grid>
        <Input label="비밀번호 확인" placeholder="비밀번호 확인" />
      </Grid>
      <Grid>
        <Button
          text="회원가입하기"
          bg="rgba(27, 156, 252, 0.55)"
          margin="30px 0px"
        />
      </Grid>
    </React.Fragment>
  );
};

export default Signup;
