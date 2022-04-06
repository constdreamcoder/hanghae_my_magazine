import { style } from "@mui/system";
import React from "react";

import styled from "styled-components";

const Radio = (props) => {
  const { text, id, value } = props;
  return (
    <React.Fragment>
      <RadioInput type="radio" id={id} name="layout" value={value} />
      <label htmlFor={id}>
        <strong>{text}</strong>
      </label>
    </React.Fragment>
  );
};

Radio.defaultProps = {
  id: "",
  value: "",
  text: "",
};

const RadioInput = styled.input`
  &:checked + label strong {
    color: rgb(27, 156, 252);
    margin: 10px;
  }
`;

export default Radio;
