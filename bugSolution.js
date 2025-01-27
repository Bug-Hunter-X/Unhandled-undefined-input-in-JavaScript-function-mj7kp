function foo(x){
  if (x === undefined || x === null) {
    return 0; // Handle undefined and null cases
  }
  return x.length; 
}