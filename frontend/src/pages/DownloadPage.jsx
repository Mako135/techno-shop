import { useEffect, useState } from "react";
import SparkDownloads from "../components/download/SparkDownloads";
import PhantomDownloads from "../components/download/PhantomDownloads";
import PovaDownloads from "../components/download/PovaDownloads";
import CamonDownloads from "../components/download/CamonDownloads";
import { fetchData } from "../services/requests/requests";
import { API } from "../services/store/usePhoneStore";

const DownloadPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [phonesData, setPhonesData] = useState([]);
  
  useEffect(() => {
    document.title = "Сервисные Центры | Tecno";
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
            <PhantomDownloads data={categorizedPhones.Phantom} />
          </div>
        )}
        {activeTab === 1 && (
          <div>
            <SparkDownloads data={categorizedPhones.Spark} />
          </div>
        )}
        {activeTab === 2 && (
          <div>
            <PovaDownloads data={categorizedPhones.Pova} />
          </div>
        )}
        {activeTab === 3 && (
          <div>
            <CamonDownloads data={categorizedPhones.Camon} />
          </div>
        )}
      </div>
    </div>
  );
};

export default DownloadPage;
