import React from "react";

const BookForm = ({ register }) => {
  return (
    <label
      htmlFor="weight"
      className="product_form_field"
      id="product_form_field"
    >
      <p>Weight (KG)</p>
      <input
        type="text"
        name="weight"
        id="weight"
        placeholder="Enter weight of the product"
        {...register("type.weight", { required: true })}
      />
      <span className="product_description">
        Please provide weight in Kilograms
      </span>
    </label>
  );
};

export default BookForm;
