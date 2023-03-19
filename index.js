function receivesAFunction(callback) {
    // Call the callback function
    callback();
  }
  
function myCallback() {
console.log('This is my callback function.');
  }
  
receivesAFunction(myCallback);
  
function returnsANamedFunction() {
    // Define and return a named function
function namedFunction() {
console.log('This is a named function.');
}
return namedFunction;
  }
const myNamedFunction = returnsANamedFunction();
myNamedFunction(); // Output: "This is a named function." 

function returnsAnAnonymousFunction() {
    // Define and return an anonymous function
return function() {
console.log('This is an anonymous function.');
};
  }
const myAnonymousFunction = returnsAnAnonymousFunction();
myAnonymousFunction(); // Output: "This is an anonymous function."