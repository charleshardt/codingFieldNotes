///////////////////////////////////////
// 16-Coding-Challenge-1

// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:

// BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).

// Test data:

// Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95m tall.

// Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76m tall.

// 1. Store Mark's and John's mass and height in variables

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

// 2. Calculate both their BMIs using the formula (you can even implement both versions)

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

// 3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

const markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);
