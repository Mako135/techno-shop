import { useState } from "react";
import Accordion from "../../feautures/Accordion";
import instagram from "../../assets/instagram.svg";
import tiktok from "../../assets/tiktok.svg";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import CountriesMobile from "./CountriesMobile";

const MobileFooter = ({ className }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className="mobile-footer"
      style={{ backgroundColor: className ? "#fff" : "" }}
    >
      <img src={logo} alt="Logo" className="logo" />
      <Accordion
        title="Смартфоны"
        toggleAccordion={() => toggleAccordion(0)}
        isOpen={openIndex === 0}
      >
        <div className="footer-links">
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
      </Accordion>
      <Accordion
        title="Где купить"
        toggleAccordion={() => toggleAccordion(2)}
        isOpen={openIndex === 2}
      >
        <div className="footer-links">
          <Link
            className="footer-link"
            to="https://kaspi.kz/shop/p/tecno-phantom-v-flip-5g-8-gb-256-gb-sirenevyi-115769335/?c=750000000&m=30027663&sr=23&ref=shared_link"
          >
            Каспи Магазин
          </Link>
          <Link
            className="footer-link"
            to="https://www.technodom.kz/catalog/smartfony-i-gadzhety/smartfony-i-telefony/smartfony/f/brands/tecno"
          >
            Technodom
          </Link>
          <Link
            className="footer-link"
            to="https://shop.kz/offers/smartfony/filter/fltr_brand-is-tecno_mobile/apply/"
          >
            Белый Ветер
          </Link>
          <Link
            className="footer-link"
            to="https://fora.kz/collection/smartfony"
          >
            Fora
          </Link>
          <Link
            className="footer-link"
            to="https://shop.beeline.kz/ru/almaty/c/smartphones"
          >
            Beeline
          </Link>
        </div>
      </Accordion>
      <Accordion
        title="О нас"
        toggleAccordion={() => toggleAccordion(3)}
        isOpen={openIndex === 3}
      >
        <div className="footer-links">
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
      </Accordion>
      <Accordion
        title="Поддержка"
        toggleAccordion={() => toggleAccordion(4)}
        isOpen={openIndex === 4}
      >
        <div className="footer-links">
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
      </Accordion>
      <div className="footer-social-translate">
        <div className="footer-social">
          <Link to="https://www.instagram.com/tecnomobile.kz" target="_blank">
            <img src={instagram} alt="" className="instagram" />
          </Link>
          <Link to="https://www.tiktok.com/@tecnomobile.kz" target="_blank">
            <img src={tiktok} alt="" className="tiktok" />
          </Link>
        </div>
        <div className="flag" onClick={toggleMenu}>
          <img
            src="https://d3fyizz0b46qgr.cloudfront.net/static/img/svg/kz.e84b974.svg"
            alt=""
            height={20}
          />
          <p>Kazakhstan (русский)</p>
        </div>
      </div>
      <div className="divider"></div>
      <div className="copyright">
        <div className="copyright-links">
          <Link className="footer-link-copyright" to="/policy">
            Политика конфиденциальности
          </Link>
          <Link className="footer-link-copyright" to="/terms-of-use">
            Условия использования
          </Link>
        </div>
        <p>Copyright © 2021-2025 Tecno. Все права защищены.</p>
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
          <CountriesMobile />
        </div>
      </div>
    </div>
  );
};

MobileFooter.propTypes = {
  className: PropTypes.string,
};

export default MobileFooter;
