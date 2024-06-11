import { useEffect, useState } from "react";
import DropdownPhones from "../../components/phones/DropdownPhones";
import Title from "../../components/text/Title";
import { fetchData } from "../../services/requests/requests";
import { API } from "../../services/store/usePhoneStore";
import parse from "html-react-parser";
import Footer from "../../components/footer/Footer";

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
      case "Photos":
        return details.photos.map((photo) => (
          <img
            key={photo.id}
            src={photo.image}
            alt={photo.color.name}
          />
        ));
      case "Network":
        return details.network.map((n) => n.name).join(", ");
      case "Category":
        return details.category.name;
      case "Memories":
        return safeParse(details.memories.map((m) => m.size).join(", "));
      case "Front Camera":
        return `${details.front_camera.megapixels} MP`;
      case "Back Camera":
        return `${details.back_camera.megapixels} MP`;
      case "Price":
        return details.price;
      case "Operating System":
        return safeParse(details.operating_system);
      case "CPU Info":
        return safeParse(details.cpu_info);
      case "Display":
        return `${details.display} inches`;
      case "Display Info":
        return safeParse(details.display_info);
      case "Resolution Info":
        return safeParse(details.resolution_info);
      case "Camera Info":
        return safeParse(details.camera_info);
      case "Connection":
        return safeParse(details.connection);
      case "Sensors":
        return safeParse(details.sensors);
      case "Battery Info":
        return safeParse(details.battery_info);
      case "Sound Info":
        return safeParse(details.sound_info);
      case "Cellular Info":
        return safeParse(details.cellular_info);
      case "Audio Video Info":
        return safeParse(details.audio_video_info);
      case "Complete Set":
        return safeParse(details.complete_set);
      case "Biometric Info":
        return safeParse(details.biometric_info);
      case "Parameters Info":
        return safeParse(details.parameters_info);
      case "Record Video":
        return safeParse(details.record_video);
      case "Possible Connection":
        return safeParse(details.possible_connection);
      default:
        return "Неизвестная секция";
    }
  };

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
              />
            ))}
          </div>
          <div>
            <div className="comparison-table">
              {phoneDetails.some((details) => details) && (
                <>
                  {[
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
                  ].map((section) => (
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
