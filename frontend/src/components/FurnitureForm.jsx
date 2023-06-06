import React, { useState } from "react";

const FurnitureForm = ({ onChange, value }) => {

  const [dimensions, setDimensions] = useState([,,]);

  const handleDimensionsChange = (event) => {
    const { name, value } = event.target;
    setDimensions((prevDimensions) => {
        const updatedDimensions = [...prevDimensions];
        const dimensionIndex = {
          height: 0,
          width: 1,
          length: 2,
        };
        updatedDimensions[dimensionIndex[name]] = value;
        onChange({ target: { value: updatedDimensions, name:'dimensions' } });
        return updatedDimensions;
    });
  };

  return (
    <label htmlFor="height" className="product_form_field">
      <p>Height (CM)</p>
      <input
        type="text"
        name="height"
        id="height"
        placeholder="Enter height of the product"
        onChange={handleDimensionsChange}
        value={dimensions[0] || ""}
      />
      <p>Width (CM)</p>
      <input
        type="text"
        name="width"
        id="width"
        placeholder="Enter width of the product"
        onChange={handleDimensionsChange}
        value={dimensions[1] || ""}
      />
      <p>Length (CM)</p>
      <input
        type="text"
        name="length"
        id="length"
        placeholder="Enter length of the product"
        onChange={handleDimensionsChange}
        value={dimensions[2] || ""}
      />
      <span className="product_description">
        Please provide dimensions in HxWxL format
      </span>
    </label>
  );
};

export default FurnitureForm;
