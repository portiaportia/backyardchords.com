import "./css/FeatureCard.css";
import { HashLink } from 'react-router-hash-link';

const FeatureCard = ({
  variant,
  title,
  image,
  link
}) => {
  return (
    <HashLink smooth to={link} className={`feature-card feature-card-${variant}`}>
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
    </HashLink>
  );
};

export default FeatureCard;