// // let age=20;
// // let res=(age>=18) ? "adult" : "minor";
// // console.log(res);

// // let sum= (a,b)=>{
// //     return a*b;
// // }
// // let x = sum(2,4);
// // console.log(x);

// // let temp=21;
// // if (temp>=30){
// //     console.log("hot")
// // }
// // else{
// //     console.log ("cool")
// // }

// // let x= prompt("Enter a number");
// // let res=(Number(x)%2===0) ? "even":"odd";
// // console.log(res);
// // let name = prompt("What is your name?", "Guest");
// // alert("Hello " + name);

// // let isAdult = confirm("Are you 18 or older?");
// // console.log(isAdult); // true or false

// // console.log("5" - 2); // 3 (string "5" converted to number)
// // console.log("5" + String(2)); // "52" (number converted to string)
// // console.log("5" * 2); // 3 (string "5" converted to number)
// // console.log("5" % 2); // "52" (number converted to string)
// // console.log("5" / 2); // "52" (number converted to string)
// // let a=confirm("DO u like java");
// // if(a==1){
// //     console.log("perfecto")
// // }else{
// //     console.log("nah")
// // }

// // let b=null;
// // console.log(b ?? "nah");
// // console.log("h" * 2); // NaN
// // console.log(1 / 0);   // Infinity
// // console.log(-1 / 0);  // -Infinity

// // const obj = {
// //     name:"ALI",
// //     age:25,
// //     height:2.9,
// //     isStudent:true,
// //     greet: function() {   // method
// //     console.log("Hello " + this.name);
// // }
// // }
// // console.log(obj.name);   // Ali
// // obj.greet();   
// // let user = {
// //   name: "Sara",
// //   id:123
// // };

// // let id = Symbol("id");
// // user[id] = 101;

// // console.log(user);      // { name: "Sara", [Symbol(id)]: 101 }
// // // console.log(user[id]);  // 101
// // user.id=222;
// // console.log(user)

// // let id1 = Symbol("id");
// // let id2 = Symbol("id");

// // alert(id1 == id2);
// // console.log(id1, id2)
// // let str = "Hello World";
// // console.log(str.slice(0,8))

// // let arr = [1, 2, 3, 4, 5];

// // Adding/removing
// // arr.push(6);      // add at end
// // arr.pop();        // remove from end
// // arr.unshift(0);   // add at start
// // arr.shift();      // remove from start

// // // Searching
// // console.log(arr.indexOf(3));   // 2
// // console.log(arr.includes(4));  // true

// // // Transforming
// // let doubled = arr.map(x => x * 2); // [2,4,6,8,10]
// // let evens = arr.filter(x => x % 2 === 0); // [2,4]
// // let sum = arr.reduce((a, b) => a + b, 0); // 15

// // // Iteration
// // arr.forEach(x => console.log(x));

// let students = [
//   { id: 1, name: "Ali", grade: 85 },
//   { id: 2, name: "Sara", grade: 92 },
//   { id: 3, name: "Bilal", grade: 70 },
//   { id: 4, name: "Ayesha", grade: 60 },
//   { id: 5, name: "Usman", grade: 40 }
// ];

// // Add at end
// students.push({ id: 6, name: "Hina", grade: 75 });

// // Remove last
// students.pop();

// // Add at start
// students.unshift({ id: 0, name: "Zain", grade: 88 });

// // Remove first
// students.shift();

// // Find index of student with id=3
// let index = students.findIndex(s => s.id === 3);
// console.log("Index of Bilal:", index);

// // Check if any student scored 100
// console.log(students.some(s => s.grade === 85)); // false

// // Students who passed (grade >= 50)
// let passed = students.filter(s => s.grade >= 50);
// console.log("Passed:", passed);

// // Get names only
// let names = students.map(s => s.name);
// console.log("Names:", names);

// // Average grade
// let avg = students.reduce((sum, s) => sum + s.grade, 0) / students.length;
// console.log("Average grade:", avg);

// // Sort by grades (highest to lowest)
// let sorted = [...students].sort((a, b) => b.grade - a.grade);
// console.log("Sorted by grade:", sorted);

// // Top 3 students (slice doesn't change original)
// let top3 = sorted.slice(0, 3);
// console.log("Top 3:", top3);

// // Replace Bilal's grade with 95 (splice modifies array)
// students.splice(index, 1, { id: 3, name: "Bilal", grade: 95 });
// console.log("Updated Students:", students);



// console.log(students)


// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 5); // Condition is false
// // Output: 0 (executes once before checking the condition)

// let j = 0;
// while (j > 5) {
//   console.log(j);
//   j++;
// }
// // Output: 0, 1, 2, 3, 4
