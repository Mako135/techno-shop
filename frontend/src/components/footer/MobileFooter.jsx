import { useState } from "react";
import Accordion from "../../feautures/Accordion";
// import useLanguageStore from "../../services/store/useLanguageStore";
// import translations from "../../services/translations/translations.js";
import instagram from "../../assets/instagram.svg";
import tiktok from "../../assets/tiktok.svg";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";



const MobileFooter = ({ className }) => {
  // const { language, setLanguage } = useLanguageStore();
  const [openIndex, setOpenIndex] = useState(null);

  //  const handleLanguageChange = () => {
  //    language === "ru" ? setLanguage("kk") : setLanguage("ru");
  //  };
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container">
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
        </Accordion>
        {/* <Accordion
          title={translations[language].header.accessories}
          toggleAccordion={() => toggleAccordion(1)}
          isOpen={openIndex === 1}
        >
          <Link className="footer-link" to="/accessories">
            Аксессуары
          </Link>
        </Accordion> */}
        <Accordion
          title="Где купить"
          toggleAccordion={() => toggleAccordion(2)}
          isOpen={openIndex === 2}
        >
          <Link className="footer-link" to="/where-to-buy">
            Где купить
          </Link>
        </Accordion>
        <Accordion
          title="О нас"
          toggleAccordion={() => toggleAccordion(3)}
          isOpen={openIndex === 3}
        >
          <div className="footer-links">
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
        </Accordion>
        <Accordion
          title="Поддержка"
          toggleAccordion={() => toggleAccordion(4)}
          isOpen={openIndex === 4}
        >
          <div className="footer-links">
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
        </Accordion>
        <div className="footer-social-translate">
          <div className="footer-social">
            <Link>
              <img src={instagram} alt="" className="instagram" />
            </Link>
            <Link>
              <img src={tiktok} alt="" className="tiktok" />
            </Link>
          </div>
          {/* <p onClick={handleLanguageChange}>
            {language === "ru"
              ? "Kazakhstan (русский)"
              : "Kazakhstan (қазақша)"}
          </p> */}
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
  );
};

MobileFooter.propTypes = {
  className: PropTypes.string
};

export default MobileFooter;