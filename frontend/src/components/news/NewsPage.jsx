import { Link } from "react-router-dom";
import arrow from "../../assets/arrow.png";
import Footer from "../footer/Footer";
import { useParams } from "react-router-dom";
import useNewsStore from "../../services/store/NewsStore";
import { useEffect, useState } from "react";
import parse from "html-react-parser";
import { fetchData } from "../../services/requests/requests";
import { API } from "../../services/store/usePhoneStore";

const NewsPage = () => {
  const { newsId } = useParams();
  const [news, setNews] = useState();
  const { newsDetail, fetchNewsById } = useNewsStore();
  const [newsIndex, setNewsIndex] = useState();
  const safeParse = (content) =>
    typeof content === "string" ? parse(content) : null;
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await fetchData(`${API}/api/news`);
        setNews(data);

        fetchNewsById(newsId);

        if (data) {
          let index = data.findIndex((newsItem) => newsItem.slug === newsId);
          setNewsIndex(index);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchNews();
  }, [newsId, fetchNewsById]);
  console.log(news, newsIndex);

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
          <div>{safeParse(newsDetail?.content)}</div>
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
