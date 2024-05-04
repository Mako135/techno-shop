import MoreLink from "../link/MoreLink";
import PropTypes from "prop-types";


const DownloadCard = ({ img, text, linkText, link }) => {
  return (
    <div>
      <div
        className="download-card"
        style={{
          display: "flex",
            width: "100%",
          minHeight: "200px",
          maxWidth: "624px",
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <p className="download-card-title">{text}</p>
        <MoreLink link={link} text={linkText} />
      </div>
    </div>
  );
};

DownloadCard.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
};

export default DownloadCard;
