import { useState } from "react";
import SparkDownloads from "../components/download/SparkDownloads";
import PhantomDownloads from "../components/download/PhantomDownloads";
import PovaDownloads from "../components/download/PovaDownloads";
import CamonDownloads from "../components/download/CamonDownloads";

const DownloadPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="container">
      <div className="tabs">
        <div
          className={`tab ${activeTab === 0 ? "active" : ""}`}
          onClick={() => handleTabClick(0)}
        >
          Phantom
        </div>
        <div
          className={`tab ${activeTab === 1 ? "active" : ""}`}
          onClick={() => handleTabClick(1)}
        >
          Spark
        </div>
        <div
          className={`tab ${activeTab === 2 ? "active" : ""}`}
          onClick={() => handleTabClick(2)}
        >
          Pova
        </div>
        <div
          className={`tab ${activeTab === 3 ? "active" : ""}`}
          onClick={() => handleTabClick(3)}
        >
          Camon
        </div>
      </div>
      <div className="tab-content">
        {activeTab === 0 && (
          <div>
            <PhantomDownloads />
          </div>
        )}
        {activeTab === 1 && (
          <div>
            <SparkDownloads />
          </div>
        )}
        {activeTab === 2 && (
          <div>
            <PovaDownloads />
          </div>
        )}
        {activeTab === 3 && (
          <div>
            <CamonDownloads />
          </div>
        )}
      </div>
    </div>
  );
};

export default DownloadPage;
