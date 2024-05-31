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
    const newSelectedCamera = selectedCamera === value ? "" : value;
    setSelectedCamera(newSelectedCamera);
    onFrontCameraChange(newSelectedCamera); // Передаем новое значение фронтальной камеры в родительский компонент
  };

  return (
    <div className="category">
      {cameras?.map((camera) => (
        <label key={camera.id}>
          <input
            type="checkbox"
            name="frontCamera"
            value={camera.id.toString()}
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
