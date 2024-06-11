import { Link } from "react-router-dom";
import arrow from "../../assets/arrow.png";
import PropTypes from "prop-types";

const ShopCard = ({ img, title, link }) => {
  return (
    <div className="shop-card">
      <div className="shop-box">
        <img src={img} alt="" height={52} className="shop-img"/>
      </div>
      <p className="shop-title">{title}</p>
      <Link className="shop-links" to={link} target="blank">
        <div className="shop-link">
          <p>В магазин</p>
          <img src={arrow} alt="" height={12} />
        </div>
      </Link>
    </div>
  );
};

ShopCard.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
};

export default ShopCard