import React from "react";
// import Auxi from '../hoc/Auxi';
import Image from "../assets/suhash.jpg";
import gh from "../assets/logos/logo-github.svg";
import ln from "../assets/logos/logo-linkedin.svg";
import Resume from "../assets/Resume-SuhashBollu.pdf";
import Button from "../components/UI/Button/Button";
import "./Home.css";

const home = () => {
  return (
    <div className="Home">
      <img className="photo" src={Image} alt="" />
      <div className="desc">
        <h1>Suhash Bollu</h1>
        <h3 style={{ padding: "0 10%" }}>
          Software Development Engineer II at Expedia Group
        </h3>
        <p style={{ padding: "0 10%" }}>
          Software Engineer with over 3 years of practical experience building
          large-scale systems, skilled at working in agile development
          environments and collaborating effectively within diverse teams.
        </p>
        {/* <a className="resume" href={Resume} target="_blank">
          View Resume
        </a> */}
        <div className="logos">
          <a href="https://github.com/SuhashBollu" target="_blank">
            <img
              style={{
                width: "50px",
                backgroundColor: "white",
                marginRight: "5px",
                borderRadius: "5px",
              }}
              className="logo"
              src={gh}
              alt="GitHub"
            />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/suhash-bollu/">
            <img
              style={{
                width: "50px",
                backgroundColor: "white",
                marginLeft: "5px",
                borderRadius: "5px",
              }}
              className="logo"
              src={ln}
              alt="LinkedIn"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default home;
