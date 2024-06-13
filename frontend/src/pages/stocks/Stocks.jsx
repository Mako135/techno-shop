import { useEffect } from "react";
import useNewsStore from "../../services/store/NewsStore";
import NewsCard from "../../components/news/NewsCard";
import Footer from "../../components/footer/Footer";

const Stocks = () => {
  const { stocks, fetchNews } = useNewsStore();
  useEffect(() => {
    document.title = "Акции | Tecno";

    fetchNews();
  }, [fetchNews]);
  return (
    <div style={{ backgroundColor: "#fff" }}>
      <div className="container">
        <div className="news">
          {stocks.map((newsItem) => (
            <NewsCard key={newsItem?.slug} news={newsItem} />
          ))}
        </div>
        <div className="divider"></div>
      </div>
      <Footer />
    </div>
  );
};
export default Stocks;
