import React, { useState } from "react";
import PageLabel from "../components/common/PageLabel";
import Button from "../components/common/Button";
import Footer from "../components/Footer";
import "../assets/style/AddProduct.css";
import CreateProductForm from "../components/CreateProductForm";
import formValidator from "../utils/formValidator";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";


const defaultdata = {
  sku: "",
  name: "",
  price: "",
  Type_Switcher: "DVD", // default product rendered
};

const AddProduct = () => {
  const [formData, setFormData] = useState(defaultdata);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  
  const handleFormChange = (event) => {
    const { name, value } = event.target;

    console.log(`name is ${name}`);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLSubmit = (e) => {
    e.preventDefault();
    // -TODO- use form data for vaildation
    // formValidator(formData)
    // console.log(data);
    console.log(formData);
    return;
    /* -TODO- Add API intergration logic here*/
    axios
      .post("http://localhost:3000/backend/dealwithObjAndArr.php", formData)
      .then((res) => {
        console.log(res.data);
        // navigate("/")
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="body">
      <div className="productpage">
        <div className="addproduct-header">
          {/* page label */}
          <PageLabel text={"Product Add"} />
          {/* action buttons */}
          <div className="action-buttons">
            <Button
              name="submit-btn"
              text="Save"
              form="product-form"
              onClick={handleLSubmit}
            />
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
          register={register}
        />
        {/* TODO create product summary form, It will be a product card that dynamically changes when inputs change*/}
      </div>
      <Footer />
    </div>
  );
};

export default AddProduct;
