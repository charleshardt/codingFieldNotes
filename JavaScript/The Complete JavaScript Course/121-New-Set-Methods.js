////////////////////////////////////////////////////////
// Lesson 121. New Operations to Make Sets Useful
// Methods taken from Math, Set Theory
// Requires newish browsers

const italianFoods = new Set([
  "pasta",
  "gnocchi",
  "tomatoes",
  "olive oil",
  "garlic",
  "basil"
]);

const mexicanFoods = new Set([
  "tortillas",
  "beans",
  "rice",
  "tomatoes",
  "avocado",
  "garlic"
]);

// Which elements are present in both?

// 1) INTERSECTION Method (gives only common elements of the sets)
const commonFoods = italianFoods.intersection(mexicanFoods);
console.log("Intersection:", [...commonFoods]); // return an array

// 2) UNION Method (gives all elements in the sets)
const italianMexicanFusion = italianFoods.union(mexicanFoods);
console.log("Union:", [...italianMexicanFusion]);

// Does the same thing as this:
const fusionOldWay = new Set([...italianFoods, ...mexicanFoods]);
console.log([...fusionOldWay]);

// 3) DIFFERENCE Method (elements present in only 1 of the sets)
const uniqueToItalian = italianFoods.difference(mexicanFoods);
console.log("Only in Italian:", uniqueToItalian); // return a set

const uniqueToMexican = mexicanFoods.difference(italianFoods);
console.log("Only in Mexican:", uniqueToMexican);

// 4) SYMMETRIC DIFFERENCE Method (elements from all sets that are not in common)
const foodsNotInCommon = italianFoods.symmetricDifference(mexicanFoods);
console.log("All elements not held in common:", foodsNotInCommon);

// 5) DISJOINT Method (no elements in common)
console.log(
  "Italian disjoint from Mexican?",
  italianFoods.isDisjointFrom(mexicanFoods)
); // false

const martianFoods = new Set(["mahogany", "cadmium", "bugs"]);
console.log("Martian Foods:", martianFoods);
console.log(
  "Italian disjoint from Martian?",
  italianFoods.isDisjointFrom(martianFoods)
); // true

// Other set methods to look up: isSubsetOf(), isSupersetOf(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/isSubsetOf
