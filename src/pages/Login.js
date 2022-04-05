import React from "react";

// shared

// elements
import { Input, Grid, Text, Button } from "../elements";

//packages
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

const Login = (props) => {
  const dispatch = useDispatch();

  // console.log(getCookie("user_id"));
  const login = () => {
    dispatch(userActions.loginAction({ user_name: "perl" }));
  };

  return (
    <React.Fragment>
      <Grid padding="16px">
        <Grid>
          <h1>로그인</h1>
        </Grid>
        <Grid>
          <Input label="아이디" placeholder="아이디" />
        </Grid>
        <Grid>
          <Input label="비밀번호" placeholder="비밀번호" />
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
