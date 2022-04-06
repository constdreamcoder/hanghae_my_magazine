import React from "react";

// packages
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";

import { actionCreators as userActions } from "../redux/modules/user";
import { useDispatch } from "react-redux";
import { apiKey } from "./firebase";

// pages
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import PostList from "../pages/PostList";
import PostWrite from "../pages/PostWrite";

// elements
import { Grid, Button } from "../elements";

// shared
import Permit from "./Permit";

// components
import Header from "../components/Header";

function App() {
  const dispatch = useDispatch();

  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  const is_session = sessionStorage.getItem(_session_key) ? true : false;

  React.useEffect(() => {
    if (is_session) {
      dispatch(userActions.loginCheckFB(apiKey));
    }
  }, []);

  return (
    <React.Fragment>
      <Grid margin="0px auto" width="1000px">
        <ConnectedRouter history={history}>
          <Header></Header>
          <Route path="/" exact component={PostList} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/write" exact component={PostWrite} />
        </ConnectedRouter>
      </Grid>
      <Permit>
        <Button
          is_float
          text="+"
          _onClick={() => history.push("/write")}
        ></Button>
      </Permit>
    </React.Fragment>
  );
}

export default App;
