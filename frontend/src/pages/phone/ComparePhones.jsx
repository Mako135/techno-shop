import { useEffect, useState } from "react";
import DropdownPhones from "../../components/phones/DropdownPhones";
import Title from "../../components/text/Title";
import { fetchData } from "../../services/requests/requests";
import { API } from "../../services/store/usePhoneStore";
import parse from "html-react-parser";
import Footer from "../../components/footer/Footer";
import { Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";

const ComparePhones = () => {
  const [selectedPhones, setSelectedPhones] = useState([null, null, null]);
  const [phoneDetails, setPhoneDetails] = useState([null, null, null]);

  const safeParse = (content) =>
    typeof content === "string" ? parse(content) : null;

  useEffect(() => {
    const fetchPhoneDetails = async (slug, index) => {
      try {
        const response = await fetchData(`${API}/api/phones/${slug}`);
        const data = await response;
        setPhoneDetails((prevDetails) => {
          const newDetails = [...prevDetails];
          newDetails[index] = data;
          return newDetails;
        });
      } catch (error) {
        console.error("Error fetching phone details:", error);
      }
    };

    selectedPhones.forEach((phone, index) => {
      if (phone) {
        fetchPhoneDetails(phone, index);
      }
    });
  }, [selectedPhones]);

  const handleSelect = (index, slug) => {
    const newSelectedPhones = [...selectedPhones];
    newSelectedPhones[index] = slug;
    setSelectedPhones(newSelectedPhones);
  };

  const renderDetails = (details, section) => {
    if (!details) return "Не выбрано";

    switch (section) {
      case "Photos": {
        if (!details.photos || details.photos.length === 0) return "Не выбрано";
        const images = {};
        details.photos.forEach((photo) => {
          const colorName = photo.color.color;
          images[colorName] = photo.image;
        });
        return (
          <Swiper
            modules={[Pagination]}
            spaceBetween={16}
            slidesPerView={1}
            pagination={{
              clickable: true,
              renderBullet: (index, className) => {
                const colors = Object.keys(images);
                return `<span class="${className}" style="background-color: ${colors[index]}; width: 1rem; height: 1rem; top: 2rem;"></span>`;
              }
            }}
          >
            {Object.entries(images).map(([color, imageUrl]) => (
              <SwiperSlide key={color}>
                <img src={imageUrl} alt={color} />
              </SwiperSlide>
            ))}
          </Swiper>
        );
      }
      case "Network":
        return details.network && details.network.length > 0
          ? details.network.map((n) => n.name).join(", ")
          : "Нет данных";
      case "Category":
        return details.category ? details.category.name : "Нет данных";
      case "Memories":
        return details.memories && details.memories.length > 0
          ? safeParse(details.memories.map((m) => m.size).join(", "))
          : "Нет данных";
      case "Front Camera":
        return details.front_camera && details.front_camera.megapixels
          ? `${details.front_camera.megapixels} MP`
          : "Нет данных";
      case "Back Camera":
        return details.back_camera && details.back_camera.megapixels
          ? `${details.back_camera.megapixels} MP`
          : "Нет данных";
      case "Price":
        return details.price ? details.price : "Нет данных";
      case "Operating System":
        return details.operating_system
          ? safeParse(details.operating_system)
          : "Нет данных";
      case "CPU Info":
        return details.cpu_info ? safeParse(details.cpu_info) : "Нет данных";
      case "Display":
        return details.display ? `${details.display} inches` : "Нет данных";
      case "Display Info":
        return details.display_info
          ? safeParse(details.display_info)
          : "Нет данных";
      case "Resolution Info":
        return details.resolution_info
          ? safeParse(details.resolution_info)
          : "Нет данных";
      case "Camera Info":
        return details.camera_info
          ? safeParse(details.camera_info)
          : "Нет данных";
      case "Connection":
        return details.connection
          ? safeParse(details.connection)
          : "Нет данных";
      case "Sensors":
        return details.sensors ? safeParse(details.sensors) : "Нет данных";
      case "Battery Info":
        return details.battery_info
          ? safeParse(details.battery_info)
          : "Нет данных";
      case "Sound Info":
        return details.sound_info
          ? safeParse(details.sound_info)
          : "Нет данных";
      case "Cellular Info":
        return details.cellular_info
          ? safeParse(details.cellular_info)
          : "Нет данных";
      case "Audio Video Info":
        return details.audio_video_info
          ? safeParse(details.audio_video_info)
          : "Нет данных";
      case "Complete Set":
        return details.complete_set
          ? safeParse(details.complete_set)
          : "Нет данных";
      case "Biometric Info":
        return details.biometric_info
          ? safeParse(details.biometric_info)
          : "Нет данных";
      case "Parameters Info":
        return details.parameters_info
          ? safeParse(details.parameters_info)
          : "Нет данных";
      case "Record Video":
        return details.record_video
          ? safeParse(details.record_video)
          : "Нет данных";
      case "Possible Connection":
        return details.possible_connection
          ? safeParse(details.possible_connection)
          : "Нет данных";
      default:
        return "Неизвестная секция";
    }
  };


  const sections = [
    "Photos",
    "Network",
    "Category",
    "Memories",
    "Front Camera",
    "Back Camera",
    "Price",
    "Operating System",
    "CPU Info",
    "Display",
    "Display Info",
    "Resolution Info",
    "Camera Info",
    "Connection",
    "Sensors",
    "Battery Info",
    "Sound Info",
    "Cellular Info",
    "Audio Video Info",
    "Complete Set",
    "Biometric Info",
    "Parameters Info",
    "Record Video",
    "Possible Connection"
  ];

  return (
    <div>
      <div className="comparison-container">
        <div className="container">
          <Title props="Сравнить модели телефонов Tecno" />
          <div className="selected-phones">
            {[0, 1, 2].map((_, index) => (
              <DropdownPhones
                key={index}
                onSelect={(selectedSlug) => handleSelect(index, selectedSlug)}
                selectedPhones={selectedPhones}
              />
            ))}
          </div>
          <div>
            <div className="comparison-table">
              {phoneDetails.some((details) => details) && (
                <>
                  {sections
                    .filter((section) =>
                      phoneDetails.some((details) =>
                        details
                          ? renderDetails(details, section) !== "Не выбрано"
                          : false
                      )
                    )
                    .map((section) => (
                      <div className="comparison-section" key={section}>
                        <Title props={section} />
                        <div className="comparison-row">
                          {phoneDetails.map((details, index) => (
                            <div key={index} className="comparison-cell">
                              {renderDetails(details, section)}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ComparePhones;
