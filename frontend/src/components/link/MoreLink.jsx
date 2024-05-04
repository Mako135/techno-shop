import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";

const MoreLink = ({ link, color, text }) => {
  return (
    <div>
      <Link className="more-links" to={link}>
        <div className="more-link">
          <p style={{ color }}>{text}</p>
          <GoArrowRight style={{ color }} fontSize={20}/>
        </div>
      </Link>
    </div>
  );
};

export default MoreLink;
