import "./css/Journey.css";
import JourneyStep from "./JourneyStep";

const Journey = ({ steps }) => {
  return (
    <section className="journey" aria-labelledby="journey-title">
      <h2 id="journey-title" className="journey-title">
        Our Guitar Journey
      </h2>

      <div className="journey-grid">
        {steps.map((step) => (
          <JourneyStep key={step.year} {...step} />
        ))}
      </div>
    </section>
  );
};

export default Journey;