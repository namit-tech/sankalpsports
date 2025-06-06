import React from "react";
import "./moreAcademy.css";
import backgroundImg from "../../Assets/bgthree.jpg";
import joinusimage from "../../Assets/bgfour.jpg";
import { TbBallBasketball } from "react-icons/tb";
import carousel1 from "../../Assets/carousel1.jpg";
import carousel2 from "../../Assets/carousel2.jpg";
import carousel3 from "../../Assets/carousel3.jpg";
import { GiWhistle } from "react-icons/gi";
import { MdSportsHandball } from "react-icons/md";
import { PiCourtBasketballDuotone } from "react-icons/pi";
const MoreAcademy = () => {
  return (
    <>
      <div className="more-about">
        <img src={backgroundImg} alt="" className="backgroundImg" />
        <div className="moreabout-imgtext">
          <img src={joinusimage} alt="" className="joinUsImage" />
        </div>
        <div className="moreabout-question">
          <TbBallBasketball className="basketball-iconmore" />
          <h4>Why Join Us?</h4>
        </div>
        <div className="moreabout-data">
          <h1>Elevate Your Game, Expand Your Horizons with Us</h1>
          <p>
            We offer comprehensive sports training in basketball and football{" "}
            for ages 6-21. <br /> Our programs are designed for beginner to
            elite levels and the training is done <br /> in group as well as
            high intensity individual batches focusing the development.
          </p>
        </div>
        <div className="playernum-data">
          <div className="active">
            <p className="digit">200+</p>
            <p>Players</p>
          </div>
          <hr />
          <div className="active">
            <p className="digit">2000+</p>
            <p>Alumni</p>
          </div>
          <hr />
          <div className="active">
            <p className="digit">10+</p>
            <p>Coaches</p>
          </div>
        </div>
        <div className="moreabout-cards">
          <div className="moreabout-card staff">
            <img src={carousel1} alt="" />
            <div className="moreabout-carddetail">
              <GiWhistle className="moreabout-icon" />
              <h3>Elite Skill Mentors</h3>
              <p>
                Dribbling, shooting, defense—master every move with our elite
                trainers.
              </p>
            </div>
          </div>
          <div className="moreabout-card">
            <img src={carousel2} alt="" />
            <div className="moreabout-carddetail">
              <PiCourtBasketballDuotone className="moreabout-icon" />
              <h3>Pro-Level Training Grounds</h3>
              <p>
                Train on top-tier courts with competitive drills like 1v1, 2v2,
                3v3.
              </p>
            </div>
          </div>
          <div className="moreabout-card">
            <img src={carousel3} alt="" />
            <div className="moreabout-carddetail">
              <MdSportsHandball className="moreabout-icon" />
              <h3>Complete Player Evolution</h3>
              <p>
                Boost agility, teamwork & game IQ for success on and off the
                court.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default MoreAcademy;
