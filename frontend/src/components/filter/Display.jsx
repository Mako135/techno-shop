import { useState } from "react";
import PropTypes from "prop-types";

const Display = ({ onDisplayChange }) => {
  const [selectedDisplay, setSelectedDisplay] = useState("");

  const handleDisplayChange = (event) => {
    const { value } = event.target;
    if (selectedDisplay === value) {
      setSelectedDisplay(""); // Снимаем выбор, если кликнули по уже выбранному чекбоксу
      onDisplayChange("");
    } else {
      setSelectedDisplay(value);
      onDisplayChange(value); // Передаем выбранное значение дисплея в родительский компонент
    }
  };

  return (
    <div className="category">
      <label>
        <input
          type="checkbox"
          name="display"
          value="5.0"
          checked={selectedDisplay === "5.0"}
          onChange={handleDisplayChange}
        />
        5.0”
      </label>
      <label>
        <input
          type="checkbox"
          name="display"
          value="5.5"
          checked={selectedDisplay === "5.5"}
          onChange={handleDisplayChange}
        />
        5.5”
      </label>
      <label>
        <input
          type="checkbox"
          name="display"
          value="5.65"
          checked={selectedDisplay === "5.65"}
          onChange={handleDisplayChange}
        />
        5.65”
      </label>
      <label>
        <input
          type="checkbox"
          name="display"
          value="5.7"
          checked={selectedDisplay === "5.7"}
          onChange={handleDisplayChange}
        />
        5.7”
      </label>
      <label>
        <input
          type="checkbox"
          name="display"
          value="6.0"
          checked={selectedDisplay === "6.0"}
          onChange={handleDisplayChange}
        />
        6.0”
      </label>
      <label>
        <input
          type="checkbox"
          name="display"
          value="6.1"
          checked={selectedDisplay === "6.1"}
          onChange={handleDisplayChange}
        />
        6.1”
      </label>
      <label>
        <input
          type="checkbox"
          name="display"
          value="6.2"
          checked={selectedDisplay === "6.2"}
          onChange={handleDisplayChange}
        />
        6.2”
      </label>
      <label>
        <input
          type="checkbox"
          name="display"
          value="6.35"
          checked={selectedDisplay === "6.35"}
          onChange={handleDisplayChange}
        />
        6.35”
      </label>
      <label>
        <input
          type="checkbox"
          name="display"
          value="6.4"
          checked={selectedDisplay === "6.4"}
          onChange={handleDisplayChange}
        />
        6.4” и более
      </label>
    </div>
  );
};

Display.propTypes = {
  onDisplayChange: PropTypes.any
};

export default Display;
