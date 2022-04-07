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

  return (
    <React.Fragment>
      <ImageDefault {...styles}></ImageDefault>
    </React.Fragment>
  );
};

Image.defaultProps = {
  shape: "",
  url: "https://mblogthumb-phinf.pstatic.net/20160412_67/tjans1656_1460436634883DEBhn_PNG/2016-04-12_13%3B45%3B31.PNG?type=w2",
  size: 40,
};

const ImageDefault = styled.div`
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  background-image: url("${(props) => props.url}");
  background-size: cover;
`;

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
