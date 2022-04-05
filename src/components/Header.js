import React from "react";

// elements
import { Button, Grid, Text, Image } from "../elements";

// packages
import { useHistory } from "react-router-dom";

// Cookie
import { getCookie, deleteCookie } from "../shared/Cookie";

const Header = (props) => {
  const history = useHistory();
  const [is_login, setIsLogin] = React.useState(false);

  React.useEffect(() => {
    let cookie = getCookie("user_id");
    console.log(cookie);
    if (cookie) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

  const isLogin = (is_login) => {
    return is_login ? deleteCookie("user_id") : "";
  };

  return (
    <React.Fragment>
      <Grid is_flex padding="16px">
        <Grid width="30%">
          <Text>그림자</Text>
        </Grid>
        <Grid is_flex width="70%">
          <Grid
            is_flex
            width="31.25rem"
            visibility={is_login ? "visible" : "hidden"}
          >
            <Image shape="circle" />
            <Text>야추</Text> {/* 유저 이름*/}
          </Grid>
          <Button
            bg="rgb(27, 156, 252)"
            text={is_login ? "벨" : "회원가입"}
            margin="0px 10px 0px 0px"
            _onClick={() => {
              history.push("/signup");
            }}
          ></Button>
          <Button
            bg="rgb(27, 156, 252)"
            text={is_login ? "로그아웃" : "로그인"}
            _onClick={() => {
              isLogin(is_login);
              history.push("/login");
            }}
          ></Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

Header.defaultProps = {};

export default Header;

const PostHeader = (props) => {
  return (
    <React.Fragment>
      <Grid is_flex padding="16px">
        <Grid is_flex width="auto">
          <Grid>
            <Image shape="circle" />
          </Grid>
          <Grid margin="0px 0px 0px 1em">
            <Text bold>test99</Text>
          </Grid>
        </Grid>
        <Grid center="center">
          <Text>2022-04-04 12:00:00</Text>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export { PostHeader };
