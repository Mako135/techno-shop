import { useState } from "react";
import PropTypes from "prop-types";

const Resolution = ({ onResolutionChange }) => {
  const [selectedResolution, setSelectedResolution] = useState("");

  const handleResolutionChange = (event) => {
    const { value } = event.target;
    const newValue = selectedResolution === value ? "" : value;
    setSelectedResolution(newValue);
    onResolutionChange(newValue);
  };

  return (
    <div className="category">
      <label>
        <input
          type="checkbox"
          name="resolution"
          value="HD"
          checked={selectedResolution === "HD"}
          onChange={handleResolutionChange}
        />
        HD
      </label>
      <label>
        <input
          type="checkbox"
          name="resolution"
          value="FHD"
          checked={selectedResolution === "FHD"}
          onChange={handleResolutionChange}
        />
        FHD
      </label>
      <label>
        <input
          type="checkbox"
          name="resolution"
          value="FWVGA"
          checked={selectedResolution === "FWVGA"}
          onChange={handleResolutionChange}
        />
        FWVGA
      </label>
      <label>
        <input
          type="checkbox"
          name="resolution"
          value="WVGA"
          checked={selectedResolution === "WVGA"}
          onChange={handleResolutionChange}
        />
        WVGA
      </label>
    </div>
  );
};

Resolution.propTypes = {
  onResolutionChange: PropTypes.func.isRequired
};

export default Resolution;
