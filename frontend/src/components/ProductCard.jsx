import React from "react";
import { toTitleCase } from "../utils/helper";

{
  /**
     -TODO- Implement the acutal product card 
     * 
     */
}
const ProductCard = ({ id, SKU, name, price, unit, type, value }) => {
  return (
      <div className="product-card" id={`${id}`}>
        <div className="product-card-header">
            <input type="checkbox" className="delete-checkbox" />
        </div>
        <ul>
            <li>{SKU}</li>
            <li>{name}</li>
            <li>{price}$</li>
            {
            <li>{toTitleCase(type)}: {value} {unit}</li>
            }
        </ul>
      </div>
      
  )
};

export default ProductCard;
