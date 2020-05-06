import React, { useState } from "react";
import styled from "styled-components";
import { data } from "../data/data";
import ProjectComponent from "./ProjectComponent";

// Styles
const Wrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  margin: 0;
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

// Data
function Carousel(props) {
  let carouselArray = [
    <ProjectComponent
      img="/img/Headshot.jpg"
      name="Voorbeeldpersoon"
      job="baan...?"
      discipline="Multidisciplinair"
      about="basgitarist met passie voor basmuziek"
      description="    Lorem ipsum dolor "
    />,
    <ProjectComponent
      img="/img/Logo.png"
      name="Mendie Devine"
      job="Entrepeneur"
      discipline="Multidisciplinair"
      about="Avp'er in Hart en nieren"
      description="    Lorem ipsum dolor"
    />,
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
      <h2>{data.titles.section3}</h2>
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
    </div>
  );
}

export default Carousel;
