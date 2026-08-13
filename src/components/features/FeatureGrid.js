import "./css/FeatureGrid.css";

import IntroFeatureCard from "./IntroFeatureCard";
import FeatureCard from "./FeatureCard";

import guitar from "./images/guitar.png";
import chords from "./images/achord.png";
import strums from "./images/strumming.png";
import songs from "./images/songs.png";
import tips from "./images/tips.png";

const FeatureGrid = () => {
  return (
    <section className="feature-grid-section">
      <div className="container">
        <div className="feature-grid">
          <IntroFeatureCard />

          <FeatureCard
            variant="paper"
            title="Lessons"
            image={strums}
            link="/strums"
          />

          <FeatureCard
            variant="green"
            title="Chords"
            image={chords}
            link="/chords"
          />

          <FeatureCard
            variant="blue"
            title="Fretboard"
            image={tips}
            link="/fretboard"
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;