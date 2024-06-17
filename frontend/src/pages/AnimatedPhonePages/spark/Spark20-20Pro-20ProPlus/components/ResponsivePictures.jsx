import PropTypes from "prop-types";



const ResponsivePictures = ({ large, medium, small, color }) => {
  return (
    <div>
      <picture>
        <source srcSet={large} media="(min-width: 1200px)" />
        <source srcSet={medium} media="(min-width: 768px)" />
        <img
          src={small}
          alt="Banner"
          style={{
            width: "100%",
            height: "auto",
            backgroundColor: color,
          }}
        />
      </picture>
    </div>
  );
};

ResponsivePictures.propTypes = {
  small: PropTypes.string.isRequired,
  medium: PropTypes.string.isRequired,
  large: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default ResponsivePictures;
