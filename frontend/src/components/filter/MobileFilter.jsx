import { useState } from "react";
import { LuSettings2 } from "react-icons/lu";
import Filter from "../../feautures/Filter";

const MobileFilter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className="mobile-filter" onClick={toggleMenu}>
        Фильтры
        <LuSettings2 />
      </div>
      <div className={`menu ${isOpen ? "open" : ""}`}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "2rem"
          }}
        >
          <div className="space"></div>
          <div
            className={`burger-button ${isOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </div>
        <div className="mobile-filter-content">
          <Filter />
        </div>
      </div>
    </div>
  );
};

export default MobileFilter;
