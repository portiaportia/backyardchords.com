import "./css/AboutUs.css";
import Player from "./Player";

import scarletPortrait from "./images/scarlet.png";
import maverickPortrait from "./images/maverick.png";
import greenStroke from "./images/green-stroke.png";
import aboutUsBackground from "./images/about-us-background.png";
import aboutUsBackground500 from "./images/about-us-background500.png";
import Video from "./Video";

const ABOUT_PLAYERS = [
  {
    name: "Scarlet",
    accent: "green",
    image: scarletPortrait,
    alt: "Scarlet playing acoustic guitar",
    quote: "My favorite part is turning ideas into songs!",
    facts: [
      {
        icon: "♥",
        title: "Loves",
        text: "Acoustic guitars and songwriting",
      },
      {
        icon: "♫",
        title: "Teaches",
        text: "Chords, strumming patterns, and rhythm",
      },
      {
        icon: "✦",
        title: "Fun Fact",
        text: "Wrote her first song at age 9!",
      },
    ],
  },
  {
    name: "Maverick",
    accent: "blue",
    image: maverickPortrait,
    alt: "Maverick playing electric guitar",
    quote: "I love the energy of rock and sharing it with others!",
    facts: [
      {
        icon: "⚡",
        title: "Loves",
        text: "Electric guitars and riff building",
      },
      {
        icon: "♫",
        title: "Teaches",
        text: "Power chords, lead lines, and rock songs",
      },
      {
        icon: "✦",
        title: "Fun Fact",
        text: "Got his first guitar at age 6!",
      },
    ],
  },
];

const AboutUs = () => {
  return (
    <section id="about" className="about-us-page page" aria-labelledby="about-us-title">
      <div className="container about-us-container">
        <div className="about-us-intro">
          <h1 id="about-us-title" className="about-us-title">
            <span className="about-us-title-dark">About</span>
            <span className="about-us-title-accent">Us</span>
            <img src={greenStroke} id="about-title-stroke" alt="" />
          </h1>

          <p className="about-us-copy">
            Backyard Chords was created to make guitar learning simple, fun,
            and kid-friendly. We believe every kid can play guitar—and have a
            blast doing it.
          </p>

          <picture className="about-us-background">
  <source
    media="(max-width: 700px)"
    srcSet={aboutUsBackground500}
  />
  <img
    id="about-background-image"
    src={aboutUsBackground}
    alt="background camp site"
    loading="eager"
  />
</picture>
        </div>
        <Video />
        <div className="about-us-players">
          {ABOUT_PLAYERS.map((player) => (
            <Player key={player.name} {...player} />
          ))}
        </div>

        <div className="about-us-closing">
          <span className="about-us-closing-text">
            Learn it. Play it. Love it.
          </span>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;