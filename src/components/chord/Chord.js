import React from "react";
import "./Chord.css";

const clamp = (n, min, max) => Math.max(min, Math.min(max, n));

const Chord = ({
  frets,
  fretCount = 4,
  stringCount = 6,
  startFret = 1,
  barres = [],
  title = "CHORDS",
  showOpenMarkers = true,
  showMutedMarkers = true,
  background
}) => {
  const strings = React.useMemo(() => {
    return new Array(stringCount).fill(0).map((_, i) => frets[i] ?? -1);
  }, [frets, stringCount]);

  const visibleFrets = new Array(fretCount).fill(0).map((_, i) => startFret + i);

  const renderOpenMarkers = () => {
  return strings.map((state, stringIndex) => {
    const left = `${((stringIndex + 0.5) / stringCount) * 100}%`;

    if (state === 0 && showOpenMarkers) {
      return (
        <div
          key={`open-${stringIndex}`}
          className="chord-open-marker"
          style={{ left }}
        >
          o
        </div>
      );
    }

    if (state < 0 && showMutedMarkers) {
      return (
        <div
          key={`muted-${stringIndex}`}
          className="chord-open-marker chord-open-marker-muted"
          style={{ left }}
        >
          x
        </div>
      );
    }

    return null;
  });
};

  const renderStringLines = () => {
    return new Array(stringCount).fill(0).map((_, i) => (
      <div
        key={`string-${i}`}
        className="chord-string-line"
        style={{
          left: `${((i + 0.5) / stringCount) * 100}%`,
        }}
      />
    ));
  };

  const renderRows = () => {
    return new Array(fretCount).fill(0).map((_, rowIndex) => {
      const fretNumber = startFret + rowIndex;
      const isNut = rowIndex === 0 && startFret <= 1;

      const rowDots = strings
        .map((state, stringIndex) => ({ state, stringIndex }))
        .filter(({ state }) => state === fretNumber);

      const rowBarres = barres.filter((barre) => barre.fret === fretNumber);

      return (
        <div
          key={`row-${rowIndex}`}
          className={isNut ? "chord-fret-row chord-fret-row-nut" : "chord-fret-row"}
        >
          <div className="chord-row-overlay">
            {rowDots.map(({ stringIndex }) => (
              <div
                key={`dot-${rowIndex}-${stringIndex}`}
                className="chord-dot"
                style={{
                  left: `${((stringIndex + 0.5) / stringCount) * 100}%`,
                }}
              />
            ))}

            {rowBarres.map((barre, idx) => {
              const from = clamp(barre.fromString, 0, stringCount - 1);
              const to = clamp(barre.toString, 0, stringCount - 1);
              const leftIndex = Math.min(from, to);
              const rightIndex = Math.max(from, to);

              return (
                <div
                  key={`barre-${rowIndex}-${idx}`}
                  className="chord-barre"
                  style={{
                    left: `${(leftIndex / stringCount) * 100}%`,
                    width: `${((rightIndex - leftIndex + 1) / stringCount) * 100}%`,
                  }}
                />
              );
            })}
          </div>
        </div>
      );
    });
  };

  return (
    <div className="chord">
      <div className="chord-card" style={{
        background: background || "#7fa4ff",
      }}>
        <div className="chord-title">{title}</div>

        <div className="chord-open-row">{renderOpenMarkers()}</div>

        <div className="chord-board">
          {renderStringLines()}
          {renderRows()}
        </div>
      </div>
    </div>
  );
};

export default Chord;
