//Computes a factorial of a given positive integer
function factorial(n) {
  if (n < 0) {
    throw new Error('Factorial is only defined for non-negative integers!');
  } 
  if (n === 0 || n === 1) {
    return 1;
  } else {
    let factorial = 1;
    for (let i = 2; i <= n; i++) {
      factorial *= i;
    }
    return factorial;
  } 
}

//Example usage
const inputNumber = 5;
const result = factorial(inputNumber);
console.log('The factorial of ${inputNumber} is: ${result}');