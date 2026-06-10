import "./Hero.css";
import kids from "./images/hero.png";
import green_stroke from "./images/green-stroke.png";
import star from "./images/star.png";
import lightening from "./images/lightening-bolt.png";
import handsign from "./images/hand-sign.png";
import dashes from "./images/dashes.png";
import arrow from "./images/arrow.png";
import guitar from "./images/guitar.png";
import lines1 from "./images/lines1.png";

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

          <img id="hand-written-bolt" class="hand-written-icon" src={lightening} alt="Handwritten Lightening Bolt" />
          <img id="hand-written-dashes" class="hand-written-icon" src={dashes} alt="HandWritten Dashes" />
          <img id="hand-written-arrow" class="hand-written-icon" src={arrow} alt="Handwritten Arrow" />
          <img id="hand-written-guitar" class="hand-written-icon" src={guitar} alt="Handwritten Guitar" />
        </div>

        <div className="hero-visual" aria-hidden="true">
            <img id="hand-written-star" class="hand-written-icon" src={star} alt="Handwritten Star" />
            <img id="hand-written-lines-1" class="hand-written-icon" src={lines1} alt="Handwritten Lines" />
            <img src={kids} alt="kids holding guitars" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
