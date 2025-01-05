let minNum = 1;
let maxNum = 100;
let answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let guess;
let attempts = 0;
let running = true;

const guessInput = document.getElementById("guess-input");
const guessButton = document.getElementById("guess-button");
const resultDiv = document.getElementById("result");
const restartButton = document.getElementById("restart-button");
const errorDiv = document.getElementById("error");

function makeGuess() {
    guess = Number(guessInput.value);
    errorDiv.textContent = '';

    if (isNaN(guess)) {
        errorDiv.textContent = "Please enter a valid number!";
        return;
    } else if (guess < 1 || guess > 100) {
        errorDiv.textContent = "Please enter a number between 1 and 100!";
        return;
    } else {
        attempts++;
    }

    if (guess < answer) {
        resultDiv.textContent = "Your guess is TOO LOW.";
        resultDiv.style.color = '#f54747';
    } else if (guess > answer) {
        resultDiv.textContent = "Your guess is TOO HIGH.";
        resultDiv.style.color = '#f54747';
    } else {
        resultDiv.textContent = `Congrats, you guessed the number RIGHT after ${attempts} attempts! The answer is ${answer}.`;
        restartButton.style.display = 'block';
        resultDiv.style.color = '#2cc62c';
        running = false;
        guessButton.disabled = true;
        guessInput.disabled = true;
        setupRestartButton(); 
    }

    guessInput.value = '';
    console.log(`Correct Answer: ${answer}`); //the correct answer
}

function setupRestartButton() {
    restartButton.addEventListener("click", function() {
        answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum; 
        attempts = 0;
        running = true;
        guessButton.disabled = false;
        guessInput.disabled = false;
        resultDiv.textContent = '';
        errorDiv.textContent = '';
        guessInput.value = '';
        restartButton.style.display = 'none';
    });
}

guessButton.addEventListener("click", () => { makeGuess() });

guessInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        makeGuess();
    }
});


