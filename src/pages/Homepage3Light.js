import React from "react";
import ReactCursorPosition from "react-cursor-position";
import { Element } from "react-scroll";
import Header3 from "../components/layouts/Header3";
import Footer from "../components/layouts/Footer";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import Experiences from "../components/sections/Experiences";
import Herosection from "../components/sections/Herosection";
import Insights from "../components/sections/Services";


function Homepage3Light() {
  document.body.classList.remove("dark");

  return (
    <>
      <Header3 light logoSource="/images/b3.svg" />
      <main className="content-3">
        <Element name="section-home">
          <ReactCursorPosition>
            <Herosection light />
          </ReactCursorPosition>
        </Element>
        <Element name="section-about">
          <About />
        </Element>
        <Element name="section-services">
          <Insights />
        </Element>
        <Element name="section-experiences">
          <Experiences />
        </Element>
        <Element name="section-contact">
          <Contact />
        </Element>
        <div className="spacer" data-height="96"></div>
      </main>
      <Footer light />
    </>
  );
}

export default Homepage3Light;
