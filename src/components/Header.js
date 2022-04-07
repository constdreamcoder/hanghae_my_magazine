import React from "react";

// elements
import { Button, Grid, Text, Image } from "../elements";

// packages
import { history } from "../redux/configureStore";

// import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

// Cookie
import { apiKey } from "../shared/firebase";

const Header = (props) => {
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.is_login);
  const user_info = useSelector((state) => state.user.user);
  console.log(user_info);

  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  const is_session = sessionStorage.getItem(_session_key) ? true : false;

  const isLogOut = (is_login, is_session) => {
    console.log(is_login, is_session);
    return is_login && is_session
      ? dispatch(userActions.logoutFB())
      : history.push("/login");
  };

  return (
    <React.Fragment>
      <Grid is_flex padding="16px">
        <Grid width="30%">
          <Text color="rgb(27, 156, 252)" size="32px" bold margin="0px">
            <span
              onClick={() => {
                history.push("/");
              }}
              style={{ cursor: "pointer" }}
            >
              🏠︎
            </span>
          </Text>
        </Grid>
        <Grid is_flex width="70%">
          <Grid
            is_flex
            width="31.25rem"
            visibility={is_login && is_session ? "visible" : "hidden"}
            margin="0px 10px 0px 0px"
          >
            <Image
              url={is_login && is_session ? user_info.user_profile : ""}
              shape="circle"
            />
            <Text>{is_login && is_session ? user_info.user_name : ""}</Text>
          </Grid>
          <Button
            bg="rgb(27, 156, 252)"
            text={is_login && is_session ? "알림" : "회원가입"}
            margin="0px 10px 0px 0px"
            _onClick={() => {
              is_login && is_session
                ? history.push("/noti")
                : history.push("/signup");
            }}
          ></Button>
          <Button
            bg="rgb(27, 156, 252)"
            text={is_login && is_session ? "로그아웃" : "로그인"}
            _onClick={() => {
              isLogOut(is_login, is_session);
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
  console.log(props);
  return (
    <React.Fragment>
      <Grid is_flex padding="16px">
        <Grid is_flex width="auto">
          <Grid>
            <Image url={props.user_info.user_profile} shape="circle" />
          </Grid>
          <Grid margin="0px 0px 0px 1em">
            <Text bold>{props.user_info.user_name}</Text>
          </Grid>
        </Grid>
        <Grid center="center" is_flex>
          <Grid>
            <Text>{props.insert_dt}</Text>
          </Grid>

          {props.is_me && (
            <Button
              width="20%"
              padding="4px"
              bg="rgb(27, 156, 252)"
              _onClick={() => {
                history.push(`/write/${props.id}`);
              }}
            >
              수정
            </Button>
          )}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export { PostHeader };
