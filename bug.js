function foo(x){
  if (x === null) {
    return 0; // Handle null case
  }
  return x.length; // Error: if x is undefined
}