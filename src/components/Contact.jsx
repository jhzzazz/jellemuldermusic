import React from "react";
import styled from "styled-components";
import { data } from "../data/data";
import {FacebookIcon, InstagramIcon, MailIcon, SpotifyIcon, YoutubeIcon} from "./Icons"
const SocialIcon = styled.a`
  margin: 20px 20px 50px 20px;
  padding: 0;
  background: none;
  border: none;
`

export let Contact = (props) => (
  <div className={data.titles.section5} >
    <h2>{data.titles.section5}</h2>

    {/* facebook */}
    <div className="flex-container"style={{display:'flex'}}>
      <SocialIcon href={data.contactinfo.facebook} target="blank">
        <FacebookIcon/>
      </SocialIcon>

      {/* Instagram */}
      <SocialIcon href={data.contactinfo.facebook} target="blank">
        <InstagramIcon/>
      </SocialIcon>

      {/* email */}
      <SocialIcon href={"mailto:" + data.contactinfo.email} target="blank">
      <MailIcon/>
      </SocialIcon>

      <SocialIcon href={data.contactinfo.spotify} target="blank">
        <SpotifyIcon/>
      </SocialIcon>
      <SocialIcon href={data.contactinfo.youtube} target="blank">
        <YoutubeIcon/>
      </SocialIcon>
    </div>
  </div>
);
