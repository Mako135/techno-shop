import { useState } from "react";
import Accordion from "../../feautures/Accordion";
import PropTypes from "prop-types";


const Tabs = ({ data }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Получаем ключи для названий вкладок
  const tabKeys = Object.keys(data);

  return (
    <div className="container">
      <div className="tabs">
        {tabKeys.map((key, index) => (
          <div
            key={index}
            className={`tab ${activeTab === index ? "active" : ""}`}
            onClick={() => handleTabClick(index)}
          >
            {key}
          </div>
        ))}
      </div>
      <div className="tab-content">
        {tabKeys.map((key, tabIndex) => (
          <div
            key={tabIndex}
            style={{ display: activeTab === tabIndex ? "block" : "none" }}
          >
            {data[key].map((item, index) => (
              <Accordion
                key={index}
                title={item.title}
                isOpen={openIndex === index}
                toggleAccordion={() => toggleAccordion(index)}
              >
                {Array.isArray(item.content)
                  ? item.content.map((contentItem, contentIndex) => (
                      <p key={contentIndex}>
                        {contentItem}
                        <br />
                        <br />
                      </p>
                    ))
                  : item.content}
              </Accordion>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Tabs;
