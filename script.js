
let guessCount = 1;
let randomNum = Math.floor(Math.random() * 100) + 1; /* Outside function to avoid generating new random in each function call */

function checkGuess() {
  const guessField = document.getElementById("guess");
  const submit = document.getElementById("submit");
  let guess = Number(document.getElementById("guess").value);
  const prevGuesses = document.getElementById("prevGuesses");
  const compare = document.getElementById("compare");
  const result = document.getElementById("results");

  if (guessCount === 1) {
    prevGuesses.innerText = `Previous guesses:`;
  }
  prevGuesses.innerText += ` ${guess} `;

  if (guess === randomNum) {
    result.innerText = `You got it! The number was ${randomNum}.`;
    compare.innerText =  ``;
    guessField.disabled = true;
    submit.disabled = true;
  } else if (guessCount === 3) {
    result.innerText = `You guessed 3 out of 3 times. Refresh the page to play again.`;
    guessField.disabled = true;
    submit.disabled = true;
  } else {
    result.innerText = `Try again.`;
    if (guess < randomNum) {
      compare.innerText = `${guess} is too low.`;
    } else if (guess > randomNum) {
      compare.innerText = `${guess} is too high.`;
    }
  }

  guessCount++;
  guess = "";
}
