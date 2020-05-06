import React from "react";
import styled from "styled-components";
import { data }from "../data/data";


const Wrapper = styled.div`
  height: 95vh;
  
  width: 100%;
  background: url(${data.imgpath.banner});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: bottom;
  align-items: bottom;
  margin-bottom: 50px;

  @media (min-width: 768px){
  max-height: 50px;
  }

  `

// const Logo = styled.img`
//   height: 15vh;
//   margin: 3%;
// `;

export let Banner = (props) => (
  <Wrapper id="Banner">
    {/* <Logo src={data.imgpath.logo}/> */}
    {/* <h1>{data.titles.siteTitle}</h1>
    <h5>{data.titles.slogan}</h5> */}
  </Wrapper>
);
