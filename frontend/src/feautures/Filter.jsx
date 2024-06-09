import { useState } from "react";
import Accordion from "./Accordion";
import Category from "../components/filter/Category";
import Display from "../components/filter/Display";
import Resolution from "../components/filter/Resolution";
import RAM from "../components/filter/RAM";
import FrontCameras from "../components/filter/FrontCameras";
import BackCamera from "../components/filter/BackCamera";
import Battery from "../components/filter/Battery";
import useFilteredPhoneStore from "../services/store/FlteredPhoneStore";
import { LuSettings2 } from "react-icons/lu";

const Filter = () => {
  const { fetchPhones } = useFilteredPhoneStore();
  const [filters, setFilters] = useState({
    category: "",
    display: "",
    resolution: "",
    ram: [],
    frontCamera: "",
    backCamera: "",
    touchId: false,
    battery: ""
  });

  const handleChange = (type, value) => {
    console.log(`Updating filter ${type} to ${value}`);
    const newFilters = { ...filters, [type]: value };
    setFilters(newFilters);
    fetchPhones(newFilters);
  };

  const handleTouchIdChange = (event) => {
    const { checked } = event.target;
    console.log(`Touch ID changed to ${checked}`);
    handleChange("touchId", checked);
  };

  const accordionData = [
    {
      title: "Серия",
      content: (
        <Category
          onCategoryChange={(value) => handleChange("category", value)}
        />
      )
    },
    {
      title: "Дисплей",
      content: (
        <Display onDisplayChange={(value) => handleChange("display", value)} />
      )
    },
    {
      title: "Разрешение",
      content: (
        <Resolution
          onResolutionChange={(value) => handleChange("resolution", value)}
        />
      )
    },
    {
      title: "Память",
      content: <RAM onRAMChange={(value) => handleChange("ram", value)} />
    },
    {
      title: "Фронтальная камера",
      content: (
        <FrontCameras
          onFrontCameraChange={(value) => handleChange("frontCamera", value)}
        />
      )
    },
    {
      title: "Основная камера",
      content: (
        <BackCamera
          onBackCameraChange={(value) => handleChange("backCamera", value)}
        />
      )
    },
    {
      title: "Battery",
      content: (
        <Battery onBatteryChange={(value) => handleChange("battery", value)} />
      )
    }
  ];

  const initialOpenState = accordionData.reduce((acc, _, index) => {
    acc[index] = true;
    return acc;
  }, {});

  const [openAccordions, setOpenAccordions] = useState(initialOpenState);

  const toggleAccordion = (index) => {
    setOpenAccordions((prevState) => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  return (
    <div className="filter">
      <p className="filter-title">
        Фильтры <LuSettings2 />
      </p>
      <div className="divider"></div>
      <div className="category">
        <label htmlFor="touchId" style={{ padding: 10 }}>
          <input
            type="checkbox"
            name="touchId"
            id="touchId"
            checked={filters.touchId}
            onChange={handleTouchIdChange}
          />
          Отпечаток пальцев
        </label>
      </div>
      {accordionData.map((item, index) => (
        <Accordion
          key={index}
          title={item.title}
          isOpen={!!openAccordions[index]}
          toggleAccordion={() => toggleAccordion(index)}
        >
          <div>{item.content}</div>
        </Accordion>
      ))}
    </div>
  );
};

export default Filter;
