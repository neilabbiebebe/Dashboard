import React from "react";
import Pagetitle from "../elements/Pagetitle";
import Timeline from "../elements/Timeline";

const educationData = [
  {
    id: 1,
    title: "College",
    years: "2022 - Present",
    content:
      "Bohol Island State University Balilihan Campus",
  },
  {
    id: 2,
    title: "High School",
    years: "2013 - 2019",
    content:
      "Catigbian National High School",
  },
  {
    id: 3,
    title: "Elementary",
    years: "2007 - 2012",
    content:
      "Bongbong Elementary School",
  },
];



function Experiences() {
  return (
    <section id="experience">
      <div className="container">
        <Pagetitle title="Educational Attainment" />
        <div className="row">
          <div className="col-md-12">
            <div className="timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden">
              {educationData.map((education) => (
                <Timeline key={education.id} education={education} />
              ))}
              <span className="line"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;
