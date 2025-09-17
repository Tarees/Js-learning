
// try&catch Example
console.log("---- try...catch ----");
try {
  let json = '{ "name": "Ali" }';
  let user = JSON.parse(json); // valid
  console.log("Parsed user:", user.name);
} catch (err) {
  console.log("Error parsing JSON:", err.message);
} finally {
  console.log("Parsing attempt finished ");
}


//  Custom Error Example
console.log("\n---- Custom Error ----");
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function createUser(name) {
  if (!name) {
    throw new ValidationError("Name is required!");
  }
  return { name };
}

try {
  let user = createUser(""); //  empty name
} catch (err) {
  if (err instanceof ValidationError) {
    console.log("Validation failed:", err.message);
  } else {
    console.log("Unknown error:", err);
  }
}


//  Callback Example (old style async)
console.log("\n---- Callback Example ----");
function fetchDataCallback(url, callback, errorCallback) {
  setTimeout(() => {
    let success = true;
    if (success) {
      callback({ data: "User data from " + url });
    } else {
      errorCallback("Failed to fetch");
    }
  }, 1000);
}

fetchDataCallback(
  "https://dummyapi.com/user",
  (data) => console.log("Callback success:", data),
  (err) => console.log("Callback error:", err)
);


//  Promise Example
console.log("\n---- Promise Example ----");
function fetchDataPromise(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        resolve({ data: "User data from " + url });
      } else {
        reject(new Error("Fetch failed"));
      }
    }, 1000);
  });
}

fetchDataPromise("https://dummyapi.com/user")
  .then(result => {
    console.log("Promise success:", result);
    return result.data.toUpperCase();
  })
  .then(upper => console.log("Processed:", upper))
  .catch(err => console.log("Promise error:", err.message));


//  Microtask Example
console.log("\n---- Microtasks ----");
Promise.resolve().then(() => console.log("Microtask executed ✅"));
setTimeout(() => console.log("Macrotask executed ⏱️"), 0);


//  Promise API Example
console.log("\n---- Promise API ----");
let p1 = new Promise(res => setTimeout(() => res("First"), 1000));
let p2 = new Promise(res => setTimeout(() => res("Second"), 2000));

Promise.all([p1, p2]).then(values => console.log("Promise.all:", values));

Promise.race([p1, p2]).then(value => console.log("Promise.race:", value));


//  Async/Await Example
console.log("\n---- Async/Await ----");
function getData() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Data received ✅"), 1500);
  });
}

async function showData() {
  try {
    let result = await getData();
    console.log(result);
  } catch (err) {
    console.log("Error:", err.message);
  }
}
showData();


//  Promise Chaining Example
console.log("\n---- Promise Chaining ----");
new Promise(resolve => setTimeout(() => resolve(2), 1000))
  .then(num => {
    console.log("Step 1:", num);
    return num * 2;
  })
  .then(num => {
    console.log("Step 2:", num);
    return num * 2;
  })
  .then(num => console.log("Step 3:", num));


//  Promisification Example
console.log("\n---- Promisification ----");
function delayCallback(ms, callback) {
  setTimeout(() => callback(`Waited ${ms}ms`), ms);
}

// Turn callback into promise
function delayPromise(ms) {
  return new Promise(resolve => {
    setTimeout(() => resolve(`Waited ${ms}ms`), ms);
  });
}

delayPromise(2000).then(msg => console.log(msg));


//  Practice: Stopping setInterval
console.log("\n---- Stopping setInterval ----");
let i = 0;
let id = setInterval(() => {
  i++;
  console.log("Tick " + i);
  if (i === 5) {
    clearInterval(id);
    console.log("Interval stopped ✅");
  }
}, 1000);
