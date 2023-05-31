import React, { useState } from "react";
import PageLabel from "../components/common/PageLabel";
import Button from "../components/common/Button";
import Footer from "../components/Footer";
import "../assets/style/AddProduct.css";
import CreateProductForm from "../components/CreateProductForm";
import formValidator from "../utils/formValidator";

const defaultdata = {
  sku: "",
  name: "",
  price: "",
  type: {
    DVD: { size: "" },
    Furniture: {
      height: "",
      width: "",
      length: "",
    },
    Book: { weight: "" },
  },
};

const AddProduct = () => {
  const [formData, setFormData] = useState(defaultdata);

  const handleFormChange = (event) => {
    const { name, value } = event.target;

    // Type Furniture
    if (name.startsWith("type.Furniture")) {
        // output is type.Furniture. height or width or length
      const [type, nestedType, nestedField] = name.split(".");
      // console.log(`type: ${type}, nestedType: ${nestedType},nestedField: ${nestedField} value: ${value}`)
      setFormData((prevData) => ({
        ...prevData,
        [type]: {
          ...prevData.type[type],
          Furniture: {
            ...prevData.type.Furniture,
            [nestedField]: value,
          },
        },
      }));
    // Type Book or DVD
    } else if (name.startsWith("type.")) {
      const [type, nestedField] = name.split(".");
      setFormData((prevData) => ({
        ...prevData,
        [type]: {
          ...prevData.type[type],
          [nestedField]: value,
        },
      }));
      // Common product information
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // -TODO- use form data for vaildation
    formValidator(formData)
    console.log(formData);
    /* -TODO- Add API intergration logic here*/
  };

  return (
    <div className="body">
      <div className="productpage">
        <div className="addproduct-header">
          {/* page label */}
          <PageLabel text={"Product Add"} />
          {/* action buttons */}
          <div className="action-buttons">
            <Button text="Save" form="product-form" onClick={handleSubmit} />
            <a href="/">
              <Button className="cancel-btn" text="Cancel" />
            </a>
          </div>
        </div>
        <hr />

        {/* TODO create the form*/}
        <CreateProductForm
          name="formData"
          value={formData}
          onChange={handleFormChange}
        />
        {/* TODO create product summary form, It will be a product card that dynamically changes when inputs change*/}
      </div>
      <Footer />
    </div>
  );
};

export default AddProduct;
