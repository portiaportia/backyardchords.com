import "./css/IntroFeatureCard.css";
import BlueLine from "./images/blue-line.png";
import ArrowRight from "./images/arrow-white.png";

const IntroFeatureCard = () => {
  return (
    <div className="intro-feature">
      <h2 className="intro-feature-title">
          <span className="intro-line intro-line-1">
            Learn it.
          </span>

          <span className="intro-line intro-line-2">
            Play it.
          </span>

          <span className="intro-line intro-line-3">
            Love it.
          </span>
        <img id="blue-line" src={BlueLine} alt="Blue Underline" />
      </h2>

      <p className="intro-feature-text">
        Step-by-step lessons, chord charts, strumming patterns, and fun songs
        made for kids.
      </p>

      <a href="#lessons" className="intro-feature-button">
        <span id="intro-features-button-text">Browse Lessons</span>
        <img src={ArrowRight} id="arrow-right" alt="Right Arrow" />
      </a> 
    </div>
  );
};

export default IntroFeatureCard;