import React from "react";
import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  padding-top: 56.25%;
  width: 90%;
  max-width: 600px;

  @media screen and (min-width: 600px) {
    padding-top: 376px;
  }
`;
const Iframe = styled.iframe`
  z-index: 0;
  position: absolute;
  top: 0;
  width: 100%;
  height: 90%;
  max-height: 336px;
`;

let Video = (props) => (
  <Flex>
    <Wrapper>
        <Iframe
          src={props.src}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title=" 1"
        />
    </Wrapper>
  </Flex>
);

export default Video;
