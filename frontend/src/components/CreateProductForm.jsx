import React, { useState } from "react";
import DVDForm from "./DVDForm";
import FurnitureForm from "./FurnitureForm";
import BookForm from "./BookForm";

const CreateProductForm = ({ onChange, value }) => {
  const options = ["DVD", "Furniture", "Book"];
  const [selectedOption, setselectedOption] = useState("DVD");
//   console.log(value)
  const handleOptionChange = (event) => {
    setselectedOption(event.target.value);
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
            onChange={onChange}
            value={value.sku}
          />
        </label>
        <label htmlFor="name" className="product_form_field">
          <p>Name</p>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter the name of the product"
            onChange={onChange}
            value={value.name}
          />
        </label>
        <label htmlFor="price" className="product_form_field">
          <p>Price ($)</p>
          <input
            type="number"
            name="price"
            id="price"
            placeholder="Enter price of the product"
            onChange={onChange}
            value={value.price}
          />
        </label>

        {/* type switcher */}
        <label htmlFor="type_switch" className="product_form_field">
          <p>Type Switcher</p>
          <select
            name="Type_Switcher"
            id="type_switch"
            onChange={handleOptionChange}
          >
            <option value={options[0]}>{options[0]}</option>
            <option value={options[1]}>{options[1]}</option>
            <option value={options[2]}>{options[2]}</option>
          </select>
        </label>

        {selectedOption === options[0] && <DVDForm onChange={onChange} value={value} />}
        {selectedOption === options[1] && <FurnitureForm onChange={onChange} value={value} />}
        {selectedOption === options[2] && <BookForm onChange={onChange} value={value}/>}
      </form>
    </div>
  );
};

export default CreateProductForm;
