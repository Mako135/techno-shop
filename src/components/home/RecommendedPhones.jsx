import { Link } from "react-router-dom";
import spark from "../../assets/spark.png";
import fullSpark from "../../assets/fullSpark.png";
import arrow from "../../assets/arrow.png";
const RecommendedPhones = () => {
  return (
    <div>
      <div className="recommended-phones">
        <div className="recommended-phone-card">
          <img src={spark} alt="" height={32} className="recommended-logo" />
          <div className="recommended-phone-specs">
            <p>6.6” экран с частотой 90 Гц</p>
            <div className="vl"></div>
            <p>128 Гб + 8 Гб* память</p>
            <div className="vl"></div>
            <p>5000 мАч аккумулятор Type-C</p>
          </div>
          <div className="recommended-links">
            <Link className="recommended-link" to="/">
              <button className="buy-btn">Купить</button>
            </Link>
            <Link className="recommended-link" to="/">
              <div className="about-phone">
                <p>Подробнее</p>
                <img src={arrow} alt="" height={12} />
              </div>
            </Link>
          </div>
          <img src={fullSpark} alt="" className="recommended-phone-img" />
        </div>
      </div>
    </div>
  );
}

export default RecommendedPhones