import React from "react";
import fire from "./images/fire.png";
import star from "./images/star-filled-in.png";
import barre from "./images/barre.png";
import note from "./images/note.png";

const chordCollections = [
  {
    title: "Campfire Chords",
    description:
      "Easy chords every beginner should know. Great for campfires, singalongs, and first songs.",
    accentClass: "collection-card--warm",
    icon: fire,
  },
  {
    title: "Beginner Chords",
    description:
      "Simple shapes that help new players build confidence and get playing fast.",
    accentClass: "collection-card--cool",
    icon: star,
  },
  {
    title: "Barre Chords",
    description:
      "Level up your playing with essential barre chords and movable shapes.",
    accentClass: "collection-card--soft",
    icon: barre,
  },
  {
    title: "Popular Chords",
    description:
      "Common chords used in hundreds of your favorite songs.",
    accentClass: "collection-card--lavender",
    icon: note,
  },
];

const ChordCollections = () => {
  return (
    <section className="chord-collections section" id="chord-collections" aria-labelledby="chord-collections-title">
      <div className="container">

        <div className="collection-grid">
          {chordCollections.map((item) => (
            <article key={item.title} className={`collection-card card ${item.accentClass}`}>
              <div className="collection-card__top">
                <h3>{item.title}</h3>
                <span className="collection-card__icon" aria-hidden="true">
                  <img src={item.icon} alt="Icon" />
                </span>
              </div>
              <p>{item.description}</p>
              <a href="#all-chords" className="collection-card__link">
                Explore
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChordCollections;