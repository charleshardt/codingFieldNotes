/////////////////////////////////////////////////
// 286-The-Module-Pattern-and-Closures.js

// The main goal of the module pattern is to encapsulate functionality to have private data and expose public API.

// Best way is to use a function. They give us private data by default and allow us to return values which can become our public api.

// We usually write an IFFE so we don't have to call it separately and to ensure that it is only called once. The purpose of the function is not to reuse code, but to create a scope and make sure it can only be called once.
const shoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 621.32;
  const totalQuantity = 21;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
    );
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  // to capture the following value, assign the IFFE to a variable
  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

shoppingCart2.addToCart('loaves of chocolate banana bread', 12);
shoppingCart2.addToCart('bowls of bones', 4);
console.log(shoppingCart2);
console.log(shoppingCart2.orderStock); // not accessible

// Q. How can we run this function once, then manipulate the data afterward?

// A. Closures. Closures give a function access to all the variables that were present at its "birthplace".
