// "hello world" to "Hello World"
export function toTitleCase(str) {
    return str.replace(
      /\w\S*/g,
      function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
  }

// to display SKU error message if exists
export function checkAddProductError(response) {
    let isUnique = response?.data?.search(/SKU is not unique/)
    if (isUnique === -1) return false
    alert("Product SKU is not unique!")
    return true

}

