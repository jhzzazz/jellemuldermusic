import React from 'react';
import styled from 'styled-components';

let FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  /* width: 100%; */
`
export let Image = (props) => (
<div>
<h2>{props.id}</h2>
<FlexContainer id={props.id}>
  <img src={props.src} alt="logo" style={{width:80+ "%"}} />
</FlexContainer>
</div>

);

