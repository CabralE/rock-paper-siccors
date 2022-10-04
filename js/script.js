let titleEl = document.getElementById("title");
console.log(titleEl);

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const results = document.querySelector("#results");

rockBtn.addEventListener("click", function (event) {
  const rock = 1;
  const li = document.createElement("li");
  let text = outcome(rock, randomNumberGenerator());
  li.textContent = text;

  results.appendChild(li);
});

paperBtn.addEventListener("click", function (event) {
  const paper = 2;
  const li = document.createElement("li");
  let text = outcome(paper, randomNumberGenerator());
  li.textContent = text;

  results.appendChild(li);
});

scissorsBtn.addEventListener("click", function (event) {
  const scissor = 3;
  const li = document.createElement("li");
  let text = outcome(scissor, randomNumberGenerator());
  li.textContent = text;
  results.appendChild(li);
});

function randomNumberGenerator() {
  let num = Math.floor(Math.random() * 3) + 1;
  return num;
}

function outcome(userInput, rng) {
  let result = "";
  if (userInput === rng) {
    result = "it's a tie!";
  } else if (userInput === 1 && rng == 2) {
    result = "Rock loses to Paper. PC WINS!";
  } else if (userInput === 1 && rng == 3) {
    result = "Rock beats Sciccors. You WIN!";
  } else if (userInput === 2 && rng == 3) {
    result = "Paper loses to Sciccors. PC WINS!";
  } else if (userInput === 2 && rng == 1) {
    result = "Paper beats Rocks. You WIN!";
  } else if (userInput === 3 && rng == 1) {
    result = "Scissors loses to Rock. PC WINS!";
  } else if (userInput === 3 && rng == 2) {
    result = "Scissors beats Paper. You WIN!";
  } else {
    result = "mistake was made!";
  }
  return result;
}
