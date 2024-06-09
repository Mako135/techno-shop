import { useState } from "react";
import useLanguageStore from "../../services/store/useLanguageStore";
import { NavLink } from "react-router-dom";
import translations from "../../services/translations/translations.js";
import logo from "../../assets/logo.png";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguageStore();
  const handleLanguageChange = () => {
    language === "ru" ? setLanguage("kk") : setLanguage("ru");
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="mobile-menu">
        <img src={logo} alt="" />
        <div
          className={`burger-button ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </div>
      <div className={`menu ${isOpen ? "open" : ""}`}>
        <div className="mobile-menu">
          <img src={logo} alt="" />
          <div
            className={`burger-button ${isOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </div>
        <div className="header-links-mobile">
          <NavLink className="link" to="/" onClick={toggleMenu}>
            {translations[language].header.main}
          </NavLink>
          <div className="divider"></div>
          <NavLink className="link" to="/phones" onClick={toggleMenu}>
            {translations[language].header.phones}
          </NavLink>
          <div className="divider"></div>

          {/* <NavLink className="link" to="/accessories" onClick={toggleMenu}>
            {translations[language].header.accessories}
          </NavLink>
          <div className="divider"></div> */}

          <NavLink className="link" to="/where-to-buy" onClick={toggleMenu}>
            {translations[language].header.whereToBuy}
          </NavLink>
          <div className="divider"></div>

          <NavLink className="link" to="/about" onClick={toggleMenu}>
            {translations[language].header.about}
          </NavLink>
          <div className="divider"></div>

          <NavLink className="link" to="/news" onClick={toggleMenu}>
            {translations[language].header.news}
          </NavLink>
          <div className="divider"></div>

          <NavLink className="link" to="/support" onClick={toggleMenu}>
            {translations[language].header.support}
          </NavLink>
          <div className="divider"></div>

          <NavLink className="link" to="/stocks" onClick={toggleMenu}>
            {translations[language].header.stocks}
          </NavLink>
        </div>

        <div onClick={handleLanguageChange} className="">
          <div className="divider" style={{ marginBottom: "1rem" }}></div>
          {language === "ru" ? "Kazakhstan (русский)" : "Kazakhstan (қазақша)"}
        </div>
      </div>
    </>
  );
};
export default MobileMenu;
