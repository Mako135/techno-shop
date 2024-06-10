import { useEffect, useState } from "react";
import DropdownPhones from "../../components/phones/DropdownPhones";
import Title from "../../components/text/Title";
import { fetchData } from "../../services/requests/requests";
import { API } from "../../services/store/usePhoneStore";
import parse from "html-react-parser";

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

  return (
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
      <div >
        <h2>Phone Details</h2>
        <div className="comparison-table">
          {phoneDetails.some((details) => details) && (
            <>
              {[
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
                "Possible Connection",
                "Photos"
              ].map((section) => (
                <div className="comparison-section" key={section}>
                  <Title props={section} />
                  <div className="comparison-row">
                    {phoneDetails.map((details, index) => (
                      <div key={index} className="comparison-cell">
                        {details
                          ? section === "Network"
                            ? details.network.map((n) => n.name).join(", ")
                            : section === "Category"
                            ? details.category.name
                            : section === "Memories"
                            ? safeParse(
                                details.memories.map((m) => m.size).join(", ")
                              )
                            : section === "Front Camera"
                            ? `${details.front_camera.megapixels} MP`
                            : section === "Back Camera"
                            ? `${details.back_camera.megapixels} MP`
                            : section === "Price"
                            ? details.price
                            : section === "Operating System"
                            ? safeParse(details.operating_system)
                            : section === "CPU Info"
                            ? safeParse(details.cpu_info)
                            : section === "Display"
                            ? `${details.display} inches`
                            : section === "Display Info"
                            ? safeParse(details.display_info)
                            : section === "Resolution Info"
                            ? safeParse(details.resolution_info)
                            : section === "Camera Info"
                            ? safeParse(details.camera_info)
                            : section === "Connection"
                            ? safeParse(details.connection)
                            : section === "Sensors"
                            ? safeParse(details.sensors)
                            : section === "Battery Info"
                            ? safeParse(details.battery_info)
                            : section === "Sound Info"
                            ? safeParse(details.sound_info)
                            : section === "Cellular Info"
                            ? safeParse(details.cellurral_info)
                            : section === "Audio Video Info"
                            ? safeParse(details.audio_video_info)
                            : section === "Complete Set"
                            ? safeParse(details.complete_set)
                            : section === "Biometric Info"
                            ? safeParse(details.biometric_info)
                            : section === "Parameters Info"
                            ? safeParse(details.parameters_info)
                            : section === "Record Video"
                            ? safeParse(details.record_video)
                            : section === "Possible Connection"
                            ? safeParse(details.possible_connection)
                            : section === "Photos"
                            ? details.photos.map((photo) => (
                                <img
                                  key={photo.id}
                                  src={photo.image}
                                  alt={photo.color.name}
                                  style={{ width: "50px" }}
                                />
                              ))
                            : "Not available"
                          : "Not selected"}
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
  );
};

export default ComparePhones;
