import React from "react";

// elements
import Text from "./Text";
import Grid from "./Grid";

// style
import styled from "styled-components";

const Input = (props) => {
  const {
    label,
    placeholder,
    _onChange,
    type,
    margin,
    hidden,
    multiLine,
    value,
  } = props;

  if (multiLine) {
    return (
      <React.Fragment>
        <Grid>
          <Text margin="5px 0px" hidden={hidden}>
            {label}
          </Text>
          <ElTextarea
            rows="10"
            value={value}
            type={type}
            placeholder={placeholder + "를 입력해주세용!"}
            onChange={_onChange}
            margin={margin}
          ></ElTextarea>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <Grid>
        <Text margin="5px 0px" hidden={hidden}>
          {label}
        </Text>
        <Elinput
          type={type}
          placeholder={placeholder + "를 입력해주세용!"}
          onChange={_onChange}
          margin={margin}
        ></Elinput>
      </Grid>
    </React.Fragment>
  );
};

Input.defaultProps = {
  multiLine: false,
  label: "",
  placeholder: "텍스트를 입력해주세용!",
  _onChange: () => {},
  type: "text",
  margin: "0px 0px 20px 0px",
  hidden: false,
  value: "",
};

const ElTextarea = styled.textarea`
  width: 100%;
  min-width: 230px;
  box-sizing: border-box;
  padding: 10px;
  border: 2px solid rgb(37, 204, 247);
  border-radius: 3px;
  margin: ${(props) => props.margin};
`;

const Elinput = styled.input`
  width: 100%;
  min-width: 230px;
  box-sizing: border-box;
  padding: 10px;
  border: 2px solid rgb(37, 204, 247);
  border-radius: 3px;
  margin: ${(props) => props.margin};
`;

export default Input;
