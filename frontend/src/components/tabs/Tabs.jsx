import { useState } from "react";
import Accordion from "../../feautures/Accordion";

const osData = [
  { title: "Section 1", content: "Content for section 1" },
  { title: "Section 2", content: "Content for section 2" },
  { title: "Section 2", content: "Content for section 2" },
  { title: "Section 2", content: "Content for section 2" },
  { title: "Section 3", content: "Content for section 3" }
];
const phoneData = [
  { title: "Section 1", content: "Content for section 1" },
  { title: "Section 2", content: "Content for section 2" },
  { title: "Section 3", content: "Content for section 3" }
];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
    };
    
     const [openIndex, setOpenIndex] = useState(null);

     const toggleAccordion = (index) => {
       setOpenIndex(openIndex === index ? null : index);
     };

  return (
    <div className="container">
      <div className="tabs">
        <div
          className={`tab ${activeTab === 0 ? "active" : ""}`}
          onClick={() => handleTabClick(0)}
        >
          Телефоны
        </div>
        <div
          className={`tab ${activeTab === 1 ? "active" : ""}`}
          onClick={() => handleTabClick(1)}
        >
          HiOS
        </div>
      </div>
      <div className="tab-content">
        {activeTab === 0 && (
          <div>
            {phoneData.map((item, index) => (
              <Accordion
                key={index}
                title={item.title}
                isOpen={openIndex === index}
                toggleAccordion={() => toggleAccordion(index)}
              >
                {item.content}
              </Accordion>
            ))}
          </div>
        )}
        {activeTab === 1 && (
          <div>
            {osData.map((item, index) => (
              <Accordion
                key={index}
                title={item.title}
                isOpen={openIndex === index}
                toggleAccordion={() => toggleAccordion(index)}
              >
                {item.content}
              </Accordion>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
