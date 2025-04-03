////////////////////////////////////////////////////////
// 111. Short Circuiting (&& and ||)

// Example Data
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

console.log('-----------------OR-----------------');
// OR || short-circuits at the first truthy operant and returns it
console.log(NaN || false || 3 || 'Hardt');
console.log(true || 0);

// if all are falsy, it returns the last operant
console.log(undefined || false || '' || 0 || null);

// Logical operators can:
// 1) use any data type
// 2) return any data type
// 3) do short-circuiting (short-circuit evaluation)

// Practical example:
// These 2 lines both set a default value:

// restaurant.numGuests = 23;
restaurant.numGuests = 0; // Now it won't work because 0 is falsy
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
const guests2 = restaurant.numGuests || 11;

console.log(guests1);
console.log(guests2);

console.log('-----------------AND-----------------');

// AND && short-circuits at the first falsy operant and returns it
console.log(0 && 'Hardt');

// It gets to NaN and the result of the operation will
// be false, so why continue...
console.log(10 && 'De La Cruz' && NaN && true && 'Hardt');

// Returns the last value if all operants are truthy
console.log(1 && true && 'Hardt');

// Practical example:
if (restaurant.orderPizza) {
  restaurant.orderPizza('sausage', 'mushrooms');
}

// The ES6 way to do the same thing:
restaurant.orderPizza && restaurant.orderPizza('sausage', 'mushrooms');

// Use && short-circuit to execute code if a first operant is true

// Use || short-circuit to set a default value if the first operant does not exist
