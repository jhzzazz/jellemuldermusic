import React from "react";
import styled from "styled-components";
import { data } from "../data/data";
import {FacebookIcon, InstagramIcon, MailIcon} from "./Icons"
const SocialIcon = styled.a`
  margin: 20px 20px 50px 20px;
  padding: 0;
  background: none;
  border: none;
`

export let Contact = (props) => (
  <div className={data.titles.section4}>
    <h2>{data.titles.section5}</h2>
    <p>{data.contactinfo.email}</p>

    {/* facebook */}
    <div className="flex-container">
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
    </div>
  </div>
);
