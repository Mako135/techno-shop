import { useState } from "react";
import CountriesContent from "./CountriesContent";
import { COUNTRIES } from "../../services/countries/Countries";
const Countries = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="countries-container">
      <div className="container">
      <div className="tabs">
        <div
          className={`tab ${activeTab === 0 ? "active" : ""}`}
          onClick={() => handleTabClick(0)}
        >
          Africa
        </div>
        <div
          className={`tab ${activeTab === 1 ? "active" : ""}`}
          onClick={() => handleTabClick(1)}
        >
          Asia
        </div>
        <div
          className={`tab ${activeTab === 2 ? "active" : ""}`}
          onClick={() => handleTabClick(2)}
        >
          South America
        </div>
        <div
          className={`tab ${activeTab === 3 ? "active" : ""}`}
          onClick={() => handleTabClick(3)}
        >
          North America
        </div>
        <div
          className={`tab ${activeTab === 4 ? "active" : ""}`}
          onClick={() => handleTabClick(4)}
        >
          Europe
        </div>
      </div>
      <div className="tab-content">
        {activeTab === 0 && (
          <div>
            <CountriesContent data={COUNTRIES.Africa} />
          </div>
        )}
          {activeTab === 1 && <div>
            <CountriesContent data={COUNTRIES.Asia} />
          </div>}
          {activeTab === 2 && <div>
            <CountriesContent data={COUNTRIES.SAmerica} />
          </div>}
          {activeTab === 3 && <div>
            <CountriesContent data={COUNTRIES.NAmerica} />
          </div>}
          {activeTab === 4 && <div>
            <CountriesContent data={COUNTRIES.Europe} />
          </div>}
      </div>
    </div>
    </div>
  );
};

export default Countries;
