import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { LuSearch } from "react-icons/lu";
import { RiArrowDownDoubleLine } from "react-icons/ri";
// import translations from "../../services/translations/translations.js";
import { useEffect, useState } from "react";
// import useLanguageStore from "../../services/store/useLanguageStore.js";

const DesktopMenu = () => {
  const [isLinkPresent, setIsLinkPresent] = useState(false);
  // const { language, setLanguage } = useLanguageStore();

  // const handleLanguageChange = (event) => {
  //   setLanguage(event.target.value);
  // };

  const checkLink = () => {
    const link = window.location.href;
    if (
      link === "http://localhost:5173/about" ||
      link === "http://localhost:5173/about#history-block"
    ) {
      setIsLinkPresent(true);
    } else {
      setIsLinkPresent(false);
    }
  };

  useEffect(() => {
    checkLink();

    window.addEventListener("popstate", checkLink);

    const pushState = history.pushState;
    const replaceState = history.replaceState;

    history.pushState = function () {
      pushState.apply(history, arguments);
      checkLink();
    };

    history.replaceState = function () {
      replaceState.apply(history, arguments);
      checkLink();
    };

    return () => {
      window.removeEventListener("popstate", checkLink);
      history.pushState = pushState;
      history.replaceState = replaceState;
    };
  }, []);
  return (
    <div className="header-container">
      <div className="header">
        <img src={logo} alt="" height={20} />
        <div className="header-links">
          <NavLink className="link" to="/">
            Главная
          </NavLink>
          <NavLink className="link" to="/phones">
            Смартфоны
          </NavLink>
          {/* <NavLink className="link" to="/accessories">
            {translations[language].header.accessories}
          </NavLink> */}
          <NavLink className="link" to="/where-to-buy">
            Где купить
          </NavLink>
          <NavLink className="link" to="/about">
            О нас
          </NavLink>
          <NavLink className="link" to="/news">
            Новости
          </NavLink>
          <NavLink className="link" to="/support">
            Поддержка
          </NavLink>
          <NavLink className="link" to="/stocks">
            Акции
          </NavLink>
        </div>
        {/* <div className="header-select">
          <select value={language} onChange={handleLanguageChange}>
            <option value="ru">RU</option>
            <option value="kk">KZ</option>
          </select>
        </div> */}
        {isLinkPresent ? (
          <a className="link" href="#history-block">
            <RiArrowDownDoubleLine fontSize={30} />
          </a>
        ) : (
          <NavLink className="link" to="/search">
            <LuSearch fontSize={24} />
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default DesktopMenu;
