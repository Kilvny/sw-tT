import React, { useEffect, useState } from "react";
import { getProducts } from "../utils/api";
import ProductCard from "../components/ProductCard";
import $j from "jquery";
import Footer from "../components/Footer";
import "../assets/style/Home.css";
import PageLabel from "../components/common/PageLabel";
import Button from "../components/common/Button";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]); // keep track of products
  const [selectedProducts, setDelectedProducts] = useState([])

  // get products from server {currently getting products from static source}
  const fetchProducts = async () => {
    const products = await getProducts();
    console.log(products);
    setProducts(products);
    const data = await axios
      .get("http://localhost:80/mvc/product/getall", {
        responseType: "json",
      })
      .then((response) => {
        console.log(response.data);
        let data = response.data.replace("<br /> Product <br />","")
        console.log(JSON.parse(data));
      });
    // await console.log(data)
  };

  useEffect(() => {
    fetchProducts();
    console.log(`Products are : ${"s"}`);

    return () => {
      // no cleanup needed;
    };
  }, [fetchProducts]);

  useEffect(() => {
    axios
      .delete(
        "http://localhost:80/mvc/product/delete",
        { data: selectedProducts }
      )
      .then((res) => {
        // console.log(res);
        // navigate("/")
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => {
        fetchProducts();
      });
  },[selectedProducts])

  const handleDeleteButton = (e) => {
    let selectedProductsCount = 0;
    let arr = [];
    // following jquery methood to get checked products and return their id for futher deletion
    $j(".delete-checkbox:checked").each(function () {
        arr.push($j(this).closest("div.product-card").attr("id")); // pushes the selected proudct id's to the array
      selectedProductsCount = selectedProductsCount + 1;
      setDelectedProducts(arr);
    });
    console.log(selectedProductsCount, selectedProducts);
    console.log("MASS DELETE CLICKED");
    
  };

  return (
    <div className="body">
      <div className="homepage">
        <div className="homepage-header">
          {/* page label */}
          <PageLabel text={"Product List"} />
          {/* action buttons */}
          <div className="action-buttons">
            <a href="/add-product">
              <Button text="ADD" />
            </a>
            <Button
              onClick={handleDeleteButton}
              className="MASS DELETE"
              text="MASS DELETE"
            />
          </div>
        </div>
        <hr />
        {/* product list 
                -TODO- pass the probs to ProductCard and return Product Card elements
                -TODO- use react query 
                https://www.npmjs.com/package/@tanstack/react-query,
                https://tanstack.com/query/v3/ 
            */}
        <div className="product-list">
          {products?.map((product) => (
            <ProductCard
              key={product.id}
              className="product-card"
              id={product.id}
              SKU={product.SKU}
              name={product.name}
              price={product.price}
              type={product.type}
              specification={
                product.Size_MB || product.Weight_Kg || product.Dimensions
              }
              unit={product.unit}
            />
          ))}
        </div>
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default Home;
