import "./Hero.css";
import kids from "./hero.jpeg";

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
          </h1>

          <p className="hero-text">
            Scarlet brings the acoustic chords,<br />
            
            Maverick brings the electric riffs
          </p>
        </div>

        <div className="hero-visual" aria-hidden="true">
            <img src={kids} alt="kids holding guitars" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
