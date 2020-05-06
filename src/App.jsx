import React from "react";
import { data } from "./data/data";
import "./styles/App.scss";
import { Banner } from "./components/Banner";
import Section from "./components/Section";
import { Image } from "./components/utility_components/Image"
// import Video from "./components/Video";
import Footer from "./components/Footer";
import { Contact } from "./components/Contact";
import { Carousel } from "./components/Carousel";
import { Menu } from "./components/Menu";
import { Navbar } from "./components/Navbar";
import { Bio } from "./components/Bio";
import Video from "./components/Video"

function App() {
  return (
    <div className="App">
      {/* Menu */}
      <Menu />
      {/* Navbar */}
      <Navbar />

      <Banner logo={data.imgpath.logo} id="Banner" />
      <Bio width="80%" top="-200px">
        <p>
          ‘Ik geloof in fantasie <br />
          Als je in iets gelooft, bestaat het
          <br />
          Ik heb een hele muzikale droomwereld in mijn hoofd
          <br />
          Een soort vertaling en verlenging van hoe ik de echte wereld zie en
          meemaak
          <br />
          Hoe langer ik mij steeds bevind in mijn muzikale droomwereld, des te
          vrijer en gelukkiger ik mij voel
          <br />
          Hoe mooi is het als je die wereld naar de werkelijkheid kan brengen?’
        </p>
      </Bio>
      <Bio width="100%" title={data.titles.section1 } id={data.titles.section1}>
        <p>
          ‘Ik geloof in fantasie <br />
          Als je in iets gelooft, bestaat het
          <br />
          Ik heb een hele muzikale droomwereld in mijn hoofd
          <br />
          Een soort vertaling en verlenging van hoe ik de echte wereld zie en
          meemaak
          <br />
          Hoe langer ik mij steeds bevind in mijn muzikale droomwereld, des te
          vrijer en gelukkiger ik mij voel
          <br />
          Hoe mooi is het als je die wereld naar de werkelijkheid kan brengen?’
        </p>
      </Bio>

      {/* <Section id={data.titles.section2} title={data.titles.section2}>
        <Video src={data.videopath.video1} />
        <p> {data.stories.story2}</p>
      </Section> */}

      <Carousel id={data.titles.section2} title={data.titles.section2} />
      <Section >
        <Image id={data.titles.section3} src="/img/instagram.jpg"></Image>
      </Section>
      <Section >
        <Video  id={data.titles.section4} src="https://www.youtube.com/embed/Fo4746XZgw8"/>
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
