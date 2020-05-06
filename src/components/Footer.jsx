import React from "react";
import styled from "styled-components";
import { data } from "../data/data";

const Wrapper = styled.div`
  padding: 2rem;
  border-top: 1px solid #ffffffaa;
`;

const Footer = (props) => (
  <Wrapper>
    <div className="footer">
      <h3>{data.titles.siteTitle}</h3>
      <p>{data.contactinfo.email}</p>
      <p>
        <a
          href="http://www.jouwdeveloper.nl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Website: Jouw Developer
        </a>
      </p>
    </div>
  </Wrapper>
);

export default Footer;
