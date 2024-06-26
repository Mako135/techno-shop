import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="mobile-menu">
        <NavLink to="/">
          <img src={logo} alt="" />
        </NavLink>
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
            Главная
          </NavLink>
          <div className="divider"></div>
          <NavLink className="link" to="/phones" onClick={toggleMenu}>
            Смартфоны
          </NavLink>
          <div className="divider"></div>

          {/* <NavLink className="link" to="/accessories" onClick={toggleMenu}>
            {translations[language].header.accessories}
          </NavLink>
          <div className="divider"></div> */}

          <NavLink className="link" to="/where-to-buy" onClick={toggleMenu}>
            Где купить
          </NavLink>
          <div className="divider"></div>

          <NavLink className="link" to="/about" onClick={toggleMenu}>
            О нас
          </NavLink>
          <div className="divider"></div>

          <NavLink className="link" to="/news" onClick={toggleMenu}>
            Новости
          </NavLink>
          <div className="divider"></div>

          <NavLink className="link" to="/support" onClick={toggleMenu}>
            Поддержка
          </NavLink>
          <div className="divider"></div>

          <NavLink className="link" to="/stocks" onClick={toggleMenu}>
            Акции
          </NavLink>
          <div className="divider"></div>

          <NavLink className="link" to="/search" onClick={toggleMenu}>
            Поиск
          </NavLink>
        </div>
      </div>
    </>
  );
};
export default MobileMenu;
