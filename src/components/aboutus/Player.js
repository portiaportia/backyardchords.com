import "./css/Player.css";
import PlayerFact from "./PlayerFact";

const Player = ({ name, accent, image, alt, facts, quote }) => {
  return (
    <article className={`player-card is-${accent}`}>
      <div className={`player-card-ribbon is-${accent}`}>Meet {name}</div>

      <div className="player-card-grid">
        <div className="player-card-media">
          <span className="player-card-splash" aria-hidden="true" />
          <img className="player-card-image" src={image} alt={alt} />
        </div>

        <div className="player-card-content">
          <div className="player-card-facts">
            {facts.map((fact) => (
              <PlayerFact key={fact.title} accent={accent} {...fact} />
            ))}
          </div>

          <blockquote className="player-card-quote">{quote}</blockquote>
        </div>
      </div>
    </article>
  );
};

export default Player;