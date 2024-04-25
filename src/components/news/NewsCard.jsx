import { Link } from "react-router-dom";
import arrow from "../../assets/arrow.png";
import newsImg from "../../assets/news.png";
const NewsCard = () => {
  return (
    <div className="news-card">
      <img src={newsImg} alt="" className="news-card-img" />
      <div className="news-card-content">
        <div className="news-data">
          <p>14 Апреля, 2022</p>
        </div>
        <div className="news-card-title">
          <p>Инновационный проект TECNO Mobile и Manchester City</p>
        </div>
        <div className="news-card-text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            quaerat, quas, quo, quod quibusdam voluptatibus repellendus
            voluptates nihil.
          </p>
        </div>
        <Link className="news-links" to="/">
          <div className="news-link">
            <p>Подробнее</p>
            <img src={arrow} alt="" height={12} />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default NewsCard