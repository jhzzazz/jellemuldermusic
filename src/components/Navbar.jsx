import React from "react";
import {data} from "../data/data"
import {FacebookIcon, InstagramIcon, MailIcon, SpotifyIcon, YoutubeIcon} from "./Icons"
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  max-width:600px;
  display:flex;
  justify-content:center;
  /* positioning */
  left: 50%;
  transform: translateX(-50%);
  position: fixed;
  top: 0em;
  z-index: 1;
  /* appearence */
  background: ${data.colors.white};

`;
const Title = styled.h1`
  font-family:  ${data.fonts.prim};
  top:10px;
  font-size: 2rem;
  padding: .5rem;
  margin:0;
  min-width:fit-content;
`;
const SocialIcon = styled.a`
  margin: 10px;
  padding: 0;
  background: none;
  border: none;
  width:fit-content
`

const Iconcontainer = styled.div`
display:flex;
justify-content:center;
align-items: center;
padding:0 8px;
`

export let Navbar = (props) => (
  <Wrapper id='Top'>
    <Title>{data.titles.siteTitle}</Title>
    <Iconcontainer>
      <SocialIcon href={data.contactinfo.facebook} target="blank">
        <FacebookIcon/>
      </SocialIcon>
      <SocialIcon href={data.contactinfo.spotify} target="blank">
        <SpotifyIcon/>
      </SocialIcon>
      <SocialIcon href={data.contactinfo.youtube} target="blank">
        <YoutubeIcon/>
      </SocialIcon>

      {/* Instagram */}
      <SocialIcon href={data.contactinfo.facebook} target="blank">
        <InstagramIcon/>
      </SocialIcon>

      {/* email */}
      <SocialIcon href={"mailto:" + data.contactinfo.email} target="blank">
      <MailIcon/>
      </SocialIcon>
    </Iconcontainer>
  </Wrapper>
);
