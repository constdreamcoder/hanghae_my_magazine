import React from "react";

// style
import styled, { keyframes } from "styled-components";

const Button = (props) => {
  const { text, _onClick, children, margin, bg, width, is_float, padding } =
    props;

  if (is_float) {
    return (
      <React.Fragment>
        <FloatButton onClick={_onClick}>{text ? text : children}</FloatButton>
      </React.Fragment>
    );
  }

  const styles = { margin: margin, bg: bg, width: width, padding };

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
  is_float: false,
  padding: "",
};

const ElButton = styled.button`
  box-sizing: border-box;
  border: none;
  border-radius: 3px;
  color: white;
  cursor: pointer;
  padding: ${(props) => props.padding};
  width: ${(props) => props.width};
  ${(props) => (props.bg ? `background-color: ${props.bg}` : "")};
  height: 40px;
  ${(props) => (props.margin ? `margin: ${props.margin}` : "")};
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const FloatButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 36px;
  position: fixed;
  bottom: 30px;
  right: 60px;
  border: none;
  text-decoration: none;
  color: white;
  background-color: #212121;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 300ms ease-in-out;
  &:hover {
    animation: ${rotate} 2s linear infinite;
  }
`;

export default Button;
