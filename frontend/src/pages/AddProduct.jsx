import React, { useState } from "react";
import PageLabel from "../components/common/PageLabel";
import Button from "../components/common/Button";
import Footer from "../components/Footer";
import "../assets/style/AddProduct.css";
import CreateProductForm from "../components/CreateProductForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

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
  const [selectedOption, setselectedOption] = useState("size");

  const option = (optn) => {
    setselectedOption(optn);
  };

  const handleFormChange = (event) => {
    const { name, value } = event.target;

    console.log(`name is ${name}`);
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
    console.log(`%c selectedOption is ${selectedOption}`, "font-size: 18px;");

    for (let property in data["type"]) {
      if ((property !== selectedOption) ) delete data["type"][property];
      if ((typeof(data["type"][property]) === 'string') && ((data["type"][property])?.trim() == "")) {
        delete data["type"][property];
        alert("all fields are required")
        return
      } else {
        for (let nestedProperty in data["type"][property]) {
            if (data['type'][property][nestedProperty]?.trim() == "" ){
                delete data["type"][property][nestedProperty]
                alert("all fields are required")
                return
            }
        }
      }
      
      // whitespace
    }

    try {
        for(let property in data) {
            if ((data[property]?.toString().trim() == "")) {
                alert("all fields are required")
                return
            }
        }
        
    } catch (error) {
        console.log(error)
    }
    

    data["product_type"] = typeData.Type_Switcher;
    console.log(data);
    console.log(typeData);
    /* -TODO- Add API intergration logic here*/
    axios
      .post("http://localhost:80/mvc/product/add", data)
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
