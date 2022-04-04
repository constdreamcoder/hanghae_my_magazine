import React from "react";

// elements
import { Button, Grid, Text } from "../elements";

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
