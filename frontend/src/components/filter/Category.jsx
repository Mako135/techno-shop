import { useState } from "react";
import PropTypes from "prop-types";

const Category = ({ onCategoryChange }) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (event) => {
    const { value } = event.target;
    setSelectedCategory(value);
    onCategoryChange(value); // Передаем выбранное значение категории в родительский компонент
  };

  return (
    <div className="category">
      <label>
        <input
          type="radio"
          name="category"
          value="Phantom"
          checked={selectedCategory === "Phantom"}
          onChange={handleCategoryChange}
        />
        Phantom
      </label>
      <label>
        <input
          type="radio"
          name="category"
          value="Spark"
          checked={selectedCategory === "Spark"}
          onChange={handleCategoryChange}
        />
        Spark
      </label>
      <label>
        <input
          type="radio"
          name="category"
          value="Camon"
          checked={selectedCategory === "Camon"}
          onChange={handleCategoryChange}
        />
        Camon
      </label>
      <label>
        <input
          type="radio"
          name="category"
          value="Pova"
          checked={selectedCategory === "Pova"}
          onChange={handleCategoryChange}
        />
        Pova
      </label>
    </div>
  );
};
Category.propTypes = {
  onCategoryChange: PropTypes.any
};

export default Category;
