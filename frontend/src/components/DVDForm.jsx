import React, { useEffect, useRef } from "react";

const DVDForm = ({ register }) => {
  return (
    <label
      htmlFor="size"
      className="product_form_field"
      id="product_form_field"
    >
      <p>Size (MB)</p>
      <input
        type="text"
        name="size"
        id="size"
        placeholder="Enter size of the product"
        {...register("type.size", { required: true })}
      />
      <span className="product_description">Please provide size in MB</span>
    </label>
  );
};

export default DVDForm;
