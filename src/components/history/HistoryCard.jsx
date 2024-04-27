
// eslint-disable-next-line react/prop-types
const HistoryCard = ({ year, img, title }) => {
  return (
    <div>
      <p className="history-card-date">{year}</p>
      <img src={img} alt="" className="history-card-img" />
      <p className="history-card-title">{title}</p>
    </div>
  );
};

export default HistoryCard