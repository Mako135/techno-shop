import { Link } from "react-router-dom";
import arrow from "../../assets/arrow.png";
import PropTypes from "prop-types";

const NewsCard = ({ news }) => {
  return (
    <div className="news-card">
      <img
        src={news?.preview_image}
        alt=""
        className="news-card-img"
        loading="lazy"
      />
      <div className="news-card-content">
        <div className="news-data">
          <p>{news?.created_at}</p>
        </div>
        <div className="news-card-title">
          <p>{news?.title}</p>
        </div>
        <div className="news-card-text">
          <p>{news?.description}</p>
        </div>
        <Link className="news-links" to={`/news/${news?.slug}`}>
          <div className="news-link">
            <p>Читать</p>
            <img src={arrow} alt="" height={12} />
          </div>
        </Link>
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  news: PropTypes.any,
};

export default NewsCard;
