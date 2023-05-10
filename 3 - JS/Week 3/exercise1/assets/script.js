function checkPalindrome() {
  const wordInput = document.getElementById("wordInput");
  const resultContainer = document.getElementById("resultContainer");

  const word = wordInput.value.toLowerCase();
  const reversedWord = word.split("").reverse().join("");

  if (word === reversedWord) {
    resultContainer.textContent = `${word} is a palindrome!`;
  } else {
    resultContainer.textContent = `${word} is not a palindrome.`;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const checkButton = document.getElementById("checkButton");
  checkButton.addEventListener("click", checkPalindrome);
});
