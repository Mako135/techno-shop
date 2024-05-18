import PropTypes from "prop-types";
import { useRef } from "react";

const SparkBanner = ({ color, title, subtitle, fontColor }) => {
  const imageRef = useRef(null);
  const bannerRef = useRef(null);
  const medium =
    "https://d3fyizz0b46qgr.cloudfront.net/global/spark-20-pro/en/dist/png/sec3PcBg.png";
  const small =
    "https://d3fyizz0b46qgr.cloudfront.net/global/spark-20-pro/en/dist/png/sec3MbBg.png";

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
              color: "transparent",
              backgroundImage: fontColor,
              fontSize: "4vw"
            }}
          >
            {title}
          </h1>
          <p
            style={{
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              backgroundImage: fontColor,
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
  fontColor: PropTypes.any.isRequired
};

export default SparkBanner;
