import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { LuSearch } from 'react-icons/lu';


const Header = () => {
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
          <NavLink className="link" to="/accessories">
            Аксессуары
          </NavLink>
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
        <div className="header-select">
          <select>
            <option value="ru">RU</option>
            <option value="kz">KZ</option>
          </select>
        </div>
        <LuSearch fontSize={24} />
      </div>
    </div>
  );
}

export default Header