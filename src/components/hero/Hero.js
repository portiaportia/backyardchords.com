import "./Hero.css";
import kids from "./images/hero.jpeg";
import green_stroke from "./images/green-stroke.png";
import star from "./images/star.png";
import lightening from "./images/lightening-bolt.png";
import handsign from "./images/hand-sign.png";

const Hero = () => {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero-content">
        <div className="hero-copy">

          <h1 id="hero-title" className="hero-title">
            <span className="title-line title-line-1">
                Guitar
            </span>

            <span className="title-line title-line-2">
                Is Better
            </span>

            <span className="title-line title-line-3">
                Together.
            </span>
            <img id="green-stroke" src={green_stroke} alt="Green Paint Stroke" />
          </h1>

          <p className="hero-text">
            Scarlet brings the acoustic chords,<br />
            
            Maverick brings the electric riffs
          </p>

          <a href="#about" className="meet-btn">
            <span className="meet-btn-text">Meet Scarlet &amp; Maverick</span>
          </a>

          <img id="hand-written-star" src={star} alt="Handwritte Star" />
          <img id="hand-written-bolt" src={lightening} alt="Handwritten Lightening Bolt" />
          <img id="hand-written-sign" src={handsign} alt="Handwritten Sign" />
        </div>

        <div className="hero-visual" aria-hidden="true">
            <img src={kids} alt="kids holding guitars" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
