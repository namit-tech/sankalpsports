import React, { useState } from "react";
import headcoach from "../../Assets/headcoach.jpg";
import "./navcoaches.css";
import NetImage from "../../Assets/image8.JPG";
import founder from "../../Assets/azad.jpg";

const NavCoaches = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [activeCoach, setActiveCoach] = useState('head'); // 'head' or 'founder'

  const timelineData = {
    head: [
      {
        title: "PE Teacher",
        subtitle: "The Indian High School, Dubai",
        date: "2013-2019",
        description: "Taught physical education and developed athletic programs.",
      },
      {
        title: "Head Basketball Coach",
        subtitle: "Indian Club, Dubai",
        date: "2015-2020",
        description: "Led teams to regional championships.",
      },
      {
        title: "FIBA Referee",
        subtitle: "Certified in Dubai",
        date: "2023",
        description: "Received official FIBA referee certification.",
      },
      {
        title: "Basketball Coach",
        subtitle: "Sankalp Basketball Academy",
        date: "2024-Present",
        description: "Training elite youth basketball players.",
      },
    ],
    founder: [
      {
        title: "Founder & Director",
        subtitle: "Sankalp Sports Academy",
        date: "2010-Present",
        description: "Founded the academy with a vision to develop basketball talent at grassroots level and nurture young players.",
      },
      {
        title: "Professional Teams Coach",
        subtitle: "Indian Air Force & DPS Vasant Kunj",
        date: "2001-Present",
        description: "Headed professional teams for four years, coached Indian Air Force team (2001-2002), and currently coaches DPS Vasant Kunj team.",
      },
      {
        title: "Event Organizer",
        subtitle: "Basketball Tournaments",
        date: "2016-Present",
        description: "Organized various basketball events including Zonals, Invitational Tournaments, Inter-DPS Championships, and Senior Sankalp Basketball Leagues in Gurugram.",
      },
      {
        title: "Qualified Coach",
        subtitle: "National Institute of Sports",
        date: "1990s",
        description: "Received professional coaching certification from the prestigious National Institute of Sports.",
      },
    ]
  };

  const handleItemClick = (index) => {
    setActiveItem(activeItem === index ? null : index);
  };

  const coachInfo = {
    head: {
      name: "Sunil Kumar Dhaka",
      role: "Physical Education Expert & Basketball Coach",
      bio: "A dedicated professional with over a decade of experience in physical education and basketball coaching across premier institutions in Dubai.",
      image: headcoach
    },
    founder: {
      name: "Azad Singh",
      role: "Founder & Head Coach",
      bio: "Son of Sh. Sukhpal Singh, born on 26th January 1968. A qualified coach from National Institute of Sports with extensive experience in professional team management and player development. Committed to taking the academy to greater heights through dedication and perseverance.",
      image: founder 
    }
  };

  return (
    <>
      <div className="img-container">
        <img src={NetImage} alt="" />
        <div className="img-abttext">
          <div className="gradient-text">OUR COACHES</div>
          <p>
            Meet our dedicated coaching staff who bring professional expertise <br />
            and passion to player development.
          </p>
        </div>
      </div>
      
      <div className="coach-selector">
        <button 
          className={`coach-tab ${activeCoach === 'founder' ? 'active' : ''}`}
          onClick={() => setActiveCoach('founder')}
        >
          Founder
        </button>
        <button 
          className={`coach-tab ${activeCoach === 'head' ? 'active' : ''}`}
          onClick={() => setActiveCoach('head')}
        >
          Head Coach
        </button>
      </div>

      <div className="timeline-container-main">
        <div className="hero-section">
          <div className="profile-container">
            <div className="profile-photo">
              <img
                src={coachInfo[activeCoach].image}
                alt="Coach profile"
                className="headcoach-img"
              />
            </div>
            <div className="decorative-circle"></div>
          </div>

          <div className="profile-info">
            <h1 className="profile-title">{coachInfo[activeCoach].name}</h1>
            <p className="profile-subtitle">
              {coachInfo[activeCoach].role}
            </p>
            <p className="profile-description">
              {coachInfo[activeCoach].bio}
            </p>
          </div>
        </div>
        
        <div className="timeline-footer">
          <p>Click on any timeline item to see more details</p>
        </div>
        
        <div className="timeline-wrapper">
          <div className="timeline">
            <div className="timeline-line"></div>

            {timelineData[activeCoach].map((item, index) => (
              <div
                key={index}
                className={`timeline-item ${
                  index % 2 === 0 ? "left" : "right"
                }`}
              >
                <div
                  className={`timeline-dot ${
                    activeItem === index ? "active" : ""
                  }`}
                  onClick={() => handleItemClick(index)}
                ></div>

                <div
                  className={`timeline-content ${
                    activeItem === index ? "active" : ""
                  } ${index % 2 === 0 ? "text-right" : "text-left"}`}
                  onClick={() => handleItemClick(index)}
                >
                  <h3 className="item-title">{item.title}</h3>
                  <h4 className="item-subtitle">{item.subtitle}</h4>
                  <span className="item-date">{item.date}</span>

                  <div
                    className={`item-description ${
                      activeItem === index ? "expanded" : ""
                    }`}
                  >
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavCoaches;