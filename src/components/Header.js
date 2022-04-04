import React from "react";

// elements
import { Button, Grid, Text, Image } from "../elements";

// packages
import { useHistory } from "react-router-dom";

const Header = (props) => {
  const history = useHistory();
  return (
    <React.Fragment>
      <Grid is_flex padding="16px">
        <Grid>
          <Text>그림자</Text>
        </Grid>
        <Grid is_flex>
          <Button
            bg="rgb(27, 156, 252)"
            text="회원가입"
            margin="0px 10px 0px 0px"
            _onClick={() => {
              history.push("/signup");
            }}
          ></Button>
          <Button
            bg="rgb(27, 156, 252)"
            text="로그인"
            _onClick={() => {
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
