import React from "react";
import "./AllChords.css"

const LETTERS = ["A", "B", "C", "D", "E", "F", "G"];

const AllChords = ({ selectedLetter, onSelectLetter }) => {
  return (
  <section className="all-chords-section section" id="all-chords-selector" aria-labelledby="all-chords-title">
      <div className="letter-selector-buttons chord-letters">
        {LETTERS.map((note) => (
          <button
            key={note}
            type="button"
            className={`letter-chooser-note ${selectedLetter === note ? "active-blue" : ""}`}
            onClick={() => onSelectLetter(note)}
          >
            {note}
          </button>
        ))}
         <button
            type="button"
            id="campfire-chords-button"
            className={`letter-chooser-note ${selectedLetter === 'campfire' ? "active-blue" : ""}`}
            onClick={() => onSelectLetter("campfire")}>
              Campfire Chords
          </button>
      </div>
     
    </section>
  );
};

export default AllChords;