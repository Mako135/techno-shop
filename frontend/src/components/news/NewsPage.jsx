import { Link } from "react-router-dom";
import img from "../../assets/news.png";
import arrow from "../../assets/arrow.png";
import Footer from "../footer/Footer";

const NewsPage = () => {
  return (
    <div>
      <div className="container">
        <div className="news-header-content">
          <div className="news-header-date">
            <p>14 апреля</p>
            <div className="vl"></div>
            <p>Москва</p>
          </div>
          <div className="news-header-title">
            <p>
              Заяви о Себе: инновационный проект TECNO Mobile и Manchester City
              претендует на звание лучшей коллаборации бренда c футбольным
              клубом на FBA 2022
            </p>
          </div>
          <div className="divider"></div>
          <div className="news-header-subtitle">
            Совместный проект TECNO Mobile и Manchester City #AnnounceYourself
            включен в шорт–лист конкурса «Лучшая коллаборация бренда 2022 года с
            футбольным клубом».
          </div>
        </div>
        <div className="news-main-content">
          <img src={img} alt="" />
          <p className="news-main-content-title">
            Создателям проекта удалось создать целый мир, который позволил
            болельщикам взаимодействовать с клубом Manchester City.
          </p>
          <p className="news-main-content-subtitle">
            Ведущая премия отрасли Football Business Awards включила совместный
            проект TECNO Mobile и Manchester City #AnnounceYourself в шорт–лист
            конкурса «Лучшая коллаборация бренда 2022 года с футбольным клубом».
            Проект #AnnounceYourself объединил в себе передовые технологии
            дополненной реальности, вселенную легендарного клуба и мечты
            футбольных фанатов со всего мира. Проект получил ошеломительный
            успех, чем привлек внимание лидеров футбольной индустрии. Участники
            смогли погрузиться в путешествие по тренировочной клубной базе,
            посетить легендарный стадион Etihad и прогуляться по городку
            футбольной академии, а также подписать виртуальный контракт и
            выбрать игровой номер в команде. Проект #AnnounceYourself
            предоставил футбольным болельщикам уникальную возможность воплотить
            в жизнь мечты, поддерживая любимый клуб. С помощью дополнительной
            реальности бренд TECNO продемонстрировал уникальную технологию
            спортивного маркетинга и укрепил присутствие бренда на мировой
            арене. Инновационный опыт TECNO целиком отражает миссию бренда, как
            передовой технологической компании.
          </p>
          <p className="news-main-content-ps">
            Пришло время отправиться туда, где Вы никогда не были! <br />
            Приготовьтесь #AnnounceYourself!
          </p>
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
