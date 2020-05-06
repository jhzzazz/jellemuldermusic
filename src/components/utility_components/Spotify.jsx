import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  overflow: hidden;
  padding-top: 78.94%;
  /* border: 1px solid black; */

`;
const SpotifyItem = styled.iframe`
  position: absolute;
  top: 0;
  left: 50%;
  transform:translatex(-50%);
  width: 80%;
  height: 100%;
`;

let Spotify = (props) => {
  return (
    <Container>
      <SpotifyItem
        className="Spotify"
        src={props.src}
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
        title=" " 
      />
    </Container>
  );
};

export default Spotify

