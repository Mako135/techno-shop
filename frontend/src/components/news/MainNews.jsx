import PropTypes from "prop-types";

const MainNews = ({ date, title, img }) => {
  return (
    <div className="main-news">
      <img src={img} alt="" loading="lazy" />
      <div className="main-news-content">
        <p className="main-news-date">{date}</p>
        <p className="main-news-title">{title}</p>
      </div>
    </div>
  );
};

MainNews.propTypes = {
  date: PropTypes.string,
  title: PropTypes.string,
  img: PropTypes.string,
};

export default MainNews;
