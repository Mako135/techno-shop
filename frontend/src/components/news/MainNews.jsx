import PropTypes from "prop-types";

const MainNews = ({ date, title, img }) => {
  return (
    <div className="main-news">
      <img src={img} alt="" />
      <div className="main-news-content">
        <p className="main-news-date">{date}</p>
        <p className="main-news-title">{title}</p>
      </div>
    </div>
  );
};

MainNews.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
};

export default MainNews;
