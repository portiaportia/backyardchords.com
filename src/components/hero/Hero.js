import "./Hero.css";
import kids500 from "./images/hero-kids-500.png";
import kids900 from "./images/hero-kids-900.png";
import kids1400 from "./images/hero-kids-1400.png";
import green_stroke from "./images/green-stroke.png";
import star from "./images/star.png";
import lightening from "./images/lightening-bolt.png";
import handsign from "./images/hand-sign.png";
import dashes from "./images/dashes.png";
import arrow from "./images/arrow.png";
import guitar from "./images/guitar.png";
import lines1 from "./images/lines1.png";
import heroBgShape from "./images/blue-green-background.png";
import heroBgShape900 from "./images/blue-green-background-900.png";
import heroBgShape500 from "./images/blue-green-background-500.png";

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
            <picture>
              <source
                media="(max-width: 700px)"
                srcSet={heroBgShape500}
              />
              <source
                media="(max-width: 1200px)"
                srcSet={heroBgShape900}
              />
              <img
                className="hero-bg-shape"
                src={heroBgShape}
                alt=""
                loading="eager"
              />
            </picture>
            <picture>
              <source
                media="(max-width: 700px)"
                srcSet={kids500}
              />
              <source
                media="(max-width: 1200px)"
                srcSet={kids900}
              />
              <img
                id="kids-hero-image"
                src={kids1400}
                alt="kids holding guitars"
                loading="eager"
              />
            </picture>
        </div>
      </div>
    </section>
  );
}

export default Hero;
