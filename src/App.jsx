import React from "react";
import { data } from "./data/data";
import "./styles/App.scss";
import { Banner } from "./components/Banner";
import Section from "./components/Section";
import Image from "./components/utility_components/Image";
import Video from "./components/Video";
import Footer from "./components/Footer";
import {Contact} from "./components/Contact";
import Carousel from "./components/Carousel";
import { Menu } from "./components/Menu";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="App">
      {/* Menu */}
      <Menu />
      {/* Navbar */}
      <Navbar />

      <Banner logo={data.imgpath.logo} id="Banner" />
      <Section id={data.titles.section1} title={data.titles.section1}>
        <p>{data.stories.bio}</p>
        <Image src={data.imgpath.logo} height="50px" />
      </Section>

      <Section id={data.titles.section2} title={data.titles.section2}>
        <Video src={data.videopath.video1} />
        <p> {data.stories.story2}</p>
      </Section>

      <Carousel id={data.titles.section3} title={data.titles.section3} />
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
