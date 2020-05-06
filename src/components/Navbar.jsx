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
  background: #ffffffdd;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;
const Title = styled.div`
  font-family:  ${data.fonts.prim};
  font-size: 1.5rem;
  padding: 0.6rem;
`;

export let Navbar = (props) => (
  <Wrapper>
    <Title>{data.titles.siteTitle}</Title>
  </Wrapper>
);
