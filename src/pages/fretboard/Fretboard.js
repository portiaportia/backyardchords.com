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
  return (
    <section
      className="fretboard-page"
      aria-labelledby="fretboard-title"
      style={{
        "--string-bg": `url(${stringLetterBackground})`,
        "--string-line": `url(${stringLine})`,
        "--fret-line": `url(${fretLine})`,
      }}
    >
      <div className="container">
        <div className="fretboard-copy">
          <span className="fretboard-kicker">Fretboard</span>
          <h1 id="fretboard-title" className="fretboard-title">
            Your guitar map.
          </h1>
          <p className="fretboard-text">
            The fretboard is the road map of your guitar. Learn the notes. Find
            the patterns. Play anywhere.
          </p>
        </div>

        <div className="fretboard-board">
          <div className="fretboard-header">
            <div className="fretboard-header-spacer" />
            {FRETS.map((fret) => (
              <div key={fret} className="fretboard-fret-number">
                {fret}
              </div>
            ))}
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
                        className="fretboard-note"
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
    </section>
  );
};

export default Fretboard;