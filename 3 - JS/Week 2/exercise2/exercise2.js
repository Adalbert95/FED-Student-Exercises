function numberGuesser() {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  let guess = parseInt(prompt("Guess a number between 1 and 10:"));

  while (guess !== randomNumber) {
    if (guess < randomNumber) {
      guess = parseInt(prompt("Too low. Guess again:"));
    } else {
      guess = parseInt(prompt("Too high. Guess again:"));
    }
  }

  console.log("Bingo!");
}

numberGuesser();
