const JourneyStep = ({ year, accent, icon, title }) => {
  return (
    <article className={`journey-step is-${accent}`}>
      <span className={`journey-step-icon is-${accent}`} aria-hidden="true">
        {icon}
      </span>

      <div className="journey-step-copy">
        <h3 className="journey-step-year">{year}</h3>
        <p className="journey-step-title">{title}</p>
      </div>
    </article>
  );
};

export default JourneyStep;