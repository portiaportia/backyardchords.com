import React, { useState } from "react";
import "./Chords.css";
import CampfireChords from "../../components/campfire/CampfireChords";
import Chord from "../../components/chord/Chord";
import AllChords from "../../components/allchords/AllChords";
import campfirekids from "./images/campfire-kids.png";
import fireplace from "./images/fireplace.png";
import campfireBgShape from "./images/campfire-background.png";

const colors = {
  yellow: "#F8EFBF",
  green: "#E7F0D9",
  purple: "#EFE7F8",
  peach: "#FCE7DD",
  blue: "#E8F2FF",
  mint: "#DFF5EE",
};

const chordSets = {
  campfire: {
    title: "Campfire Chords",
    subtitle: "Easy chords every beginner should know.",
    chords: [
      { title: "C", frets: [-1, 3, 2, 0, 1, 0], background: colors.yellow },
      { title: "G", frets: [3, 2, 0, 0, 0, 3], background: colors.green },
      { title: "D", frets: [-1, -1, 0, 2, 3, 2], background: colors.purple },
      { title: "A", frets: [-1, 0, 2, 2, 2, 0], background: colors.peach },
      { title: "A Minor", frets: [-1, 0, 2, 2, 1, 0], background: colors.blue },
      { title: "E", frets: [0, 2, 2, 1, 0, 0], background: colors.mint },
      { title: "E Minor", frets: [0, 2, 2, 0, 0, 0], background: colors.yellow },
    ],
  },
  A: {
    title: "A Chords",
    subtitle: "Different ways to play the A chord.",
    chords: [
      { title: "A Major", frets: [-1, 0, 2, 2, 2, 0], background: colors.peach },
      { title: "A Minor", frets: [-1, 0, 2, 2, 1, 0], background: colors.blue },
      { title: "A7", frets: [-1, 0, 2, 0, 2, 0], background: colors.yellow },
      { title: "Asus2", frets: [-1, 0, 2, 2, 0, 0], background: colors.green },
      { title: "Asus4", frets: [-1, 0, 2, 2, 3, 0], background: colors.mint },
    ],
  },
  B: {
    title: "B Chords",
    subtitle: "Different ways to play the B chord.",
    chords: [
      { title: "B Major", frets: [-1, 2, 4, 4, 4, 2], background: colors.yellow },
      { title: "B Minor", frets: [-1, 2, 4, 4, 3, 2], background: colors.purple },
      { title: "B7", frets: [-1, 2, 1, 2, 0, 2], background: colors.peach },
      { title: "Bsus2", frets: [-1, 2, 4, 4, 2, 2], background: colors.green },
      { title: "Bsus4", frets: [-1, 2, 4, 4, 5, 2], background: colors.mint },
    ],
  },
  C: {
    title: "C Chords",
    subtitle: "Different ways to play the C chord.",
    chords: [
      { title: "C Major", frets: [-1, 3, 2, 0, 1, 0], background: colors.yellow },
      { title: "C Minor", frets: [-1, 3, 5, 5, 4, 3], background: colors.purple },
      { title: "C7", frets: [-1, 3, 2, 3, 1, 0], background: colors.peach },
      { title: "Csus2", frets: [-1, 3, 0, 0, 1, 0], background: colors.green },
      { title: "Csus4", frets: [-1, 3, 3, 0, 1, 0], background: colors.mint },
    ],
  },
  D: {
    title: "D Chords",
    subtitle: "Different ways to play the D chord.",
    chords: [
      { title: "D Major", frets: [-1, -1, 0, 2, 3, 2], background: colors.purple },
      { title: "D Minor", frets: [-1, -1, 0, 2, 3, 1], background: colors.peach },
      { title: "D7", frets: [-1, -1, 0, 2, 1, 2], background: colors.yellow },
      { title: "Dsus2", frets: [-1, -1, 0, 2, 3, 0], background: colors.green },
      { title: "Dsus4", frets: [-1, -1, 0, 2, 3, 3], background: colors.mint },
    ],
  },
  E: {
    title: "E Chords",
    subtitle: "Different ways to play the E chord.",
    chords: [
      { title: "E Major", frets: [0, 2, 2, 1, 0, 0], background: colors.mint },
      { title: "E Minor", frets: [0, 2, 2, 0, 0, 0], background: colors.blue },
      { title: "E7", frets: [0, 2, 0, 1, 0, 0], background: colors.yellow },
      { title: "Esus2", frets: [0, 2, 4, 4, 0, 0], background: colors.green },
      { title: "Esus4", frets: [0, 2, 2, 2, 0, 0], background: colors.peach },
    ],
  },
  F: {
    title: "F Chords",
    subtitle: "Different ways to play the F chord.",
    chords: [
      { title: "F Major", frets: [1, 3, 3, 2, 1, 1], background: colors.peach },
      { title: "F Minor", frets: [1, 3, 3, 1, 1, 1], background: colors.purple },
      { title: "F7", frets: [1, 3, 1, 2, 1, 1], background: colors.yellow },
      { title: "Fsus2", frets: [1, 3, 3, 0, 1, 1], background: colors.green },
      { title: "Fsus4", frets: [1, 3, 3, 3, 1, 1], background: colors.mint },
    ],
  },
  G: {
    title: "G Chords",
    subtitle: "Different ways to play the G chord.",
    chords: [
      { title: "G Major", frets: [3, 2, 0, 0, 0, 3], background: colors.green },
      { title: "G Minor", frets: [3, 5, 5, 3, 3, 3], background: colors.purple },
      { title: "G7", frets: [3, 2, 0, 0, 0, 1], background: colors.yellow },
      { title: "Gsus2", frets: [3, 0, 0, 0, 0, 3], background: colors.blue },
      { title: "Gsus4", frets: [3, 3, 0, 0, 1, 3], background: colors.peach },
    ],
  },
};

const Chords = () => {
  const [selectedLetter, setSelectedLetter] = useState("campfire");
  const activeSet = chordSets[selectedLetter] || chordSets.campfire;

  return (
    <section className="chords-page page">
      <div className="container">
        <section className="chords-hero">
          <div className="chords-hero__copy">
            <span className="page-kicker">Chords</span>

            <h1 className="page-title">Learn Guitar Chords</h1>

            <p className="fretboard-text">
              Chords are the building blocks of songs.
            </p>

            <div className="chords-hero__feature">
              <CampfireChords
                onSelect={() => setSelectedLetter("campfire")}
                colors={colors}
              />
            </div>
          </div>

          <div id="chords-hero" aria-hidden="true">
            <img className="hero-bg-shape" src={campfireBgShape} alt="" />
            <img className="fireplace" src={fireplace} alt="fireplace" />
            <img id="campfire-kids-image" src={campfirekids} alt="" />
          </div>
        </section>

        <AllChords
          selectedLetter={selectedLetter}
          onSelectLetter={setSelectedLetter}
        />

        <section className="campfire-chords chord-list" id="all-chords">
          <h2 className="section-title">{activeSet.title}</h2>

          <p className="sub-text">{activeSet.subtitle}</p>

          <div className="campfire-chord-grid chord-board-grid">
            {activeSet.chords.map((chord) => (
              <Chord
                key={chord.title}
                title={chord.title}
                frets={chord.frets}
                background={chord.background}
              />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Chords;