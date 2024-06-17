import { Link } from "react-router-dom";
import arrow from "../../assets/arrow.png";
import PropTypes from "prop-types";

const RecommendedPhones = ({ spec1, spec2, spec3, img, title, link }) => {
  return (
    <div className="recommended-phone-card">
      <h1>{title}</h1>
      <div className="recommended-phone-specs">
        <p>{spec1}</p>
        <div className="vl"></div>
        <p>{spec2}</p>
        <div className="vl"></div>
        <p>{spec3}</p>
      </div>
      <div className="recommended-links">
        <Link className="recommended-link" to="/">
          <button className="buy-btn">Купить</button>
        </Link>
        <Link className="recommended-link" to={`/phones/${link}`}>
          <div className="about-phone">
            <p>Подробнее</p>
            <img src={arrow} alt="" height={12} />
          </div>
        </Link>
      </div>
      <img src={img} alt="" loading="lazy" className="recommended-phone-img" />
    </div>
  );
};

RecommendedPhones.propTypes = {
  spec1: PropTypes.string.isRequired,
  spec2: PropTypes.string.isRequired,
  spec3: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default RecommendedPhones;
