import instagram from "../../assets/instagram.svg";
import tiktok from "../../assets/tiktok.svg";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import useLanguageStore from "../../services/store/useLanguageStore";
import PropTypes from "prop-types";


const DesktopFooter = ({ className }) => {
    const { language, setLanguage } = useLanguageStore();
     const handleLanguageChange = () => {
       language === "ru" ? setLanguage("kk") : setLanguage("ru");
     };

  return (
    <div
      className="footer"
      style={{ backgroundColor: className ? "#fff" : "" }}
    >
      <div className="container">
        <div className="footer-header">
          <div className="footer-links-group">
            {/* Footer links */}
            <div className="footer-links">
              <Link className="footer-link bold" to="/">
                Смартфоны
              </Link>
              <Link className="footer-link" to="/">
                PHANTOM
              </Link>
              <Link className="footer-link" to="/">
                CAMON
              </Link>
              <Link className="footer-link" to="/">
                SPARK
              </Link>
              <Link className="footer-link" to="/">
                POVA
              </Link>
              <Link className="footer-link" to="/">
                POP
              </Link>
            </div>
            <div className="footer-links">
              <Link className="footer-link bold" to="/">
                Аксессуары
              </Link>
            </div>
            <div className="footer-links">
              <Link className="footer-link bold" to="/">
                Где купить
              </Link>
            </div>
            <div className="footer-links">
              <Link className="footer-link bold" to="/">
                О нас
              </Link>
              <Link className="footer-link" to="/">
                О Tecno
              </Link>
              <Link className="footer-link" to="/">
                Новости
              </Link>
              <Link className="footer-link" to="/">
                Акции
              </Link>
            </div>
            <div className="footer-links">
              <Link className="footer-link bold" to="/">
                Поддержка
              </Link>
              <Link className="footer-link" to="/">
                FAQ
              </Link>
              <Link className="footer-link" to="/">
                Документация
              </Link>
              <Link className="footer-link" to="/">
                Сервисные центры
              </Link>
            </div>
            <div className="footer-social">
              <Link>
                <img src={instagram} alt="" className="instagram" />
              </Link>
              <Link>
                <img src={tiktok} alt="" className="tiktok" />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="footer-bottom">
          <div className="footer-logo">
            <p onClick={handleLanguageChange}>
              {language === "ru"
                ? "Kazakhstan (русский)"
                : "Kazakhstan (қазақша)"}
            </p>
            <img src={logo} alt="" height={32} />
          </div>

          <div className="divider"></div>

          <div className="copyright">
            <div className="copyright-links">
              <Link className="footer-link-copyright" to="/">
                Политика конфиденциальности
              </Link>
              <Link className="footer-link-copyright" to="/">
                Условия использования
              </Link>
              <Link className="footer-link-copyright" to="/">
                Карта сайта
              </Link>
            </div>
            <p>Copyright © 2021-2025 Tecno. Все права защищены.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

DesktopFooter.propTypes = {
    className: PropTypes.string
};

export default DesktopFooter;