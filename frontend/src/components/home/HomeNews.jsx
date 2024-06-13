import { useEffect } from "react";
import useNewsStore from "../../services/store/NewsStore";
import NewsCard from "../news/NewsCard";

const News = () => {
  const { news, fetchNews } = useNewsStore();
  useEffect(() => {
    fetchNews();
  }, [fetchNews]);
  const homeNews = news.slice(0,3)
  return (
    <div className="home-news">
      {homeNews?.map((news) => (
        <NewsCard key={news.id} news={news} />
      ))}
    </div>
  );
};

export default News;
