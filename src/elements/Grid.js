import React from "react";

// style
import styled from "styled-components";

const Grid = (props) => {
  const { is_flex, width, padding, margin, center, bg, children } = props;
  const styles = {
    is_flex: is_flex,
    width: width,
    padding: padding,
    margin: margin,
    center: center,
    bg: bg,
  };
  return (
    <React.Fragment>
      <GridBox {...styles}>{children}</GridBox>
    </React.Fragment>
  );
};

Grid.defaultProps = {
  children: null,
  is_flex: false,
  width: "100%",
  padding: false,
  margin: false,
  center: false,
  bg: false,
};

const GridBox = styled.div`
  box-sizing: border-box;
  width: ${(props) => props.width};
  height: 100%;
  ${(props) =>
    props.is_flex
      ? `display: flex; align-items: center; justify-content: space-between;`
      : ""}
  ${(props) => (props.center ? `text-align: ${props.center};` : "")}
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")}
  ${(props) => (props.bg ? `background-color: ${props.bg};` : "")}
`;

export default Grid;
