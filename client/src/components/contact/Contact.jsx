import React, { useRef } from "react";
import NetImage from "../../Assets/image8.JPG";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import emailjs from "@emailjs/browser";
import "./contact.css";

// Fix for default marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const Contact = () => {
  // Coordinates for locations
  const Shikshantar = [28.45429373106827, 77.06419639999999];
  const American = [28.45713496241646, 77.08900240555279];
  const form = useRef();

  // Function to handle map click and redirect to Google Maps with directions
  const handleMapClick = (lat, lng, locationName) => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=driving&destination_place_id=${encodeURIComponent(
      locationName
    )}`;
    window.open(url, "_blank");
  };

  // Function to send email
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8axj398",
        "template_nn1y3f2",
        form.current,
        "hSqEtc93kvB4jWi96"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          alert("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <>
      <div className="img-container">
        <img src={NetImage} alt="" />
        <div className="img-abttext">
          <div className="gradient-text">CONTACT US</div>
          <p>
            Have questions or need assistance? Contact us today! Our dedicated{" "}
            <br />
            team is ready to provide the support and information you need.
          </p>
        </div>
      </div>
      <div>
        <div className="navigation-container">
          <h1>Our Locations</h1>

          <div className="location-block">
            <div
              className="map-container"
              onClick={() =>
                handleMapClick(
                  Shikshantar[0],
                  Shikshantar[1],
                  "Shikshantar School, South city 1, Gurgaon"
                )
              }
              style={{ cursor: "pointer" }}
            >
              <MapContainer
                center={Shikshantar}
                zoom={15}
                scrollWheelZoom={false}
                style={{
                  height: "300px",
                  width: "100%",
                  borderRadius: "8px",
                  pointerEvents: "none",
                }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={Shikshantar}>
                  <Popup>Shikshantar School, South city 1, Gurgaon</Popup>
                </Marker>
              </MapContainer>
              <div className="map-overlay">
                Click for directions in Google Maps
              </div>
            </div>

            <div className="location-info">
              <h2>Shikshantar Academy</h2>
              <div className="section">
                <h3>Location</h3>
                <p>Shikshantar School, South city 1, Gurgaon</p>
              </div>
              <div className="section">
                <h3>Contact</h3>
                <p>+44 123 456 7890</p>
              </div>
              <div className="section">
                <h3>Hours</h3>
                <p>Mon-Fri: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>

          <div className="location-block">
            <div
              className="map-container"
              onClick={() =>
                handleMapClick(
                  American[0],
                  American[1],
                  "Excelsior American School, Sector 43, Gurgaon"
                )
              }
              style={{ cursor: "pointer" }}
            >
              <MapContainer
                center={American}
                zoom={15}
                scrollWheelZoom={false}
                style={{
                  height: "300px",
                  width: "100%",
                  borderRadius: "8px",
                  pointerEvents: "none",
                }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={American}>
                  <Popup>Excelsior American School, Sector 43, Gurgaon</Popup>
                </Marker>
              </MapContainer>
              <div className="map-overlay">
                Click for directions in Google Maps
              </div>
            </div>

            <div className="location-info">
              <h2>American School Academy</h2>
              <div className="section">
                <h3>Location</h3>
                <p>Excelsior American School, Sector 43, Gurgaon</p>
              </div>
              <div className="section">
                <h3>Contact</h3>
                <p>+1 212 555 7890</p>
              </div>
              <div className="section">
                <h3>Hours</h3>
                <p>Mon-Fri: 8:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>

          <hr className="divider" />

          <form className="contact-form" ref={form} onSubmit={sendEmail}>
            <h3>Name *</h3>
            <div className="input-field">
              <input
                type="text"
                name="user_name"
                placeholder="Your name here"
                required
              />
            </div>

            <div className="input-field">
              <input
                type="email"
                name="user_email"
                placeholder="Email Address *"
                required
              />
            </div>

            <div className="input-field">
              <input
                type="tel"
                name="user_phone"
                placeholder="Telephone..."
                required
              />
            </div>

            <div className="input-field">
              <input
                type="text"
                name="subject"
                placeholder="Subject *"
                required
              />
            </div>

            <p>How can we help you?</p>

            <h3>Comments / Questions *</h3>
            <div className="input-field">
              <textarea
                name="message"
                placeholder="Comments"
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
