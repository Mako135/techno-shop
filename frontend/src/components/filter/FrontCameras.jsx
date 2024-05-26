import { useState, useEffect } from "react";
import usePhoneStore from "../../services/store/usePhoneStore";
import PropTypes from "prop-types";

const FrontCameras = ({ onFrontCameraChange }) => {
  const { cameras, fetchCameras } = usePhoneStore();
  const [selectedCamera, setSelectedCamera] = useState("");

  useEffect(() => {
    fetchCameras();
  }, [fetchCameras]);

  const handleCameraChange = (event) => {
    const { value } = event.target;
    setSelectedCamera(value);
    onFrontCameraChange(value); // Передаем новое значение фронтальной камеры в родительский компонент
  };

  return (
    <div className="category">
      {cameras?.map((camera) => (
        <label key={camera.id}>
          <input
            type="radio"
            name="frontCamera"
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

FrontCameras.propTypes = {
  onFrontCameraChange: PropTypes.func.isRequired
};

export default FrontCameras;
