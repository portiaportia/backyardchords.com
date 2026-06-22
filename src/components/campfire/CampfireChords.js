import React from "react";
import fire from "./images/fire.png";
import "./CampfireChords.css";

const CampfireChords = ({ onSelect, colors }) => {
  return (
    <button
      type="button"
      className="campfire-chords-banner"
      onClick={() => onSelect("campfire")}
    >
      <img src={fire} alt="Campfire" />

      <div className="campfire-chords-copy">
        <h3>Campfire Chords</h3>
        <p>
          Easy chords every beginner should know. Great for campfires,
          singalongs, and first songs.
        </p>
      </div>

      <span className="campfire-chords-button">
        Explore Campfire Chords
      </span>
    </button>
  );
};

export default CampfireChords;