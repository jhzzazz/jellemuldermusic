import React, { useState } from "react";
import styled from "styled-components";
// import { data } from "../data/data";
// import ProjectComponent from "./ProjectComponent";
import Spotify from "./utility_components/Spotify";
import { Dots } from "./Icons";

// Styles
const Wrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  margin: 0 0 40px 0;
  padding: 0;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const CarouselItem = styled.div`
  min-width: 100%;
  height: fit-content;
  transition: 0.5s;
`;
const CarouselButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: 100%;
  width: 10%;
  background: transparent;
  border: none;
  outline: none;
`;
let Flex = styled.div`
  display: flex;
  justify-content: center;
`;

// Data
export function Carousel(props) {
  let carouselArray = [
    <Spotify src="https://open.spotify.com/embed/artist/0hEurMDQu99nJRq8pTxO14" />,
    <Spotify src="https://open.spotify.com/embed/artist/0hEurMDQu99nJRq8pTxO14" />,
  ];

  // Logic
  const [x, setX] = useState(0);
  const goLeft = () => {
    x === 0 ? setX(-100 * (carouselArray.length - 1)) : setX(x + 100);
  };
  const goRight = () => {
    x === -100 * (carouselArray.length - 1) ? setX(0) : setX(x - 100);
  };

  // Content
  return (
    <div id={props.id}>
      <h2>{props.title}</h2>
      <Wrapper>
        {carouselArray.map((item, index) => {
          return (
            <CarouselItem
              key={index}
              style={{ transform: `translateX(${x}%)` }}
            >
              {item}
            </CarouselItem>
          );
        })}
        <CarouselButton style={{ left: 0 }} onClick={goLeft}>
          <i className="fas fa-chevron-left" style={{ fontSize: 20 }}></i>
        </CarouselButton>
        <CarouselButton style={{ right: 0 }} onClick={goRight}>
          <i className="fas fa-chevron-right" style={{ fontSize: 20 }}></i>
        </CarouselButton>
      </Wrapper>
      <Flex>
        <Dots />
      </Flex>
    </div>
  );
}
