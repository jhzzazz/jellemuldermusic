import styled from "styled-components";
import React from "react";
import { data } from "../data/data";

const BioWrapper = styled.div`
  position: relative;
  padding: 1.5rem;
  margin: 0 auto 3rem auto;
  background: ${data.colors.mist};
`;

export let Bio = (props) => {
  return (
    <BioWrapper
      style={{ width: props.width, marginTop: props.top }}
      id={props.id}
      title={data.titles.section1}
    >
      <h2>{props.title}</h2>
      {props.children}
    </BioWrapper>
  );
};
