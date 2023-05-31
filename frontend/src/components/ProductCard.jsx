import React from "react";

{
  /**
     -TODO- Implement the acutal product card 
     * 
     */
}
const ProductCard = ({ id, SKU, name, price, specification, unit, type }) => {
  return (
      <div className="product-card" id={`${id}`}>
        <div className="product-card-header">
            <input type="checkbox" className="delete-checkbox" />
        </div>
        <ul>
            <li>{SKU}</li>
            <li>{name}</li>
            <li>{price}$</li>
            {unit === "HxWxL" ?
            <li>{type}: {specification[0]}x{specification[1]}x{specification[2]}</li>
            :
            <li>{type}: {specification} {unit}</li>
            }
        </ul>
      </div>
      
  )
};

export default ProductCard;
