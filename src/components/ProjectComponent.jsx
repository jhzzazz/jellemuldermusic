import React from "react";
import styled from "styled-components";
import {data} from "../data/data"

const Project = styled.div`
  margin: 10px auto 70px auto;
  max-width: 650px;
`;

const Header = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${data.colors.mist};
  max-height: 200px;
`;

const AvatarContainer = styled.div`
  padding: 0.5rem;
`;

const AvatarDescription = styled.div`
  max-width: 200px;
  text-align: left;
  border: 1px solid ${data.colors.thickmist};
  margin-left: 0.8rem;
  border-radius: 3px;

  padding: 0.5rem;
`;

const Description = styled.div`
  margin: auto;
  margin-top: 20px;
  background: ${data.colors.mist};
  border: 1px solid ${data.colors.white};
  border-radius: 5px;
  width: 90%;
`;

const Avatar = styled.img`
  width: 40vw;
  max-width: 150px;
  border-radius: 100%;
  margin: auto;
`;

let ProjectComponent = (props) => (
  <Project id={props.id}>
    <Header>
      <AvatarContainer>
        <Avatar src={props.img} alt="" />
        <h4 style={{ textAlign: "center" }}>{props.name}</h4>
      </AvatarContainer>
      <AvatarDescription>
        <li>{props.job}</li>
        <li>{props.discipline}</li>
        <p style={{textAlign:"left"}}>{props.about}</p>
      </AvatarDescription>
    </Header>
    <Description>
      <p>{props.description}</p>
    </Description>
  </Project>
);

export default ProjectComponent;
