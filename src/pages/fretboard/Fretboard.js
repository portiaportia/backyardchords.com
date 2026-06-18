import { useState } from "react";
import "./css/Fretboard.css";
import stringLetterBackground from "./images/string-letter-background.png";
import stringLine from "./images/string.png";
import fretLine from "./images/fret.png";

const NOTE_NAMES = [
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
  "A",
  "A#",
  "B",
];

const WHOLE_NOTES = ["A", "B", "C", "D", "E", "F", "G"];

const STRINGS = [
  { openNote: "E", label: "1st" },
  { openNote: "B", label: "2nd" },
  { openNote: "G", label: "3rd" },
  { openNote: "D", label: "4th" },
  { openNote: "A", label: "5th" },
  { openNote: "E", label: "6th" },
];

const FRETS = Array.from({ length: 12 }, (_, index) => index + 1);
const FRET_LINES = Array.from({ length: 13 }, (_, index) => index);

const getNoteAtFret = (openNote, fret) => {
  const startIndex = NOTE_NAMES.indexOf(openNote);
  return NOTE_NAMES[(startIndex + fret) % NOTE_NAMES.length];
};

const Fretboard = () => {
  const [selectedNote, setSelectedNote] = useState("");
  const [showAllNotes, setShowAllNotes] = useState(true);

  return (
    <section
      className="fretboard-page page"
      aria-labelledby="fretboard-title"
      style={{
        "--string-bg": `url(${stringLetterBackground})`,
        "--string-line": `url(${stringLine})`,
        "--fret-line": `url(${fretLine})`,
      }}
    >
      <div className="container">
        <div className="page-copy">
          <span className="page-kicker">Fretboard</span>
          <h1 id="fretboard-title" className="page-title">
            Your guitar map.
          </h1>
          <p className="fretboard-text">
            The fretboard is the road map of your guitar.
          </p>
        </div>

        <div className="fretboard-leader-selector">
            <div className="letter-selector-buttons">
              <h3 className="letter-selector-title">
                Show Notes
              </h3>
              <button className={`letter-chooser-note ${showAllNotes ? "active-blue" : ""}`} 
              onClick={() => setShowAllNotes(!showAllNotes)}
              >
                All
              </button>
            { WHOLE_NOTES.map((note) => (
              <button
                key={note}
                className={`letter-chooser-note ${selectedNote === note ? "active" : ""}`} 
              onClick={() => setSelectedNote(selectedNote === note? "": note)}
              >
                {note}
              </button>
            ))}
            </div>
        </div>

        <div className="fretboard-board-shell">
          <div className="fretboard-board-scroll">
            <div className="fretboard-board">
              <div className="fretboard-header">
                <div className="fretboard-header-spacer" />
                <div className="fretboard-header-track" aria-hidden="true">
                  {FRETS.map((fret, index) => (
                    <div
                      key={fret}
                      className="fretboard-fret-number"
                      style={{ "--fret-index": index }}
                    >
                      {fret}
                    </div>
                  ))}
                </div>
              </div>


              {STRINGS.map((stringRow) => (
                <div key={stringRow.label} className="fretboard-row">
                  <div className="fretboard-string-label">
                    <span className="fretboard-string-name">{stringRow.label}</span>
                    <span className="fretboard-string-badge">
                      {stringRow.openNote}
                    </span>
                  </div>

                  <div className="fretboard-track">
                    <div className="fretboard-string-overlay" aria-hidden="true" />

                    <div className="fretboard-fret-overlay" aria-hidden="true">
                      {FRET_LINES.map((line) => (
                        <span
                          key={line}
                          className="fretboard-fret-line"
                          style={{ "--fret-index": line }}
                        />
                      ))}
                    </div>

                    <div className="fretboard-note-layer">
                      {FRETS.map((fret, index) => {
                        const note = getNoteAtFret(stringRow.openNote, fret);

                        return (
                          <span
                            key={fret}
                            className={`fretboard-note ${selectedNote === note ? "active" : showAllNotes ? "": "hidden"}`}
                            style={{ "--fret-index": index }}
                          >
                            {note}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fretboard;