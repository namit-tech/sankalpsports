import React from "react";
import NetImage from "../../Assets/image8.JPG";
import "./aboutus.css";
import Navbar from "../Navbar/Navbar";
import Aboutacademy from "../AboutAcademy/Aboutacademy";
import MoreAcademy from "../MoreAboutAcademy/MoreAcademy";
const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <div className="img-container">
        <img src={NetImage} alt="" />
        <div className="about-img-abttext">
          <div className="gradient-text">ABOUT US</div>
          <p>
            Sankalp Sports Academy empowers athletes with top-tier basketball <br />
            training, expert coaching, and state-of-the-art facilities to excel
            in the game.
          </p>
        </div>
      </div>
      <div className="mission-vision">
        <div className="miss-viss-future">
          <h2>Our Mission</h2>
          <p>
            To provide training, coaching to children <br /> for sports and
            contribute to their <br /> holistic development.
          </p>
          <p>
            To conduct sports league at school, <br /> college and national
            level.
          </p>
        </div>
        <div className="miss-viss-future">
          <h2>The Future</h2>
          <p>
            The Sankalp Sports Academy currently conducts leagues <br /> in all
            categories. In the coming years, <br /> the plan is to have an
            all-women's league as well. <br /> The SSA believes in equal gender
            representation <br />
            and aims to strive for it.
          </p>
        </div>
        <div className="miss-viss-future">
          <h2>Our Vision</h2>
          <p>
            Driven by a deep-rooted passion for the sport, <br /> the academy
            aims to provide world-class sports facilities, <br /> infrastructure
            and coaching to boys and girls.
          </p>
        </div>
      </div>
      <MoreAcademy />
    </div>
  );
};

export default AboutUs;
