
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
  
// TODO implement the form validation after you decide the backend structure
const formValidator = (form) => {
    

}


const isEmpty = (field) => (
    (field.toString().trim() === ""
        ||
        field.toString() === ",,")
        ? true
        : false
)
export default formValidator