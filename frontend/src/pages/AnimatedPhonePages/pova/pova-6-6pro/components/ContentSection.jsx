import PropTypes from "prop-types";
import '../pova.css'

const ContentSection = ({ children, backImg, backPos }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${backImg})`,
        backgroundPosition: `${backPos}`
      }}
      className="content-container"
    >
      <div className="content-inner">{children}</div>
    </div>
  );
};

ContentSection.propTypes = {
  children: PropTypes.any.isRequired,
  backImg: PropTypes.string.isRequired,
  backPos: PropTypes.string.isRequired
};

export default ContentSection;
