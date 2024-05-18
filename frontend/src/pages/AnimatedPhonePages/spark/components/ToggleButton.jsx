import { useState } from "react";
import PropTypes from "prop-types";

const ToggleButton = ({ onToggle }) => {
  const [isOn, setIsOn] = useState(false);

  const toggleButton = () => {
    const newState = !isOn;
    setIsOn(newState);
    onToggle(newState);
  };
  return (
    <div
      className={`toggle-container ${isOn ? "on" : "off"}`}
      onClick={toggleButton}
    >
      <div className="toggle-thumb"></div>
      <span className={`toggle-label ${isOn ? "onSpan" : "offSpan"}`}>
        {isOn ? "ON" : "OFF"}
      </span>
    </div>
  );
};

ToggleButton.propTypes = {
  onToggle: PropTypes.func.isRequired
};

export default ToggleButton;
