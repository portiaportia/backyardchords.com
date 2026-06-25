import React from "react";
import "./AllChords.css"

const LETTERS = ["A", "B", "C", "D", "E", "F", "G"];

const AllChords = ({ selectedLetter, onSelectLetter }) => {
  return (
    <section className="all-chords-section section" id="all-chords-selector" aria-labelledby="all-chords-title">
      <div className="all-chords-header">
        <h2 id="all-chords-title" className="section-title">
          All Chords
        </h2>
      </div>

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
      </div>
    </section>
  );
};

export default AllChords;