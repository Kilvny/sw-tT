import React from "react";

const FurnitureForm = ({ onChange, value }) => {
  return (
    <label htmlFor="height" className="product_form_field">
      <p>Height (CM)</p>
      <input
        type="text"
        name="type.Furniture.height"
        id="height"
        placeholder="Enter height of the product"
        onChange={onChange}
        value={value.type.Furniture?.height}
      />
      <p>Width (CM)</p>
      <input
        type="text"
        name="type.Furniture.width"
        id="width"
        placeholder="Enter width of the product"
        onChange={onChange}
        value={value.type.Furniture?.width}
      />
      <p>Length (CM)</p>
      <input
        type="text"
        name="type.Furniture.length"
        id="Length"
        placeholder="Enter length of the product"
        onChange={onChange}
        value={value.type.Furniture?.length}
      />
      <span className="product_description">
        Please provide dimensions in HxWxL format
      </span>
    </label>
  );
};

export default FurnitureForm;
