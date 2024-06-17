import PropTypes from "prop-types";

const HistoryCard = ({ year, img, title }) => {
  return (
    <div>
      <p className="history-card-date">{year}</p>
      <img src={img} loading="lazy" alt="" className="history-card-img" />
      <p className="history-card-title">{title}</p>
    </div>
  );
};

HistoryCard.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
export default HistoryCard;
