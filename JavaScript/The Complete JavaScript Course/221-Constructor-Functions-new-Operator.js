/////////////////////////////////////////////////
// 221-Constructor-Functions-new-Operator

// Constructor functions begin with a capital letter. Arrow functions will not work because they don't have <this>.
const Person = function (firstName, birthYear) {
  // instanceOf properties
  this.firstName = firstName;
  this.birthYear = birthYear;
  
  // Never create a method inside a constructor fn
  // this.calcAge = function () {
    //   console.log(2025 - this.birthYear);
    // };
  };
  
  // Constructor fn called with the new keyword.
  const charlie = new Person('Charlie', 1977);
  
  // Four things happen when calling a fn with new:
  // 1. new {empty} created
  // 2. fn is called, this = {empty}
  // 3. {empty} linked to prototype
  // 4. fn automatically returns {object}
  
  const elke = new Person('Elke', 1972);
  const jonathan = new Person('Jonathan', 1981);
  
  console.log(elke instanceof Person);
  
