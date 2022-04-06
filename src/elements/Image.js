import React from "react";

// style
import styled from "styled-components";

const Image = (props) => {
  const { shape, url, size } = props;

  const styles = {
    url: url,
    size: size,
  };

  if (shape === "circle") {
    return <ImageCircle {...styles}></ImageCircle>;
  }

  if (shape === "rectangle") {
    return (
      <ImageRectangleOutter>
        <ImageRectangleInner {...styles}></ImageRectangleInner>
      </ImageRectangleOutter>
    );
  }

  if (shape === "wide-rectangle") {
    return (
      <ImageWideRectangleOutter>
        <ImageWideRectangleInner {...styles}></ImageWideRectangleInner>
      </ImageWideRectangleOutter>
    );
  }

  return <React.Fragment></React.Fragment>;
};

Image.defaultProps = {
  shape: "",
  url: "https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg",
  size: 40,
};

const ImageWideRectangleOutter = styled.div`
  width: 62.5rem;
  height: 62.5rem;
`;

const ImageWideRectangleInner = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("${(props) => props.url}");
  background-size: cover;
`;

const ImageRectangleOutter = styled.div`
  width: 20rem;
  height: 18.75rem;
`;

const ImageRectangleInner = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("${(props) => props.url}");
  background-size: cover;
`;

const ImageCircle = styled.div`
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  min-width: var(--size);
  min-height: var(--size);
  border-radius: 50%;

  background-image: url("${(props) => props.url}");
  background-size: cover;
  margin: 10px 0px;
`;

export default Image;
