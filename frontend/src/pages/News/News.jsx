import Footer from "../../components/footer/Footer";
import MainNews from "../../components/news/MainNews";
import NewsCard from "../../components/news/NewsCard";
import { useEffect } from "react";
import useNewsStore from "../../services/store/NewsStore";
import { Link } from "react-router-dom";

const News = () => {
  const { news, fetchNews } = useNewsStore();
  useEffect(() => {
    document.title = "Новости | Tecno";
    fetchNews();
  }, [fetchNews]);
 

  const mainNews = news[0];
  const updatedNews = news.slice(1);

  return (
    <div style={{ backgroundColor: "#fff" }}>
      <div className="container">
        <Link to={`/news/${mainNews?.slug}`} className="main-news-link">
          <MainNews
            date={mainNews?.created_at}
            title={mainNews?.title}
            img={mainNews?.preview_image}
          />
        </Link>
        <div className="news">
          {updatedNews.map((newsItem) => (
            <NewsCard key={newsItem?.slug} news={newsItem} />
          ))}
        </div>
        <div className="divider"></div>
      </div>
      <Footer />
    </div>
  );
};

export default News;
