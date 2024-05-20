import PropTypes from "prop-types";
import { useRef } from "react";

const SparkBanner = ({ color, title, subtitle, fontColor, small, medium }) => {
  const imageRef = useRef(null);
  const bannerRef = useRef(null);


  return (
    <div
      style={{
        backgroundColor: `${color}`
      }}
    >
      <div className="spark-back-banner" ref={bannerRef}>
        <picture>
          <source srcSet={medium} media="(min-width: 768px)" />
          <img src={small} alt="Banner" ref={imageRef} />
        </picture>
        <div className="spark-back-banner-content">
          <h1
            style={{
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: fontColor === "#000" ? "black" : "transparent",
              backgroundImage: fontColor !== "#000" ? fontColor : "none",
              fontSize: "5vw"
            }}
          >
            {title}
          </h1>
          <p
            style={{
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: fontColor === "#000" ? "black" : "transparent",
              backgroundImage: fontColor !== "#000" ? fontColor : "none",
              fontSize: "1.25vw"
            }}
          >
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

SparkBanner.propTypes = {
  color: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
  title: PropTypes.any.isRequired,
  subtitle: PropTypes.any.isRequired,
  fontColor: PropTypes.any.isRequired,
  small: PropTypes.any.isRequired,
  medium: PropTypes.any.isRequired
};

export default SparkBanner;
