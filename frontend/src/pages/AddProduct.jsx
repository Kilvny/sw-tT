import React, { useState } from "react";
import PageLabel from "../components/common/PageLabel";
import Button from "../components/common/Button";
import Footer from "../components/Footer";
import "../assets/style/AddProduct.css";
import CreateProductForm from "../components/CreateProductForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { checkAddProductError } from "../utils/helper";
import { isEmpty } from "../utils/formValidator";

const defaultdata = {
  Type_Switcher: "DVD", // default product rendered
};

const AddProduct = () => {
  const [typeData, setTypeData] = useState(defaultdata);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [selectedOption, setselectedOption] = useState("size"); // as the default rendered is DVD

  // keep track of the specifications (dimensions, size etc.)
  const option = (optn) => {
    setselectedOption(optn);
  };

  // keep track of the selected type in the dropdown (DVD, Furniture etc.)
  const handleFormChange = (event) => {
    const { name, value } = event.target;

    // console.log(`name is ${name}`);
    setTypeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleFocus = () => {
    // TODO pass each error to display text for each error
    if(errors.length){
        // console.log(`%c errors found ${errors}`, "color:red; font-size:18px;" )
    }
  }

  const handleLSubmit = (data) => {
    // console.log(`%c selectedOption is ${selectedOption}`, "font-size: 18px;");
    
    isEmpty(data, selectedOption) // it will raise an error if exists

    // set the selected type as the product_type to send it with the data
    data["product_type"] = typeData.Type_Switcher;
    


    axios
      .post("http://kilvny-scandiweb-task.infinityfreeapp.com/api/product/add", data)
      .then((res) => {
        if(!checkAddProductError(res)) // if there is no error
        {
            navigate("/")
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
//     fetch("https://kilvny-scandiweb-task.000webhostapp.com/product/add",{
//         method: "POST",

//         body: JSON.stringify(data),

//         headers: { "Content-type": "application/json; charset=utf-8" }
//     })
//       .then((res) => {
//         if(!checkAddProductError(res)) // if there is no error
//         {
//             console.log(res.json())
//             // navigate("/")
//         }
//       })
//       .catch((err) => {
//         console.log(err.message);
//       });
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
              onClick={handleSubmit(handleLSubmit)}
              onFocus={handleFocus}
            />
            <a href="/">
              <Button className="cancel-btn" text="Cancel" />
            </a>
          </div>
        </div>
        <hr />

        {/* TODO create the form*/}
        <CreateProductForm
          name="typeData"
          value={typeData}
          onChange={handleFormChange}
          register={register}
          option={option}
          errors={errors}
          onFocus={handleFocus}

        />

        {/* TODO create product summary form, It will be a product card that dynamically changes when inputs change*/}
      </div>
      <Footer />
    </div>
  );
};

export default AddProduct;
