const PlayerFact = ({ accent, icon, title, text }) => {
  return (
    <div className="player-fact">
      <span className={`player-fact-icon is-${accent}`} aria-hidden="true">
        {icon}
      </span>

      <div className="player-fact-copy">
        <h3 className="player-fact-title">{title}:</h3>
        <p className="player-fact-text">{text}</p>
      </div>
    </div>
  );
};

export default PlayerFact;