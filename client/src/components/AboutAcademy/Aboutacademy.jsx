import React from "react";
import "./aboutacademy.css";
import { TbBallBasketball } from "react-icons/tb";
import teamImage from "../../Assets/aboutacademy.JPG";
import teamImage2 from "../../Assets/aboutimage.JPG";
import coach from "../../Assets/headcoach.jpg";
import { RiDoubleQuotesR } from "react-icons/ri";
// import basketlogo from "../../Assets/basketball logo.png";
import Marquee from "react-fast-marquee";
const Aboutacademy = () => {
  return (
    <>
      <div className="about-flexdiv">
        <div className="about-text">
          <div className="about-question">
            {/* <TbBallBasketball className="basketball-icon" /> */}
            <h3>Why Join Us?</h3>
          </div>
          <h1>We Don't Just Coach, We Craft World Class-Champions</h1>
          <p>
            🏀 Elite Skill Development – Improve dribbling, shooting, passing.{" "}
            <br />
            🏋️ Strength & Conditioning – Enhance endurance, agility. <br />
            🎯 Game Intelligence – Master court awareness, teamwork. <br />
            🏆 Competitive Exposure – Train under real-match conditions. <br />
            🎓 Mentorship & Growth – Learn discipline, leadership.
          </p>
          <div className="coach-text">
            <p>
              With extensive international coaching experience in Dubai, Sunil
              Kumar Dhaka has trained students at premier international schools.
              His expertise in physical education and basketball coaching has
              shaped young athletes in competitive environments.
            </p>
            <div className="coach-info">
              <img src={coach} alt="" />
              <div>
                <h3>Sunil Kumar Dhaka</h3>
                <p>Head Coach</p>
              </div>
            </div>
            <RiDoubleQuotesR className="quotes-icon" />
          </div>
        </div>
        <div className="about-sectionTwo">
          <img className="about-imageone" src={teamImage} alt="" />
          <img className="about-imagetwo" src={teamImage2} alt="" />
        </div>
      </div>
      <Marquee autoFill pauseOnHover>
        <div className="marquee-container">
          <div className="marquee-content">
            <div className="marquee-text">
              Join Us,Now
              <TbBallBasketball className="basketicon" />
            </div>
          </div>
        </div>
      </Marquee>
    </>
  );
};

export default Aboutacademy;
