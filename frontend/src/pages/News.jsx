import Footer from "../components/footer/Footer";
import MainNews from "../components/news/MainNews";
import NewsCard from "../components/news/NewsCard"
import img from '../assets/news.png'

const News = () => {
  return (
    <div style={{ backgroundColor: "#fff" }}>
      <div className="container">
        <MainNews
          date="14 апреля"
          title="Заяви о Себе: инновационный проект TECNO Mobile и Manchester City претендует на звание лучшей коллаборации бренда c футбольным клубом на FBA 2022"
          img={img}
        />
        <div className="news">
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
        <div className="divider"></div>
      </div>
      <Footer />
    </div>
  );
}

export default News