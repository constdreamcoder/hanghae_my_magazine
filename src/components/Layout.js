import React from "react";

import { Grid, Text, Image } from "../elements";

const Layout = (props) => {
  if (props.layout === "right") {
    return (
      <React.Fragment>
        <Grid is_flex>
          <Grid center="center">
            <Text></Text>
          </Grid>
          <Grid width="auto" margin="10px 0px">
            <Image
              url={
                props.preview
                  ? props.preview
                  : "https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg"
              }
              shape="rectangle"
            />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }

  if (props.layout === "left") {
    return (
      <React.Fragment>
        <Grid is_flex>
          <Grid width="auto" margin="10px 0px">
            <Image
              url={
                props.preview
                  ? props.preview
                  : "https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg"
              }
              shape="rectangle"
            />
          </Grid>
          <Grid center="center">
            <Text></Text>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }

  if (props.layout === "bottom") {
    return (
      <React.Fragment>
        <Text></Text>
        <Grid margin="10px 0px">
          <Image
            url={
              props.preview
                ? props.preview
                : "https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg"
            }
            shape="wide-rectangle"
          />
        </Grid>
      </React.Fragment>
    );
  }
  return <React.Fragment></React.Fragment>;
};

export default Layout;
