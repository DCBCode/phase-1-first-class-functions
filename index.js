function receivesAFunction(callback) {
    // Call the callback function
    callback();
  }
  
  function myCallbackFunction() {
    console.log("Hello, I'm the callback function!");
  }
  
  receivesAFunction(myCallbackFunction);
  function returnsANamedFunction() {
    return function namedFunction() {
      console.log("Hello, I'm the named function!");
    };
  }
  
  const myNamedFunction = returnsANamedFunction();
  myNamedFunction();
  function returnsAnAnonymousFunction() {
    return function() {
      console.log("Hello, I'm an anonymous function!");
    };
  }
  
  const myAnonymousFunction = returnsAnAnonymousFunction();
  myAnonymousFunction();