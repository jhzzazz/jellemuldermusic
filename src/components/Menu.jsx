import React, { useState } from "react";
import { Link } from "react-scroll";
import styled  from "styled-components";
import { data } from "../data/data";

const MenuButton = styled.button`
  z-index: 3;
  position: fixed;
  bottom: 5%;
  right: 5%;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background-position: center;
  background-color: ${data.colors.thickmist};
`;

const MenuList = styled.ul`
  width: 80%;
  max-width: 600px;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid ${data.colors.tert};
  position: fixed;
  left: 50%;
  top: 62%;
  z-index: 3;
  box-shadow: 5px 5px 20px ${data.colors.darkGrey};
  transition: 0.2s;
  background-color: ${data.colors.thickmist};
`;

const MenuItem = styled.li`
  transition: 0.2s;
  transition-delay: 0.1s;
  text-align: center;
  font-size: 1rem;
  line-height: 2;
  text-decoration: underline;
  color: ${data.colors.black};
  font-size: 1.5rem;
  opacity: 1;
  font-family: ${data.fonts.prim};
`;

const I = styled.i`
  font-size:20px;
`;



export let Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <MenuList
        style={{
          transform: isOpen
            ? "translate(-50%, -50%) scale(1)"
            : "translate(-50%, -50%) scale(0)",
        }}
      >
        <Link
          to="Banner"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={0}
          duration={300}
          onClick={toggle}
        >
          <MenuItem className="link">{data.titles.siteTitle}</MenuItem>
        </Link>
        <Link
          to={data.titles.section1}
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-40}
          duration={300}
          onClick={toggle}
        >
          <MenuItem className="link">{data.titles.section1}</MenuItem>
        </Link>
        <Link
          activeClass="active"
          to={data.titles.section2}
          spy={true}
          smooth={true}
          offset={-40}
          duration={300}
          onClick={toggle}
        >
          <MenuItem className="link">{data.titles.section2}</MenuItem>
        </Link>
        <Link
          activeClass="active"
          to={data.titles.section3}
          spy={true}
          smooth={true}
          offset={-40}
          duration={300}
          onClick={toggle}
        >
          <MenuItem className="link">{data.titles.section3}</MenuItem>
        </Link>
        <Link
          activeClass="active"
          to={data.titles.section4}
          spy={true}
          smooth={true}
          offset={100}
          duration={300}
          onClick={toggle}
        >
          <MenuItem className="link">{data.titles.section4}</MenuItem>
        </Link>
      </MenuList>

      <MenuButton onClick={toggle}>
        <I className="fas fa-bars"></I>
      </MenuButton>
    </div>
  );
};
