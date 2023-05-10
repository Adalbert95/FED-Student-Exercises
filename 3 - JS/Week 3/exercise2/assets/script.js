document.addEventListener("DOMContentLoaded", function () {
  const numberForm = document.getElementById("numberForm");
  numberForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const numberInput = document.getElementById("numberInput");
    const resultContainer = document.getElementById("resultContainer");

    const numbers = numberInput.value.split(",").map(Number);
    const evenNumbers = numbers.filter((num) => num % 2 === 0);
    const sum = evenNumbers.reduce((acc, curr) => acc + curr, 0);

    resultContainer.textContent = `Sum of even numbers: ${sum}`;
  });
});
