
// const defaultdata = {
//     sku: "",
//     name: "",
//     price: "",
//     type: {
//       DVD: { size: "" },
//       Furniture: {
//         height: "",
//         width: "",
//         length: "",
//       },
//       Book: { weight: "" },
//     },
//   };
  
const formValidator = (form) => {
    const { sku, name, price, type } = form
    productType = Object.keys(type)[0]
    if (productType === "DVD") {
        const { size } = type
    } else if (productType === "Book") {
        const { weight } = type
    } else if (productType === "Furniture") {
        const { height, width, length } = type
    }
    

}

export default formValidator