import React from "react";

// style
import styled from "styled-components";

// packages
import { useDispatch } from "react-redux";
import { actionCreator as postActions } from "../redux/modules/post";

const Radio = (props) => {
  const dispatch = useDispatch();

  const { text, id, value } = props;
  const checked = (e) => {
    console.log(e.target.id);
    dispatch(postActions.addPost());
  };
  return (
    <React.Fragment>
      <RadioInput
        type="radio"
        id={id}
        name="layout"
        value={value}
        onChange={checked}
      />
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
