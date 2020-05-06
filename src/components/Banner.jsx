import React from "react";
import styled from "styled-components";
import { data }from "../data/data";


const Wrapper = styled.div`
  height: 45vh;
  max-height: 500px;
  width: 100%;
  background: url(${data.imgpath.banner});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;

const Logo = styled.img`
  height: 15vh;
  margin: 3%;
`;

export let Banner = (props) => (
  <Wrapper id="Banner">
    <Logo src={data.imgpath.logo}/>
    <h1>{data.titles.siteTitle}</h1>
    <h5>{data.titles.slogan}</h5>
  </Wrapper>
);
