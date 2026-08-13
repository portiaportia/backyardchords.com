import { Link } from "react-router-dom";
import "./css/IntroFeatureCard.css";
import BlueLine from "./images/blue-line.png";
import ArrowRight from "./images/arrow-white.png";

const IntroFeatureCard = () => {
  return (
    <div className="intro-feature">
      <h2 className="intro-feature-title">
          <span className="intro-line intro-line-1">
            Learn it. Play It.
          </span>

          <span className="intro-line intro-line-2">
            Love it.
          </span>
        <img id="blue-line" src={BlueLine} alt="Blue Underline" />
      </h2>

     

      <Link
  to="/lessons"
  className="intro-feature-button"
>
  <span id="intro-features-button-text">
    Browse Lessons
  </span>

  <img
    src={ArrowRight}
    id="arrow-right"
    alt=""
  />
</Link>
    </div>
  );
};

export default IntroFeatureCard;