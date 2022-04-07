import React from "react";
import styled from "styled-components";

const Text = (props) => {
  const { bold, color, size, children, margin, hidden, _onClick, is_click } =
    props;
  const styles = {
    bold,
    color,
    size,
    margin,
    hidden,
    is_click,
  };
  return (
    <React.Fragment>
      <P {...styles} onClick={_onClick}>
        {children}
      </P>
    </React.Fragment>
  );
};

Text.defaultProps = {
  children: null,
  bold: false,
  color: "#222831",
  size: "14px",
  margin: false,
  _onClick: () => {},
  is_click: false,
  width: false,
};

const P = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold ? "700" : "400")};
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  display: ${(props) => props.hidden};
  ${(props) => (props.is_click ? `cursor: pointer;` : "")}
`;

export default Text;
