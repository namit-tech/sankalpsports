import React from "react";
import "./coaches.css";

import coachImg from "../../Assets/realimagetwo.jpg";

const Coaches = () => {
  return (
    <>
      <h1 className="coach-head">Our Coaches</h1>
      <div className="coaches-maindiv">
        <div className="coaches-div">
          <div className="coaches-textArea">
            <p className="coaches-subtext">
              At Sankalp Basketball Academy, our expert coaches bring years of
              experience, <br /> professional certifications, and a passion for
              developing young athletes into top-tier players. <br />
            </p>
            <div className="coaches-text">
              <div className="coaches-onetwo">
                <div className="count">01</div>
                <div className="coaches-headtext">
                  <h3>Elite Coaching Staff</h3>
                  <p>
                    Our coaches have trained national and state-level players,
                    helping them reach new heights in their basketball careers.
                  </p>
                </div>
              </div>
              <div className="coaches-onetwo">
                <div className="count">02</div>
                <div className="coaches-headtext">
                  <h3>Professional Certifications</h3>
                  <p>
                    Certified by top sports organizations, our coaches are
                    equipped with the latest training methodologies and
                    performance enhancement techniques.
                  </p>
                </div>
              </div>
            </div>
            <div className="coaches-text">
              <div className="coaches-threefour">
                <div className="count">03</div>
                <div className="coaches-headtext">
                  <h3> Personalized Training Programs</h3>
                  <p>
                    We focus on individual player growth, designing tailored
                    workout plans and skill-building drills to maximize
                    potential.
                  </p>
                </div>
              </div>
              <div className="coaches-threefour">
                <div className="count">04</div>
                <div className="coaches-headtext">
                  <h3>Proven Track Record</h3>
                  <p>
                    With years of experience and numerous success stories, our
                    coaches have transformed beginners into competitive
                    athletes.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="coaches-imagetext">
            <div className="coaches-blank"></div>
            <img src={coachImg} alt="" className="coachImg" />
            <p>
              Meet our dedicated coaching team—experienced mentors shaping the
              future <br /> of basketball with expert training and unwavering
              commitment
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Coaches;
