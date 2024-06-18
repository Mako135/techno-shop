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
                <Link className="footer-link bold" to="/phones" target="_blank">
                  Смартфоны
                </Link>
                <Link className="footer-link" to="/phones" target="_blank">
                  PHANTOM
                </Link>
                <Link className="footer-link" to="/phones" target="_blank">
                  CAMON
                </Link>
                <Link className="footer-link" to="/phones" target="_blank">
                  SPARK
                </Link>
                <Link className="footer-link" to="/phones" target="_blank">
                  POVA
                </Link>
              </div>
              {/* <div className="footer-links">
              <Link className="footer-link bold" to="/">
                Аксессуары
              </Link>
            </div> */}
              <div className="footer-links">
                <Link
                  className="footer-link bold"
                  to="/where-to-buy"
                  target="_blank"
                >
                  Где купить
                </Link>
                <Link
                  className="footer-link"
                  to="https://kaspi.kz/shop/p/tecno-phantom-v-flip-5g-8-gb-256-gb-sirenevyi-115769335/?c=750000000&m=30027663&sr=23&ref=shared_link"
                  target="_blank"
                >
                  Каспи Магазин
                </Link>
                <Link
                  className="footer-link"
                  to="https://www.technodom.kz/catalog/smartfony-i-gadzhety/smartfony-i-telefony/smartfony/f/brands/tecno"
                  target="_blank"
                >
                  Technodom
                </Link>
                <Link
                  className="footer-link"
                  to="https://shop.kz/offers/smartfony/filter/fltr_brand-is-tecno_mobile/apply/"
                  target="_blank"
                >
                  Белый Ветер
                </Link>
                <Link
                  className="footer-link"
                  to="https://fora.kz/collection/smartfony"
                  target="_blank"
                >
                  Fora
                </Link>
                <Link
                  className="footer-link"
                  to="https://shop.beeline.kz/ru/almaty/c/smartphones"
                  target="_blank"
                >
                  Beeline
                </Link>
              </div>
              <div className="footer-links">
                <Link className="footer-link bold" to="/about" target="_blank">
                  О нас
                </Link>
                <Link className="footer-link" to="/about" target="_blank">
                  О Tecno
                </Link>
                <Link className="footer-link" to="/news" target="_blank">
                  Новости
                </Link>
                <Link className="footer-link" to="/stocks" target="_blank">
                  Акции
                </Link>
              </div>
              <div className="footer-links">
                <Link
                  className="footer-link bold"
                  to="/support"
                  target="_blank"
                >
                  Поддержка
                </Link>
                <Link className="footer-link" to="/support" target="_blank">
                  FAQ
                </Link>
                <Link className="footer-link" to="/support" target="_blank">
                  Документация
                </Link>
                <Link className="footer-link" to="/services" target="_blank">
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
                <img
                  src="https://d3fyizz0b46qgr.cloudfront.net/static/img/svg/kz.e84b974.svg"
                  alt=""
                  height={20}
                />
                <p>Kazakhstan (русский)</p>
              </div>
              <img src={logo} alt="" height={32} />
            </div>

            <div className="divider"></div>

            <div className="copyright">
              <div className="copyright-links">
                <Link
                  className="footer-link-copyright"
                  to="/policy"
                  target="_blank"
                >
                  Политика конфиденциальности
                </Link>
                <Link
                  className="footer-link-copyright"
                  to="/terms-of-use"
                  target="_blank"
                >
                  Условия использования
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
