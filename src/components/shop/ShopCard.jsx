import { Link } from "react-router-dom";
import arrow from "../../assets/arrow.png";

// eslint-disable-next-line react/prop-types
const ShopCard = ({ img, title, link }) => {
  return (
    <div className="shop-card">
      <div className="shop-box">
        <img src={img} alt="" height={52} className="shop-img"/>
      </div>
      <p className="shop-title">{title}</p>
      <Link className="shop-links" to={link}>
        <div className="shop-link">
          <p>В магазин</p>
          <img src={arrow} alt="" height={12} />
        </div>
      </Link>
    </div>
  );
};

export default ShopCard