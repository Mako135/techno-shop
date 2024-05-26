import { useState, useEffect } from "react";
import usePhoneStore from "../../services/store/usePhoneStore";
import PropTypes from "prop-types";

const BackCamera = ({ onBackCameraChange }) => {
  const { cameras, fetchCameras } = usePhoneStore();
  const [selectedCamera, setSelectedCamera] = useState("");

  useEffect(() => {
    fetchCameras();
  }, [fetchCameras]);

  const handleCameraChange = (event) => {
    const { value } = event.target;
    const newValue = selectedCamera === value ? "" : value;
    setSelectedCamera(newValue);
    onBackCameraChange(newValue);
  };

  return (
    <div className="category">
      {cameras?.map((camera) => (
        <label key={camera.id}>
          <input
            type="radio"
            name="backCamera"
            value={camera.id}
            checked={selectedCamera === camera.id.toString()}
            onChange={handleCameraChange}
          />
          {camera.megapixels} MP
        </label>
      ))}
    </div>
  );
};

BackCamera.propTypes = {
  onBackCameraChange: PropTypes.func.isRequired
};

export default BackCamera;
