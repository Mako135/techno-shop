import { useState } from "react";
import PropTypes from "prop-types";

const Battery = ({ onBatteryChange }) => {
  const [selectedBattery, setSelectedBattery] = useState("");

  const handleBatteryChange = (event) => {
    const { value } = event.target;
    console.log(value);

    const newValue = selectedBattery === value ? "" : value;
    setSelectedBattery(newValue);
    onBatteryChange(newValue);
  };

  return (
    <div className="category">
      <label>
        <input
          type="radio"
          name="battery"
          value="0-3000"
          checked={selectedBattery === "0-3000"}
          onChange={handleBatteryChange}
        />
        0 - 3000 mAh
      </label>
      <label>
        <input
          type="radio"
          name="battery"
          value="3000-5000"
          checked={selectedBattery === "3000-5000"}
          onChange={handleBatteryChange}
        />
        3000 - 5000 mAh
      </label>
      <label>
        <input
          type="radio"
          name="battery"
          value="5000-"
          checked={selectedBattery === "5000-"}
          onChange={handleBatteryChange}
        />
        ≥ 5000 mAh
      </label>
    </div>
  );
};

Battery.propTypes = {
  onBatteryChange: PropTypes.func.isRequired
};

export default Battery;
