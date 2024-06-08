import { useState, useEffect } from "react";
import usePhoneStore from "../../services/store/usePhoneStore";
import PropTypes from "prop-types";

const RAM = ({ onRAMChange }) => {
  const { memories, fetchMemories } = usePhoneStore();
  const [selectedRAM, setSelectedRAM] = useState([]);

  useEffect(() => {
    fetchMemories();
  }, [fetchMemories]);

  const handleRAMChange = (event) => {
    const { value } = event.target;
    const newSelectedRAM = selectedRAM === value ? "" : value;
    setSelectedRAM(newSelectedRAM);
    onRAMChange(newSelectedRAM);
  };

  return (
    <div className="category">
      {memories?.map((memory) => (
        <label key={memory.id}>
          <input
            type="checkbox"
            name="ram"
            value={memory.id.toString()}
            checked={selectedRAM === memory.id.toString()}
            onChange={handleRAMChange}
          />
          {memory.size} GB
        </label>
      ))}
    </div>
  );
};

RAM.propTypes = {
  onRAMChange: PropTypes.func.isRequired
};

export default RAM;
