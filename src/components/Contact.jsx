import React from "react";
import styled from "styled-components";
import {data} from '../data/data'
const SocialIcon = styled.a`
  margin: 20px 20px 50px 20px;
  padding: 0;
  background: none;
  border: none;
`;
const Logo = styled.img`
  height: 40px;
`;
export let Contact = (props) => (
  <div className={data.titles.section4}>
    <h2>{data.titles.section4}</h2>
    <h3>{data.contactinfo.email}</h3>

    {/* facebook */}
    <div className="flex-container">
      <SocialIcon
        href={data.contactinfo.facebook}
        target="blank"
      >
        <Logo src={data.imgpath.facebook} alt="facebook" />
      </SocialIcon>

      {/* Instagram */}
      <SocialIcon
        href={data.imgpath.facebook}
        target="blank"
      >
        <Logo src="/img/instagram.svg" alt="instagram" />
      </SocialIcon>

      {/* email */}
      <SocialIcon href={"mailto:" + data.contactinfo.email} arget="blank">
        <Logo src={data.imgpath.email} alt="email" />
      </SocialIcon>
    </div>
  </div>
);


