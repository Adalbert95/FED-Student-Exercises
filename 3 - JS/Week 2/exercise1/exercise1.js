function evenOrOdd() {
  const number = parseInt(prompt("Enter a number:"));
  if (number % 2 === 0) {
    console.log(number + " is even");
    return "Even";
  } else {
    console.log(number + " is odd");
    return "Odd";
  }
}

evenOrOdd();
