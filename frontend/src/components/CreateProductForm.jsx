import React, { useState } from "react";
import DVDForm from "./DVDForm";
import FurnitureForm from "./FurnitureForm";
import BookForm from "./BookForm";

const CreateProductForm = ({ onChange, value, register, option, errors }) => {
  const options = ["DVD", "Furniture", "Book"];
  const measureOptions = ["size", "dimensions", "weight"];
  const [selectedOption, setselectedOption] = useState("DVD");

  //   console.log(value)
  const handleOptionChange = (event) => {
    const curOption = options.indexOf(event.target.value);
    setselectedOption(event.target.value);
    onChange(event);
    option(measureOptions[curOption]);
  };

  return (
    <div className="product-form">
      <form id="product_form">
        <label htmlFor="sku" className="product_form_field">
          <p>SKU</p>
          <input
            type="text"
            name="sku"
            id="sku"
            placeholder="Enter the unique SKU of the product"
            {...register("sku", { required: "Product SKU is required" })}
          />
          {errors.sku?.type === "required" && alert(errors.sku.message)}
        </label>
        <label htmlFor="name" className="product_form_field">
          <p>Name</p>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter the name of the product"
            {...register("name", { required: "Product Name is required" })}
          />
        </label>
        <label htmlFor="price" className="product_form_field">
          <p>Price ($)</p>
          <input
            type="number"
            name="price"
            id="price"
            placeholder="Enter price of the product"
            {...register("price", { required: "Product price is required" })}
          />
        </label>

        {/* type switcher */}
        <label htmlFor="productType" className="product_form_field">
          <p>Type Switcher</p>
          <select
            name="Type_Switcher"
            id="productType"
            onChange={handleOptionChange}
          >
            <option value={options[0]}>{options[0]}</option>
            <option value={options[1]}>{options[1]}</option>
            <option value={options[2]}>{options[2]}</option>
          </select>
        </label>
        <div id="product_specification">
          {selectedOption === options[0] && <DVDForm register={register} />}
          {selectedOption === options[1] && <FurnitureForm register={register} errors={errors}/>}
          {selectedOption === options[2] && <BookForm register={register} />}
        </div>
      </form>
    </div>
  );
};

export default CreateProductForm;
