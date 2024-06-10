import { useState, useEffect } from "react";
import Accordion from "../../feautures/Accordion";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import PropTypes from "prop-types";
import { fetchData } from "../../services/requests/requests";
import { API } from "../../services/store/usePhoneStore";

const DropdownPhones = ({ onSelect }) => {
  const [phonesData, setPhonesData] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [openAccordions, setOpenAccordions] = useState({});
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const fetchPhones = async () => {
      try {
        const response = await fetchData(`${API}/api/phones/`);
        const data = await response;
        setPhonesData(data);
      } catch (error) {
        console.error("Error fetching phone data:", error);
      }
    };

    fetchPhones();
  }, []);

  const categorizedPhones = phonesData.reduce((acc, phone) => {
    const categoryName = phone.category.name;
    if (!acc[categoryName]) {
      acc[categoryName] = [];
    }
    acc[categoryName].push(phone);
    return acc;
  }, {});

  const toggleAccordion = (key) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsDropdownOpen(false);
    onSelect(item.slug);
  };

  return (
    <div className="dropdown-select">
      <div
        className="dropdown-header"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        {selectedItem ? selectedItem.title : "Выберите телефон"}
        {isDropdownOpen ? (
          <RiArrowUpSLine fontSize={24} />
        ) : (
          <RiArrowDownSLine fontSize={24} />
        )}
      </div>
      {isDropdownOpen && (
        <div className="dropdown-content">
          {Object.keys(categorizedPhones).map((category) => (
            <Accordion
              key={category}
              title={category}
              isOpen={openAccordions[category]}
              toggleAccordion={() => toggleAccordion(category)}
            >
              {categorizedPhones[category].length > 0 ? (
                <ul>
                  {categorizedPhones[category].map((item) => (
                    <li key={item.id} onClick={() => handleItemClick(item)}>
                      {item.title}
                    </li>
                  ))}
                </ul>
              ) : (
                <div>No items available</div>
              )}
            </Accordion>
          ))}
        </div>
      )}
    </div>
  );
};

DropdownPhones.propTypes = {
  onSelect: PropTypes.func.isRequired
};

export default DropdownPhones;
