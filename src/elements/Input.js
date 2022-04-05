import React from "react";

// elements
import Text from "./Text";
import Grid from "./Grid";

// style
import styled from "styled-components";

const Input = (props) => {
  const { label, placeholder, _onChange, type } = props;
  return (
    <React.Fragment>
      <Grid>
        <Text margin="5px 0px">{label}</Text>
        <Elinput
          type={type}
          placeholder={placeholder + "를 입력해주세용!"}
          onChange={_onChange}
        ></Elinput>
      </Grid>
    </React.Fragment>
  );
};

Input.defaultProps = {
  label: "텍스트",
  placeholder: "텍스트를 입력해주세용!",
  _onChange: () => {},
  type: "text",
};

const Elinput = styled.input`
  width: 100%;
  min-width: 230px;
  box-sizing: border-box;
  padding: 10px;
  border: 2px solid rgb(37, 204, 247);
  border-radius: 3px;
  margin-bottom: 20px;
`;
export default Input;
