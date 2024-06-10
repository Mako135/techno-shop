// ComparePhones.js
import { useState } from "react";
import DropdownPhones from "./DropdownPhones";

const initialSelectedPhones = [
  "CAMON 20 Premier 5G",
  "CAMON 20 Pro 5G",
  "CAMON 20 Pro"
];

const ComparePhones = () => {
  const [selectedPhones, setSelectedPhones] = useState(initialSelectedPhones);

  const handleSelect = (index, phone) => {
    const newSelectedPhones = [...selectedPhones];
    newSelectedPhones[index] = phone;
    setSelectedPhones(newSelectedPhones);
  };

  return (
    <div className="container">
      <div className="selected-phones">
        {selectedPhones.map((phone, index) => (
          <DropdownPhones
            key={index}
            initialItem={phone}
            onSelect={(phone) => handleSelect(index, phone)}
          />
        ))}
      </div>
      <div>
        <h2>Selected Phones</h2>
        <ul>
          {selectedPhones.map((phone, index) => (
            <li key={index}>{phone || "Not selected"}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ComparePhones;
