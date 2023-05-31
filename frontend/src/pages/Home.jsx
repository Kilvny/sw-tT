import React, { useEffect, useState } from "react";
import { getProducts } from "../utils/api";
import ProductCard from "../components/ProductCard";
import $ from "jquery"
import $j from "jquery"
import Footer from "../components/Footer";
import "../assets/style/Home.css"
import PageLabel from "../components/common/PageLabel";
import Button from "../components/common/Button";


const Home = () => {
  const [Products, setProducts] = useState([]); // keep track of products

  // get products from server {currently getting products from static source}
  const fetchProducts = async () => {
    const products = await getProducts();
    console.log(products);
    setProducts(products);
  };

  useEffect(() => {
    fetchProducts();
    console.log(`Products are : ${Products}`);

    return () => {
      // no cleanup needed;
    };
  }, [fetchProducts]);

  const handleDeleteButton = (e) => {
    let selectedProductsCount = 0
    const selectedProducts = [] // -TODO move this array to a useState hook 
    // following jquery methood to get checked products and return their id for futher deletion
    $j('.delete-checkbox:checked').each(function(){
        selectedProducts.push($j(this).closest('div.product-card').attr('id')) // pushes the selected proudct id's to the array
        selectedProductsCount = selectedProductsCount + 1
    });
    console.log(selectedProductsCount, selectedProducts)
    console.log("MASS DELETE CLICKED")
  }


  return (
    <div className="body">
      <div className="homepage">
          <div className="homepage-header">
            {/* page label */}
            <PageLabel text={"Product List"} />
            {/* action buttons */}
            <div className="action-buttons">
            <a href="/add-product"><Button text="ADD" /></a>
            <Button onClick={handleDeleteButton} className="MASS DELETE" text="MASS DELETE"/>
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
            {Products?.map((product) => (
                <ProductCard 
                key={product.id}
                className="product-card"
                id = {product.id} 
                SKU = {product.SKU}
                name={product.name}
                price={product.price}
                type={product.type}
                specification={ product.Size_MB || product.Weight_Kg || product.Dimensions }
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
