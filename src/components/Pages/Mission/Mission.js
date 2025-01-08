import React from "react";
import "./mission.css";
import seethanam_logo from "../../../assets/seethanam_logo.png";
import seethanamvideo from "../../../assets/seethanam_video.mp4";
import ReactPlayer from "react-player";

const Mission = () => {
  return (
    <div className="mission-container bg-black text-white py-5">
      <div className="container">
        {/* Mission Statement */}
        <div className="text-center mb-5">
          <h3 className="mission-title">"Bringing Hope Through Laughter"</h3>
          <p className="mission-txt">
            Our mission is to uplift underprivileged children in India. Through
            engaging, heartfelt performances, we aim to raise funds that
            directly contribute to education, and essential resources for women
            in need. Our belief is that laughter and storytelling can inspire
            change, foster empathy, and bring communities together. By sharing
            stories that entertain and educate, we aim to create a ripple
            effect of hope and opportunity for every child. Together, let’s
            make a difference—one performance at a time.
          </p>
        </div>

        {/* Seethanam Section */}
        <div className="text-center mb-5">
          <h1 className="mb-3">Seethanam</h1>
          <img
            src={seethanam_logo}
            alt="seethanam_logo"
            className="seethanam-logo img-fluid mb-3"
          />
          <p>
            The Seethanam Foundation (pronounced as see-the-num in Tamil) is a
            volunteer-driven organization dedicated to transforming rural lives
            in India. By implementing outcome-based projects, the foundation
            focuses on making rural communities self-sufficient while
            addressing critical areas such as environmental sustainability,
            food security, health, education, and employment.
          </p>
          <p>
            Seethanam Foundation has chosen Ambalapattu, a village in the lower
            Cauvery delta region in Thanjavur district of Tamil Nadu to be its
            primary place of operation through 2030.
          </p>
          <p>
            Your generous contributions and support play a vital role in
            empowering these initiatives, helping to create a sustainable future
            where rural communities can thrive and prosper.
          </p>
          <p className="fw-bold">
            As a team, we have contributed 1 lakh rupee to the Seethanam
            organization.
          </p>
        </div>

        {/* Video Section */}
        <div className="text-center">
          <ReactPlayer
            url={seethanamvideo} // Use the imported video file as the URL
            controls // Enables play, pause, and volume controls
            width="100%" // Makes the player responsive
            height="360px" // Sets the height of the video player
            style={{ borderRadius: "10px", overflow: "hidden" }} // Optional styling
          />
        </div>
      </div>
    </div>
  );
};

export default Mission;
