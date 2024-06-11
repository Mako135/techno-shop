import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";
import { RiPhoneFill } from "react-icons/ri";
import { HiMail } from "react-icons/hi";
import Footer from "../components/footer/Footer";
import { AdvancedMarker, Map } from "@vis.gl/react-google-maps";
import { APIProvider } from "@vis.gl/react-google-maps";
import { fetchData } from "../services/requests/requests";

// Список сервисных центров
const serviceCenters = [
  {
    id: 1,
    city: {
      id: 1,
      name: "Алматы",
      slug: "almaty"
    },
    title: "LEDA Service",
    address_line: "Zhibek Zholy 104а",
    phone_line: "77071730675",
    work_time:
      "Пн-пт: 09.00 - 18.00 Сб: 10.00 - 18.00 только прием техники. Вс: выходной",
    latitude: 43.261564,
    longitude: 76.941782,
    status: "published",
    updated: "11-06-2024"
  },
  {
    id: 2,
    city: {
      id: 2,
      name: "Актау",
      slug: "aktau"
    },
    title: "Mastephone",
    address_line: "6-й микрорайон 36, оф. 46",
    phone_line: "77292531493",
    work_time: "Пн-вс: 10.00-19.00",
    latitude: 43.642569,
    longitude: 51.162694,
    status: "published",
    updated: "11-06-2024"
  },
  {
    id: 3,
    city: {
      id: 3,
      name: "Актобе",
      slug: "aktobe"
    },
    title: "RSS",
    address_line: "Пр-т им. А. Молдагуловой 11В",
    phone_line: "77472316088",
    work_time: "Пн-пт: 09:00-18:00 перерыв 13:00-14:00 Сб-вс: Выходной",
    latitude: 50.292528,
    longitude: 57.170995,
    status: "published",
    updated: "11-06-2024"
  },
  {
    id: 6,
    city: {
      id: 6,
      name: "Кокшетау",
      slug: "kokshetau"
    },
    title: "SERVICE ALL",
    address_line: "Gabdullina, 38",
    phone_line: "77019587233",
    work_time: "Пн-пт: 10.00 - 18.00 Сб: 10.00 - 14.00 Вс: выходной",
    latitude: 53.289895,
    longitude: 69.395682,
    status: "published",
    updated: "11-06-2024"
  },
  {
    id: 5,
    city: {
      id: 5,
      name: "Караганда",
      slug: "karaganda"
    },
    title: "Авторизованный Сервис-центр",
    address_line: "Ул. Бухар Жырау 63",
    phone_line: "77212435200",
    work_time: "Пн-пт: 10:00-19:00; Сб: 10:00 -17:00; Вс: выходной",
    latitude: 49.799591,
    longitude: 73.089141,
    status: "published",
    updated: "11-06-2024"
  },
  {
    id: 4,
    city: {
      id: 4,
      name: "Астана",
      slug: "astana"
    },
    title: "Жана Жулдыз",
    address_line: "​Ул. Шаймерден Косшыгулулы, 13/1​ВП: 1",
    phone_line: "77082599770",
    work_time: "Пн-пт: 10:00-19:00; Сб: 10:00 -17:00; Вс: выходной",
    latitude: 51.168707,
    longitude: 71.385801,
    status: "published",
    updated: "11-06-2024"
  }
];

const ServicePage = () => {
  const [serviceData, setServiceData] = useState([]);
  const [selectedCity, setSelectedCity] = useState(serviceCenters[0]);
  const [mapKey, setMapKey] = useState(0);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetchData(`/api/contacts`);
        const data = await response;
        setServiceData(data);
      } catch (error) {
        console.error("Error fetching service data:", error);
      }
    };

    fetchServices();
  }, []);

  const handleCityChange = (event) => {
    const selectedCity = serviceCenters.find(
      (center) => center.city.name === event.target.value
    );
    setSelectedCity(selectedCity);
    setMapKey((prevKey) => prevKey + 1); // Обновляем ключ для ререндеринга карты
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
          <select onChange={handleCityChange} value={selectedCity.city.name}>
            {serviceCenters.map((center) => (
              <option key={center.id} value={center.city.name}>
                {center.city.name}
              </option>
            ))}
          </select>
          <div className="service-input-container">
            <FiSearch className="service-icon" />
            <input type="text" placeholder="Введите адрес" />
          </div>
        </div>
        <div className="service-map-card">
          <div className="service-left">
            <h1>{selectedCity.city.name}</h1>
            <p>{selectedCity.title}</p>
            <ul>
              <li>
                <MdLocationOn className="service-left-icon" />
                <span>{selectedCity.address_line}</span>
              </li>
              <li>
                <RiPhoneFill className="service-left-icon" />
                <span>{selectedCity.phone_line}</span>
              </li>
              <li>
                <HiMail className="service-left-icon" />
                <span>{selectedCity.work_time}</span>
              </li>
            </ul>
          </div>
          <APIProvider apiKey={apiKey}>
            <div className="google-map">
              <Map
                key={mapKey} // Добавляем ключ для ререндеринга карты
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
        </div>
      </div>
      <Footer />
    </div>
  );
};


export default ServicePage;
