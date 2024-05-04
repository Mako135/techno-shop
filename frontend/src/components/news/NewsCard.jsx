import { Link } from "react-router-dom";
import arrow from "../../assets/arrow.png";
import PropTypes from "prop-types";

const NewsCard = ({img, date, title, description}) => {
  return (
    <div className="news-card">
      <img src={img} alt="" className="news-card-img" />
      <div className="news-card-content">
        <div className="news-data">
          <p>{date}</p>
        </div>
        <div className="news-card-title">
          <p>{title}</p>
        </div>
        <div className="news-card-text">
          <p>{description}</p>
        </div>
        <Link className="news-links" to="/news/1">
          <div className="news-link">
            <p>Читать</p>
            <img src={arrow} alt="" height={12} />
          </div>
        </Link>
      </div>
    </div>
  );
}

NewsCard.propTypes = {
  date: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string
};

export default NewsCard