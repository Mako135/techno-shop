import NewsCard from "../components/news/NewsCard";
import img from "../assets/news.png";

const News = () => {
  
  return (
    <div className="home-news">
      <NewsCard
        img={img}
        date="14 апреля"
        title="Инновационный проект TECNO Mobile и Manchester City"
        description="Проект #AnnounceYourself включен в шорт–лист конкурса «Лучшая коллаборация бренда 2022 года с футбольным клубом»."
      />
      <NewsCard
        img={img}
        date="14 апреля"
        title="Инновационный проект TECNO Mobile и Manchester City"
        description="Проект #AnnounceYourself включен в шорт–лист конкурса «Лучшая коллаборация бренда 2022 года с футбольным клубом»."
      />
      <NewsCard
        img={img}
        date="14 апреля"
        title="Инновационный проект TECNO Mobile и Manchester City"
        description="Проект #AnnounceYourself включен в шорт–лист конкурса «Лучшая коллаборация бренда 2022 года с футбольным клубом»."
      />
    </div>
  );
};

export default News;
