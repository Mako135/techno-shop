import PropTypes from "prop-types";
import { useState } from "react";
import DownloadApps from "./DownloadApps";
const PhantomDownloads = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="download-phone-cards">
      {data?.map((phone) => (
        <div
          key={phone.id}
          className="download-phone-card"
          onClick={toggleMenu}
        >
          <img src={phone.photos[0].image} alt="" />
          <p>{phone.title}</p>
        </div>
      ))}
      <div className={`menu ${isOpen ? "open" : ""}`}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "2rem",
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
        <div className="download-popup-content">
          <DownloadApps />
        </div>
      </div>
    </div>
  );
};

PhantomDownloads.propTypes = {
  data: PropTypes.array,
};

export default PhantomDownloads;
