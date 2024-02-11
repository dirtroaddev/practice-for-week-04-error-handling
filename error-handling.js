// 1.
function sum(array) {

  try {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
} catch (e) {
  console.log(e.message);
}
}

let res = sum(null);
console.log(res);

// 2.
// tests
try {
  sayName("Alex");
  sayName(1);
} catch(e) {
  console.log(e.message);
}

// Your code here

function sayName(name) {
  if(name !== 'string') {
    throw new Error("Must be a string!");
  } else {
    console.log(name);
  }
}
// 3.
function greet(greeting) {
  
    if (!greeting) {
      throw new Error("There was no greeting given.");
       }

  console.log(greeting);
}


try {
  greet();
} catch(e) {
  console.log("Hello World!");
}