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
          <NavLink className="link" to="/">
            Смартфоны
          </NavLink>
          <NavLink className="link" to="/">
            Аксессуары
          </NavLink>
          <NavLink className="link" to="/where-to-buy">
            Где купить
          </NavLink>
          <NavLink className="link" to="/">
            О нас
          </NavLink>
          <NavLink className="link" to="/">
            Новости
          </NavLink>
          <NavLink className="link" to="/">
            Поддержка
          </NavLink>
          <NavLink className="link" to="/">
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