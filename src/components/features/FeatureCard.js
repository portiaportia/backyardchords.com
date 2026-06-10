import "./css/FeatureCard.css";

const FeatureCard = ({
  variant,
  title,
  image,
  link
}) => {
  return (
    <a href={link} className={`feature-card feature-card-${variant}`}>
      <h3 className="feature-card-title">
        {title}
      </h3>

      <div className="feature-card-image-container">
        <img
          className="feature-card-image"
          src={image}
          alt=""
          aria-hidden="true"
        />
      </div>
    </a>
  );
};

export default FeatureCard;