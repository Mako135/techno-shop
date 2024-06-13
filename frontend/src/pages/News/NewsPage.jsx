import { Link } from "react-router-dom";
import arrow from "../../assets/arrow.png";
import Footer from "../../components/footer/Footer";
import { useParams } from "react-router-dom";
import useNewsStore from "../../services/store/NewsStore";
import { useEffect, useState } from "react";
import parse from "html-react-parser";

const NewsPage = () => {
  const { newsId } = useParams();
  const { newsDetail, fetchNewsById, fetchNews, news } = useNewsStore();
  const [newsIndex, setNewsIndex] = useState(null);

  const safeParse = (content) =>
    typeof content === "string" ? parse(content) : null;

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchNews();
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [fetchNews]);

  useEffect(() => {
    const fetchNewsDetail = async () => {
      try {
        await fetchNewsById(newsId);

        if (news.length > 0) {
          let index = news.findIndex((newsItem) => newsItem.slug === newsId);
          setNewsIndex(index);
        }
      } catch (error) {
        console.log(error);
      }
    };

    if (news.length > 0) {
      fetchNewsDetail();
    }
  }, [newsId, fetchNewsById, news]);

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
          <Link
            className="news-link-left"
            to={newsIndex > 0 ? `/news/${news[newsIndex - 1]?.slug}` : "#"}
          >
            <div className="news-link">
              <img src={arrow} alt="" height={12} />
              <p>Предыдущая новость</p>
            </div>
          </Link>
          <Link
            className="news-link-right"
            to={
              newsIndex < news.length - 1
                ? `/news/${news[newsIndex + 1]?.slug}`
                : "#"
            }
          >
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
