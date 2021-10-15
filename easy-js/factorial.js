function factorial(n) {
  for (n; n > 1; n--) {
    return n * factorial(n - 1);
  }
  return 1;
}

console.log(factorial(4));
