import React from "react";

// shared

// elements
import { Input, Grid, Text, Button } from "../elements";

//packages
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

const Login = (props) => {
  const dispatch = useDispatch();

  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");

  const login = () => {
    if (id === "" || pwd === "") {
      window.alert("아이디 혹은 비밀번호가 공란입니다! 입력해주세요!");
      return;
    }
    dispatch(userActions.loginFB(id, pwd));
  };

  return (
    <React.Fragment>
      <Grid padding="16px">
        <Grid>
          <h1>로그인</h1>
        </Grid>
        <Grid>
          <Input
            label="아이디"
            placeholder="아이디"
            _onChange={(e) => {
              setId(e.target.value);
            }}
          />
        </Grid>
        <Grid>
          <Input
            label="비밀번호"
            placeholder="비밀번호"
            type="password"
            _onChange={(e) => setPwd(e.target.value)}
          />
        </Grid>
        <Grid>
          <Button
            text="로그인하기"
            bg="rgba(27, 156, 252, 0.55)"
            margin="30px 0px"
            _onClick={() => {
              login();
            }}
          ></Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Login;
