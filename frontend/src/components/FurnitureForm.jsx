import React from "react";
import PopUp from "./common/PopUp";

const FurnitureForm = ({ register, errors }) => {
  return (
    <label
      id="product_form_field"
      htmlFor="height"
      className="product_form_field"
    >
      <p>Height (CM)</p>
      <input
        type="text"
        name="height"
        id="height"
        placeholder="Enter height of the product"
        {...register("type.dimensions.height", {
          required: "required",
          pattern: {
            message: "Please enter a valid height",
            value: /^-?(?:\d+|\d*\.\d+)$/,
          },
        })}
      />
      <p>Width (CM)</p>
      <input
        type="text"
        name="width"
        id="width"
        placeholder="Enter width of the product"
        {...register("type.dimensions.width", {
          required: "required",
          pattern: {
            message: "Please enter a valid width",
            value: /^-?(?:\d+|\d*\.\d+)$/,
          },
        })}
      />
      <p>Length (CM)</p>
      <input
        type="text"
        name="length"
        id="length"
        placeholder="Enter length of the product"
        {...register("type.dimensions.length", {
          required: "required",
          pattern: {
            message: "Please enter a valid length",
            value: /^-?(?:\d+|\d*\.\d+)$/,
          },
        })}
      />
      <span className="product_description">
        Please provide dimensions in HxWxL format
      </span>
      {errors?.type?.dimensions?.height && (
        <div>{<PopUp popupText={errors.type.dimensions.height.message} />}</div>
      )}
      {errors?.type?.dimensions?.width && (
        <div>{<PopUp popupText={errors.type.dimensions.width.message} />}</div>
      )}
      {errors?.type?.dimensions?.length && (
        <div>{<PopUp popupText={errors.type.dimensions.length.message} />}</div>
      )}
    </label>
  );
};

export default FurnitureForm;
