import React from "react";
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-bottom: 2.5rem
`;
let Section = (props) => (
  <Wrapper id={props.id}>
    <h2>{props.title}</h2>
    {props.children}
  </Wrapper>
);

export default Section;
