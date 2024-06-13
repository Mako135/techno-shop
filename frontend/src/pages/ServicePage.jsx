import { useEffect, useState } from "react";
import {  MdLocationOn } from "react-icons/md";
import { RiPhoneFill } from "react-icons/ri";
import Footer from "../components/footer/Footer";
import { AdvancedMarker, Map } from "@vis.gl/react-google-maps";
import { APIProvider } from "@vis.gl/react-google-maps";
import { fetchData } from "../services/requests/requests";
import { API } from "../services/store/usePhoneStore";
import email from '../assets/email.svg'

const ServicePage = () => {
  const [serviceData, setServiceData] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [mapKey, setMapKey] = useState(0);

  useEffect(() => {
    document.title = "Поддержка | Tecno";
    const fetchServices = async () => {
      try {
        const response = await fetchData(`${API}/api/contacts`);
        const data = await response;
        setServiceData(data);
        setSelectedCity(data[0]);
      } catch (error) {
        console.error("Error fetching service data:", error);
      }
    };

    fetchServices();
  }, []);

  const handleCityChange = (event) => {
    const selectedCity = serviceData?.find(
      (center) => center.city.name === event.target.value
    );
    setSelectedCity(selectedCity);
    setMapKey((prevKey) => prevKey + 1);
  };

  const apiKey = "AIzaSyD-jzRZNgmIlm7btquVgHPDPOV7Za9NJ_0";

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
          <select onChange={handleCityChange} value={selectedCity?.city.name}>
            {serviceData?.map((center) => (
              <option key={center.id} value={center?.city.name}>
                {center?.city.name}
              </option>
            ))}
          </select>
        </div>
        <div className="service-map-card">
          <div className="service-left">
            <h1>{selectedCity?.city.name}</h1>
            <p>{selectedCity?.title}</p>
            <ul>
              <li>
                <MdLocationOn className="service-left-icon" />
                <span>{selectedCity?.address_line}</span>
              </li>
              <li>
                <RiPhoneFill className="service-left-icon" />
                <span>{selectedCity?.phone_line}</span>
              </li>
              <li>
                <img src={email} className="service-left-icon" />
                <span>{selectedCity?.work_time}</span>
              </li>
            </ul>
          </div>
          {selectedCity && (
            <APIProvider apiKey={apiKey}>
              <div className="google-map">
                <Map
                  key={mapKey}
                  defaultZoom={12}
                  defaultCenter={{
                    lat: selectedCity.latitude,
                    lng: selectedCity.longitude
                  }}
                  mapId={"11aa37e13eb20142"}
                  gestureHandling={"greedy"}
                >
                  <AdvancedMarker
                    position={{
                      lat: selectedCity.latitude,
                      lng: selectedCity.longitude
                    }}
                  />
                </Map>
              </div>
            </APIProvider>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ServicePage;
