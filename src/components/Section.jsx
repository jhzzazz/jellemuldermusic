import React from "react";
import styled from 'styled-components';

const Wrapper = styled.div`
  margin:0 auto 2.5rem auto;
  max-width:600px;
`;
let Section = (props) => (
  <Wrapper id={props.id}>
    <h2>{props.id}</h2>
    {props.children}
  </Wrapper>
);

export default Section;
