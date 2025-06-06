import React, { useState } from "react";
import FancyCarousel from "react-fancy-circular-carousel";
import "react-fancy-circular-carousel/FancyCarousel.css";
import "./facility.css";
import image1 from "../../Assets/aboutimage.JPG";
import image2 from "../../Assets/image8.JPG";
import image3 from "../../Assets/image3.jpeg";
import image4 from "../../Assets/image4.jpeg";
import image5 from "../../Assets/carousel7.jpg";
import image6 from "../../Assets/image6.jpg";
import court from "../../Assets/court.jpg";
import ballogo from "../../Assets/basketball logo.png";

const Facility = () => {
  const [focusElement, setFocusElement] = useState(0);

  const images = [image1, image2, image3, image4, image5, image6];
  const info = [
    "Dribbling is the foundation of ball control in basketball. Our program enhances hand-eye coordination, agility, and speed, helping players maintain possession while maneuvering through defenders.",
    "Shooting is a critical skill that determines scoring efficiency. Our training focuses on perfecting shooting mechanics, foot positioning, and follow-through to improve accuracy and confidence.",
    "Passing is the key to effective teamwork. We teach precision, timing, and different passing techniques like chest passes, bounce passes, and overhead passes to enhance game dynamics.",
    "Ball handling is essential for navigating through defenses. Our drills focus on improving control, dexterity, and reaction speed, ensuring players can handle the ball under pressure.",
    "Agility training helps players move swiftly and react quickly on the court. Our exercises enhance footwork, balance, and lateral movement to improve defensive and offensive plays.",
    "Strength training builds endurance and resilience for peak performance. We focus on core strength, leg power, and upper-body conditioning to enhance physical endurance and prevent injuries.",
  ];

  const heading = [
    "Dribbling",
    "Shooting",
    "Passing",
    "Ball Handling",
    "Agility",
    "Strength",
  ];

  return (
    <>
      <div className="facility-head">
        <h2>
          Featured
          <img src={ballogo} alt="" className="logo-facility" />
          Programs
        </h2>
        <img className="facility-court" src={court} alt="" />
        <div className="main-facility">
          <FancyCarousel
            images={images}
            setFocusElement={setFocusElement}
            carouselRadius={
              window.innerWidth <= 499
                ? 150
                : window.innerWidth <= 699
                ? 180
                : 220
            }
            peripheralImageRadius={
              window.innerWidth <= 499 ? 35 : window.innerWidth <= 699 ? 40 : 50
            }
            centralImageRadius={
              window.innerWidth <= 499 ? 40 : window.innerWidth <= 699 ? 45 : 50
            }
            focusElementStyling={{
              border:
                window.innerWidth <= 499
                  ? "2px solid #e77241"
                  : "3px solid #e77241",
            }}
            autoRotateTime={3}
            borderWidth={
              window.innerWidth <= 499 ? 3 : window.innerWidth <= 699 ? 4 : 6
            }
            borderHexColor={"333333"}
          />
          {/* Info Box to show focused image and text */}
          <div className="info-box-wrapper">
            <img
              src={images[focusElement]}
              alt={info[focusElement]}
              className="focused-image"
              style={{
                width: "30vw",
                height: "40vh",
                borderRadius: "10px",
                objectFit: "cover",
              }}
            />
            <h4>{heading[focusElement]}</h4>
            <p>{info[focusElement]}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Facility;
