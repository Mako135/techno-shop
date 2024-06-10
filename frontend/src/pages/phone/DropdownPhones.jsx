import { useState, useEffect } from "react";
import Accordion from "../../feautures/Accordion";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import PropTypes from 'prop-types'
const phoneData = {
  CAMON: [
    "CAMON 20 Premier 5G",
    "CAMON 20 Pro 5G",
    "CAMON 20 Pro",
    "CAMON 20",
    "CAMON 19 Pro"
  ],
  POVA: [],
  SPARK: [],
  POP: [],
  Phantom: []
};

const DropdownPhones = ({ initialItem, onSelect }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [openAccordions, setOpenAccordions] = useState({});
  const [selectedItem, setSelectedItem] = useState(initialItem);

  useEffect(() => {
    setSelectedItem(initialItem);
  }, [initialItem]);

  const toggleAccordion = (key) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsDropdownOpen(false);
    onSelect(item); // Передаем выбранный элемент в родительский компонент
  };

  return (
    <div className="dropdown-select">
      <div
        className="dropdown-header"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        {selectedItem || "Select an item"}
        {isDropdownOpen ? (
          <RiArrowUpSLine fontSize={24} />
        ) : (
          <RiArrowDownSLine fontSize={24} />
        )}
      </div>
      {isDropdownOpen && (
        <div className="dropdown-content">
          {Object.keys(phoneData).map((category) => (
            <Accordion
              key={category}
              title={category}
              isOpen={openAccordions[category]}
              toggleAccordion={() => toggleAccordion(category)}
            >
              {phoneData[category].length > 0 ? (
                <ul>
                  {phoneData[category].map((item) => (
                    <li key={item} onClick={() => handleItemClick(item)}>
                      {item}
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
  onSelect: PropTypes.func.isRequired,
  initialItem: PropTypes.string
};


export default DropdownPhones;
