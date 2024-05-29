import MoreLink from "../link/MoreLink";
import PropTypes from "prop-types";

const DownloadCard = ({ img, text, color, linkText, link }) => {
  return (
    <div>
      <div className="download-card">
        <img src={img} alt="" />
        <div className="download-card-content">
          <p className="download-card-title" style={{color}}>
            {text}
          </p>
          <MoreLink link={link} color={color} text={linkText} />
        </div>
      </div>
    </div>
  );
};

DownloadCard.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  color: PropTypes.string,
  img: PropTypes.string.isRequired
};

export default DownloadCard;
