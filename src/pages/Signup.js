import React from "react";

// elements
import { Input, Grid, Text, Button } from "../elements";

// packages
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

const Signup = (props) => {
  const [id, setId] = React.useState("");
  const [user_name, setUserName] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const [pwd_check, setPwdCheck] = React.useState("");

  const dispatch = useDispatch();

  const signup = () => {
    if (id === "" || pwd === "" || user_name === "") {
      return;
    }

    if (pwd !== pwd_check) {
      return;
    }
    // 버그: 회원강비하면 자동으로 로그인 됨
    dispatch(userActions.signupFB(id, pwd, user_name));
  };
  return (
    <React.Fragment>
      <Grid padding="16px">
        <Grid>
          <h1>회원가입</h1>
        </Grid>
        <Grid>
          <Input
            label="아이디"
            placeholder="아이디"
            _onChange={(e) => setId(e.target.value)}
          />
        </Grid>
        <Grid>
          <Input
            label="닉네임"
            placeholder="닉네임"
            _onChange={(e) => setUserName(e.target.value)}
          />
        </Grid>
        <Grid>
          <Input
            label="비밀번호"
            placeholder="비밀번호"
            _onChange={(e) => setPwd(e.target.value)}
          />
        </Grid>
        <Grid>
          <Input
            label="비밀번호 확인"
            placeholder="비밀번호 확인"
            _onChange={(e) => setPwdCheck(e.target.value)}
          />
        </Grid>
        <Grid>
          <Button
            text="회원가입하기"
            bg="rgba(27, 156, 252, 0.55)"
            margin="30px 0px"
            _onClick={signup}
          ></Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Signup;
