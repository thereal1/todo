// EXAMPLE 1
function add (a, b) {
  return a + b;
}

let toAdd = [6, 7];

console.log(add(2, 5));
console.log(add(...toAdd));


// EXAMPLE 2
let groupA = ['zac', 'isa', 'stevie'];
let groupB = ['victor', 'jack', 'winston'];

// Adding an array into an array
let ar1 = ['zac', groupA]
// Spreading out the values and adding each individual one
let anotherOne = [3, ...groupA];

let final = [...groupA, ...groupB];

console.log(ar1);
console.log(anotherOne);
console.log(final);


// EXAMPLE 3
let p1 = ['andrew', 32];

function greeting (name, age) {
  return `hi ${name} you are ${age}`;
}

console.log(greeting(p1)) // wrong
console.log(greeting(...p1)) // right


// EXAMPLE 4
let names = ['pat', 'palettes'];
let allNames = ['zac', ...names];

allNames.forEach(function(x) {
  console.log(x);
});
