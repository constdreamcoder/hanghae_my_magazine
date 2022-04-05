import React from "react";

// shared
import { getCookie, setCookie, deleteCookie } from "../shared/Cookie";

// elements
import { Input, Grid, Text, Button } from "../elements";

//packages
import { useHistory } from "react-router-dom";

const Login = (props) => {
  const history = useHistory();

  // console.log(getCookie("user_id"));
  const login = () => {
    setCookie("user_id", "perl", 3);
    setCookie("user_pwd", "pppp", 3);
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
              // history.push("/");
            }}
          ></Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Login;
