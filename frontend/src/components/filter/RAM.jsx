import { useState, useEffect } from "react";
import usePhoneStore from "../../store/usePhoneStore";
import PropTypes from "prop-types";

const RAM = ({ onRAMChange }) => {
  const { memories, fetchMemories } = usePhoneStore();
  const [selectedRAM, setSelectedRAM] = useState([]);

  useEffect(() => {
    fetchMemories();
  }, [fetchMemories]);

  const handleRAMChange = (event) => {
    const { value, checked } = event.target;
    let newSelectedRAM = [];
    if (checked) {
      newSelectedRAM = [...selectedRAM, value];
    } else {
      newSelectedRAM = selectedRAM.filter((ram) => ram !== value);
    }
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
            value={memory.id}
            checked={selectedRAM.includes(memory.id.toString())}
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
