import React from "react";
import {data} from "../data/data"
import styled from "styled-components";

const Wrapper = styled.div`
  width: fit-content;
  /* positioning */
  left: 50%;
  transform: translateX(-50%);
  position: fixed;
  top: 0em;
  z-index: 1;
  /* appearence */
  background: ${data.colors.mist};

`;
const Title = styled.div`
  font-family:  ${data.fonts.prim};
  top:10px;
  font-size: 2rem;
  padding: .5rem;
`;

export let Navbar = (props) => (
  <Wrapper>
    <Title>{data.titles.siteTitle}</Title>
  </Wrapper>
);
