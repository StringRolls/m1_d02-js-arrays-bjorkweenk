// Class code examples

// Array as boxes of stuff

const myNewArray = [];

myNewArray[0] = "hola";

myNewArray.push("como estas?");

// arrays are mutable
console.log(myNewArray);

// myNewArray = ["this is a new array"];

delete myNewArray[1];

let changeableLable = ["this array has an unprotected label"];

// Orphan arrays will be distroyed by JS
changeableLable = ["ooops, I lost the original array"];

console.log(changeableLable);

// An aray is an ORDERED list of thing
const drinks = [
  "Agua",
  "Coca-cola",
  "Aquarius",
  "Fanta",
  "Cacaolat",
  "Jagger",
  "Red Bull",
  "Cervemocho",
];

// Access
console.log("First drink is ", drinks[0]);
console.log("Second drink is ", drinks[1]);

// Change order of elements by writing
const firstEl = drinks[0];
const fifthEl = drinks[5];

drinks[5] = firstEl;
drinks[0] = fifthEl;

console.log("First drink is ", drinks[0]);
console.log("Second drink is ", drinks[1]);

// Length
console.log(`We have ${drinks.length} drinks in total`);

// Arrays can contain anything

const bagOfThins = [
  "I am a string",
  764124,
  null,
  undefined,
  true,
  ["I am a sub aray"],
  { type: "object inside aray" },
];

// Arrays have a lenght property
console.log("bagOfThins contains ", bagOfThins.length, "elements");

// .push() and .pop()
// Adding values (last) ---- declarative
console.log("return value from .push():", drinks.push('Nestea', 'Monster'))
console.log('...extended even more:', drinks)


// Removing values (last)
console.log("return value from .pop()",drinks.pop());
console.log("Now the drinks are", drinks);

// Modifying elements order or values
const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
// inserts at index 1
//console.log("The months", months)

months.splice(4, 0, "May");
// may july august september october november dicember
months.push("July", "august", "september", "october", "november", "december")
console.log("The months", months, months.length);

// Split text into array
const string = 'Lorem ipsum dolor sit amet'
const words = string.split(' ')
console.log('Here is each word in the string:', words)


