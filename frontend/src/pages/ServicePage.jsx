import { FiSearch } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";
import { RiPhoneFill } from "react-icons/ri";
import { HiMail } from "react-icons/hi";
import Footer from "../components/footer/Footer";
import map from '../assets/map.png'
const ServicePage = () => {
  return (
    <div className="service-container">
      <div className="container">
        <div className="service-center">
          <p className="support-title">Авторизованные сервисные центры</p>
          <p className="support-subtitle">
            Список официальных поставщиков сервисных услуг Tecno
          </p>
        </div>
        <div className="service-list">
          <select name="" id="">
            <option value="alm">Almaty</option>
          </select>
          <div className="service-input-container">
            <FiSearch className="service-icon" />
            <input type="text" placeholder="Введите адрес" />
          </div>
        </div>
        <div className="service-map-card">
          <div className="service-left">
            <h1>Алматы</h1>
            <p>ТОО “Leda Service”</p>
            <ul>
              <li>
                <MdLocationOn className="service-left-icon" />
                <span>050004, РК, Алматы, ул. Жибек Жолы, 104а</span>
              </li>
              <li>
                <RiPhoneFill className="service-left-icon" />
                <span>+7 727 222 2901 +7 700 679 9308</span>
              </li>
              <li>
                <HiMail className="service-left-icon" />
                <span>
                  bm@leda-service.kz <br />
                  dmitry.kalashnikov@leda-service.kz
                </span>
              </li>
            </ul>
          </div>
          <img src={map} alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ServicePage;
