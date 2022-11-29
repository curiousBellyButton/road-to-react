
function sqaureRoot (number) {
  return number * number;
}


let sqaureRoot2 = function (number) {
  return number * number;
}


const squareRoot3 = number =>  number * number;


console.log(sqaureRoot(2));
console.log(sqaureRoot2(3));
console.log(squareRoot3(4));

function testFirstMessage () {
  console.log("first message")
}

setTimeout(testFirstMessage, 5000);

// deconstruction

const user = {
  firstName: "James",
  lastName: "Nguyen"
}

const {firstName, lastName} = user;
console.log(lastName);

// vs the longer normal way

const user2 = {
  firstName: "James",
  lastName: "Nguyen"
}

const firstname = user.firstName;

console.log(firstname);


// rest parameters 1) used to represent more than one argument

function sum(...theArgs) {
  let total = 0;
  for (const arg of theArgs) {
    total += arg;
  }
  return total;
}

console.log(sum(3,4,5,5,5));

// spread parameters 1) separate ea value in an array

const groceryList = ["pork", "beef", "chicken"];
const newGroceryList = [...groceryList];


console.log(groceryList); // [ 'pork', 'beef', 'chicken' ]
console.log(...groceryList); // pork beef chicken

console.log(Math.min(3,6,7,8,-5));

const lowestGrades = [3,6,7,8,-5]; // -5
console.log(Math.min(lowestGrades));  // NaN
console.log(Math.min(...lowestGrades)); // -5
