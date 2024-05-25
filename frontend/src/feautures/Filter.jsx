import { useState } from "react";
import Accordion from "./Accordion";
import Category from "../components/filter/Category";
import Display from "../components/filter/Display";
import Resolution from "../components/filter/Resolution";
import RAM from "../components/filter/RAM";
import FrontCameras from "../components/filter/FrontCameras";
import BackCamera from "../components/filter/BackCamera";
import Battery from "../components/filter/Battery";

const Filter = () => {
  const accordionData = [
    { title: "Серия", content: <Category /> },
    { title: "Дисплей", content: <Display /> },
    { title: "Разрешение", content: <Resolution /> },
    { title: "Память", content: <RAM /> },
    { title: "Фронтальная камера", content: <FrontCameras /> },
    { title: "Основная камера", content: <BackCamera /> },
    { title: "Battery", content: <Battery /> }
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
      <p className="filter-title">Фильтры</p>
      <div style={{ padding: 10 }}>
        <div className="divider"></div>
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
