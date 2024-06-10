import { FiSearch } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";
import { RiPhoneFill } from "react-icons/ri";
import { HiMail } from "react-icons/hi";
import Footer from "../components/footer/Footer";
import { AdvancedMarker, Map } from "@vis.gl/react-google-maps";
import { APIProvider } from "@vis.gl/react-google-maps";

const ServicePage = () => {
 
  
  const almaty = { lat: 43.2567, lng: 76.9286 };
  const mapKey = "AIzaSyD-jzRZNgmIlm7btquVgHPDPOV7Za9NJ_0";
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
          <APIProvider apiKey={mapKey}>
            <div className="google-map">
              <Map
                defaultZoom={12}
                defaultCenter={almaty}
                mapId={"11aa37e13eb20142"}
                gestureHandling={"greedy"}
              >
                <AdvancedMarker position={almaty} />
              </Map>
            </div>
          </APIProvider>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ServicePage;
