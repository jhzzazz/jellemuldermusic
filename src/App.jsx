import React from "react";
import { data } from "./data/data";
import "./styles/App.scss";
import { Banner } from "./components/Banner";
import Section from "./components/Section";
import { Image } from "./components/utility_components/Image";
// import Video from "./components/Video";
import Footer from "./components/Footer";
import { Contact } from "./components/Contact";
import { Carousel } from "./components/Carousel";
import { Menu } from "./components/Menu";
import { Navbar } from "./components/Navbar";
import { Bio } from "./components/Bio";
import Video from "./components/Video";
import Spotify from "./components/utility_components/Spotify";

function App() {
  return (
    <div className="App">
      {/* Menu */}
      <Menu />
      {/* Navbar */}
      <Navbar id="Nav" />
      <br />
      <br />
      <br />
      <Section id={data.titles.section1}>
        <Image src="/img/cuddling.jpg" />
        <h2>Available now</h2>
      </Section>
      {/* spotify */}
      <div className="flex-container">
        <Section id={data.titles.section2}>
          <Image id={data.titles.section2} src="/img/instagram.jpg"></Image>
        </Section>
        <Section id={data.titles.section3}>
          <Spotify src="https://open.spotify.com/embed/album/5aaUO87D2vbkRe6O1SxCPB"></Spotify>
          {/* video */}
        </Section>
        </div>
        <Section id={data.titles.section4}>
          <Video src="https://www.youtube.com/embed/0OEH3BjEv8s" />
          <p>
            I make music for when you're feeling romantic, brokenhearted or when
            you are in dire need of a soothing voice... 'Let's get back to the
            cuddling' and 'Oh honey, I don't love you but I'm just happier with
            you' sum up what my first single 'Cuddling' is about. It's about the
            desire to just go back to the beginning of a relationship, despite
            knowing you're not in love anymore.
          </p>
        </Section>
      <Contact
        title={data.titles.section3}
        mail={data.contactinfo.email}
        id={data.titles.section3}
      />
      <Footer name={data.titles.siteTitle} mail={data.contactinfo.email} />
    </div>
  );
}

export default App;
