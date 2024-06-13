import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { GoArrowRight } from "react-icons/go";

const MoreLink = ({ link, color, text }) => {
  return (
    <div>
      <Link className="more-links" to={link} target="_blank">
        <div className="more-link">
          <p style={{ color }}>{text}</p>
          <GoArrowRight style={{ color }} fontSize={20}/>
        </div>
      </Link>
    </div>
  );
};


MoreLink.propTypes = {
  link: PropTypes.string,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default MoreLink;
