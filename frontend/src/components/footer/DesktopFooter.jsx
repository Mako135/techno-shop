import instagram from "../../assets/instagram.svg";
import tiktok from "../../assets/tiktok.svg";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useState } from "react";
import Countries from "./Countries";
const DesktopFooter = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className="footer"
        style={{ backgroundColor: className ? "#fff" : "" }}
      >
        <div className="container">
          <div className="footer-header">
            <div className="footer-links-group">
              {/* Footer links */}
              <div className="footer-links">
                <Link className="footer-link bold" to="/phones">
                  Смартфоны
                </Link>
                <Link className="footer-link" to="/phones">
                  PHANTOM
                </Link>
                <Link className="footer-link" to="/phones">
                  CAMON
                </Link>
                <Link className="footer-link" to="/phones">
                  SPARK
                </Link>
                <Link className="footer-link" to="/phones">
                  POVA
                </Link>
              </div>
              {/* <div className="footer-links">
              <Link className="footer-link bold" to="/">
                Аксессуары
              </Link>
            </div> */}
              <div className="footer-links">
                <Link className="footer-link bold" to="/where-to-buy">
                  Где купить
                </Link>
              </div>
              <div className="footer-links">
                <Link className="footer-link bold" to="/about">
                  О нас
                </Link>
                <Link className="footer-link" to="/about">
                  О Tecno
                </Link>
                <Link className="footer-link" to="/news">
                  Новости
                </Link>
                <Link className="footer-link" to="/stocks">
                  Акции
                </Link>
              </div>
              <div className="footer-links">
                <Link className="footer-link bold" to="/support">
                  Поддержка
                </Link>
                <Link className="footer-link" to="/support">
                  FAQ
                </Link>
                <Link className="footer-link" to="/support">
                  Документация
                </Link>
                <Link className="footer-link" to="/services">
                  Сервисные центры
                </Link>
              </div>
              <div className="footer-social">
                <Link
                  to="https://www.instagram.com/tecnomobile.kz"
                  target="_blank"
                >
                  <img src={instagram} alt="" className="instagram" />
                </Link>
                <Link
                  to="https://www.tiktok.com/@tecnomobile.kz"
                  target="_blank"
                >
                  <img src={tiktok} alt="" className="tiktok" />
                </Link>
              </div>
            </div>
          </div>

          {/* Footer bottom */}
          <div className="footer-bottom">
            <div className="footer-logo">
              <div className="flag" onClick={toggleMenu}>
                <img src="https://d3fyizz0b46qgr.cloudfront.net/static/img/svg/kz.e84b974.svg" alt="" height={20} />
                <p>Kazakhstan (русский)</p>
              </div>
              <img src={logo} alt="" height={32} />
            </div>

            <div className="divider"></div>

            <div className="copyright">
              <div className="copyright-links">
                <Link
                  className="footer-link-copyright"
                  to="https://ru.tecno-mobile.com/privacy-policy/"
                >
                  Политика конфиденциальности
                </Link>
                <Link
                  className="footer-link-copyright"
                  to="https://ru.tecno-mobile.com/terms-of-use/"
                >
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
      <div className={`menu ${isOpen ? "open" : ""}`}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "2rem",
          }}
        >
          <div className="space"></div>
          <div
            className={`burger-button ${isOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </div>
        <div className="download-popup-content">
          <Countries />
        </div>
      </div>
    </>
  );
};

DesktopFooter.propTypes = {
  className: PropTypes.string,
};

export default DesktopFooter;
