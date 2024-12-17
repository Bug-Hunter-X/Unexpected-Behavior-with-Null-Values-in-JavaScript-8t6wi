function foo(a, b) {
  if (a === null || b === null) {
    return 0; // Handle null values explicitly
  }
  return a + b; // Corrected function using strict equality
}

console.log(foo(null, 5)); // Output: 0
console.log(foo(5, null)); // Output: 0
console.log(foo(5, 5)); // Output: 10
console.log(foo(undefined, 5)); // Output: NaN
// Note: undefined is not handled explicitly, resulting in NaN.