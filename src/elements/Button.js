import React from "react";

// style
import styled from "styled-components";

const Button = (props) => {
  const { text, _onClick, children, margin, bg, width } = props;
  const styles = { margin: margin, bg: bg, width: width };
  return (
    <ElButton {...styles} onClick={_onClick}>
      {text ? text : children}
    </ElButton>
  );
};

Button.defaultProps = {
  text: false,
  children: null,
  width: "100%",
  bg: false,
  _onClick: () => {},
  margin: false,
};

const ElButton = styled.button`
  box-sizing: border-box;
  border: none;
  border-radius: 3px;
  color: white;
  cursor: pointer;
  width: ${(props) => props.width};
  ${(props) => (props.bg ? `background-color: ${props.bg}` : "")};
  height: 40px;
  ${(props) => (props.margin ? `margin: ${props.margin}` : "")};
`;

export default Button;
