import React from "react";

// packages
import { BrowserRouter, Route } from "react-router-dom";

// pages
import Signup from "../pages/Signup";

// elements
import { Grid } from "../elements";

function App() {
  return (
    <React.Fragment>
      <Grid margin="0px auto" width="1000px" bg="yellow">
        <BrowserRouter>
          <Route path="/signup" exact component={Signup} />
        </BrowserRouter>
      </Grid>
    </React.Fragment>
  );
}

export default App;
