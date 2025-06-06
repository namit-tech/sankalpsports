

import React, { useRef } from "react";
import "./testimonial.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuoteLeft,
  faQuoteRight,
  faArrowRight,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import coachTest from "../../Assets/coach.jpg";

const Testimonial = () => {
  const scrollContainer = useRef(null);

  const scroll = (direction) => {
    if (scrollContainer.current) {
      const { scrollLeft, clientWidth } = scrollContainer.current;
      const scrollAmount = clientWidth; // Move the container width to show the next slide
      scrollContainer.current.scrollTo({
        left:
          direction === "next"
            ? scrollLeft + scrollAmount
            : scrollLeft - scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="testimonial-container">
      <div className="head-anime">
        <h1 className="test-head">Training Journeys</h1>
        <div className="circle-anime">
          <div className="circular-text-wrapper">
            <svg width="300" height="300" viewBox="0 0 300 300">
              <path
                id="circle-path"
                d="M 150,150 m -100,0 a 100,100 0 1,1 200,0 a 100,100 0 1,1 -200,0"
              />
              <text className="circular-text">
                <textPath href="#circle-path" startOffset="0%">
                  Join Us • Join Us • Join Us  • Join Us  • Join Us  • Join Us • Join Us •
                </textPath>
              </text>
            </svg>
          </div>
        </div>
      </div>
      <button className="scroll-btn prev-btn" onClick={() => scroll("prev")}>
        <FontAwesomeIcon icon={faArrowLeft} className="arrow-icon-left" />
      </button>
      <div className="testimony-div" ref={scrollContainer}>
        {[1, 2, 3, 4, 5, 6].map((item, index) => (
          <div className="test-in" key={index}>
            <FontAwesomeIcon icon={faQuoteLeft} className="test-icon" />
            <FontAwesomeIcon icon={faQuoteRight} className="test-icon" />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
              sunt nam alias architecto odio quisquam quaerat totam maxime,
              nostrum accusantium unde numquam voluptatibus fugit vel, suscipit
              reiciendis velit est error!
            </p>
            <div className="test-image">
              <img src={coachTest} alt="Coach" />
              <div className="test-btn">
                <h1>
                  Liam Smith
                  <br />
                  <span>Chairman</span>
                </h1>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="scroll-btn next-btn" onClick={() => scroll("next")}>
        <FontAwesomeIcon icon={faArrowRight} className="arrow-icon-right" />
      </button>
    </div>
  );
};

export default Testimonial;
