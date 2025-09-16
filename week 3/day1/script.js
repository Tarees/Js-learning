
console.log("---- var vs let ----");

if (true) {
  var oldVar = "I leak out of block 😬";
  let newLet = "I stay inside block ✅";
}
console.log(oldVar); // works
// console.log(newLet); //  Error: newLet is not defined

console.log(a); // undefined (due to hoisting)
var a = 5;
// console.log(b); // Error
let b = 10;

//Scheduling Functions
console.log("\n---- setTimeout & setInterval ----");

setTimeout(() => {
  console.log("Hi after 2 seconds ⏳");
}, 2000);

let counter = 0;
let id = setInterval(() => {
  counter++;
  console.log("Tick " + counter);
  if (counter === 5) {
    clearInterval(id);
    console.log("Stopped interval after 5 ticks ⏹️");
  }
}, 1000);


// Arrow Functions Revisited
console.log("\n---- Arrow Functions ----");

let add = (x, y) => x + y;
console.log(add(2, 3)); // 5

let user = {
  name: "Ali",
  sayHi: function() {
    console.log("Hi, I am " + this.name);
  },
  sayHiArrow: () => {
    console.log("Hi, I am " + this.name); 
  }
};

user.sayHi();      // Hi, I am Ali
user.sayHiArrow(); // Hi, I am undefined


// Property Flags & Descriptors
console.log("\n---- Property Descriptors ----");

let person = { name: "Sara" };

Object.defineProperty(person, "name", {
  writable: false,
  enumerable: false,
  configurable: false
});

console.log(person.name); // Sara
person.name = "Zara";     //  won’t change
console.log(person.name); // Sara
console.log(Object.keys(person)); // [] (hidden)


//  Getters & Setters
console.log("\n---- Getters & Setters ----");

let student = {
  firstName: "Ali",
  lastName: "Khan",

  get fullName() {
    return this.firstName + " " + this.lastName;
  },

  set fullName(value) {
    [this.firstName, this.lastName] = value.split(" ");
  }
};

console.log(student.fullName); // Ali Khan
student.fullName = "Sara Ahmed";
console.log(student.firstName); // Sara
console.log(student.lastName);  // Ahmed



// PRACTICE QUESTIONS (SOLVED)
console.log("\n---- Practice Solutions ----");

//  var vs let practice
if (true) {
  var testVar = "var is function scoped";
  let testLet = "let is block scoped";
}
console.log(testVar); // works
// console.log(testLet); //  Error

// setTimeout practice
setTimeout(() => console.log("Practice: Hi after 3 seconds ⏱️"), 3000);

// setInterval practice
let tick = 0;
let practiceId = setInterval(() => {
  console.log("Practice Tick " + tick);
  tick++;
  if (tick === 5) clearInterval(practiceId);
}, 1000);

//  circle object with getter
let circle = {
  radius: 5,
  get area() {
    return Math.PI * this.radius * this.radius;
  }
};
console.log("Circle area:", circle.area);

//  person with getter/setter fullName
let person2 = {
  firstName: "John",
  lastName: "Doe",
  get fullName() {
    return this.firstName + " " + this.lastName;
  },
  set fullName(value) {
    [this.firstName, this.lastName] = value.split(" ");
  }
};
console.log(person2.fullName); // John Doe
person2.fullName = "Jane Smith";
console.log(person2.fullName); // Jane Smith
