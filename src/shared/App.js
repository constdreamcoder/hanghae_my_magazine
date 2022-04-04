import React from "react";

// packages
import { BrowserRouter, Route } from "react-router-dom";

// pages
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import PostList from "../pages/PostList";

// elements
import { Grid } from "../elements";

// components
import Header from "../components/Header";

function App() {
  return (
    <React.Fragment>
      <Grid margin="0px auto" width="1000px" bg="yellow">
        <BrowserRouter>
          <Header></Header>
          <Route path="/" exact component={PostList} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
        </BrowserRouter>
      </Grid>
    </React.Fragment>
  );
}

export default App;
