import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useNewsStore from "../../services/store/NewsStore";
import parse from "html-react-parser";
import arrow from "../../assets/arrow.png";
import Footer from "../../components/footer/Footer";

const StocksDetailPage = () => {
  const { stockId } = useParams();
  const { newsDetail, fetchNewsById, fetchNews, stocks } = useNewsStore();
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
        await fetchNewsById(stockId);

        if (stocks.length > 0) {
          let index = stocks.findIndex((newsItem) => newsItem.slug === stockId);
          setNewsIndex(index);
        }
      } catch (error) {
        console.log(error);
      }
    };

    if (stocks.length > 0) {
      fetchNewsDetail();
    }
  }, [stockId, fetchNewsById, stocks]);

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
            to={newsIndex > 0 ? `/news/${stocks[newsIndex - 1]?.slug}` : "#"}
          >
            <div className="news-link">
              <img src={arrow} alt="" height={12} />
              <p>Предыдущая новость</p>
            </div>
          </Link>
          <Link
            className="news-link-right"
            to={
              newsIndex < stocks.length - 1
                ? `/news/${stocks[newsIndex + 1]?.slug}`
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

export default StocksDetailPage;
