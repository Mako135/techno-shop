import { Link } from "react-router-dom";
import arrow from "../../assets/arrow.png";
import Footer from "../footer/Footer";
import { useParams } from "react-router-dom";
import useNewsStore from "../../services/store/NewsStore";
import useLanguageStore from "../../services/store/useLanguageStore";
import { useEffect } from "react";
import parse from "html-react-parser";

const NewsPage = () => {
  const { newsId } = useParams();
  const { newsDetail, fetchNewsById } = useNewsStore();
  const { language } = useLanguageStore();
  const safeParse = (content) =>
    typeof content === "string" ? parse(content) : null;
  useEffect(() => {
    fetchNewsById(newsId);
  }, [newsId, fetchNewsById, language]);

  return (
    <div>
      <div className="container">
        <div className="news-header-content">
          <div className="news-header-date">
            <p>{newsDetail?.created_at}</p>
            <div className="vl"></div>
            <p>{newsDetail?.city?.name}</p>
          </div>
          <div className="news-header-title">
            <p>{newsDetail?.title}</p>
          </div>
          <div className="divider"></div>
          <div className="news-header-subtitle">{newsDetail?.description}</div>
        </div>
        <div className="news-main-content">
          <img src={newsDetail?.preview_image} alt="" />
          <p>{safeParse(newsDetail?.content)}</p>
        </div>

        <div className="news-main-navigation">
          <Link className="news-link-left" to="/news/1">
            <div className="news-link">
              <img src={arrow} alt="" height={12} />

              <p>Предыдущая новость</p>
            </div>
          </Link>
          <Link className="news-link-right" to="/news/1">
            <div className="news-link">
              <p>Следующая новость</p>
              <img src={arrow} alt="" height={12} />
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NewsPage;
