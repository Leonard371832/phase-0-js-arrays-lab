// Creating an array called products to store product names. Used the following four strings.

let products = ["Laptop", "Phone", "Headphones", "Monitor"];

// Accessing Product Information

function logFirstProduct() {
  console.log(products[0]);       // our first product assumes index [0]

}

// Adding a New Product to the Array.

function addProduct(newProduct) {
    products.push(newProduct);      // Adding item to the end of the array
}


// Updating Product Information

function updateProductName(position, newName) {
  products[position] = newName;
}

// Removing the last product from the array.

function removeLastProduct() {
  products.pop();
}


// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
