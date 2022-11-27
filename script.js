const choices = document.querySelectorAll(".choice");
const score = document.getElementById("score");
const result = document.getElementById("result");
const restart = document.getElementById("restart");
const modal = document.getElementById("modal");
const resultIcon = document.querySelector(".resultIcon");
const resultHeader = document.getElementById("result-h");
const resultParagraph = document.getElementById("result-p");
const playerDisplay = document.getElementById("player-score");
const pcDisplay = document.getElementById("pc-score");
const scoreboard = {
  player: 0,
  computer: 0,
};
let randomNumber;
let pcChoice = choices.length;
let game = ["rock", "paper", "scissors"];
let myScore = 0;
let pcScore = 0;
// Randomizer
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

//rock

// get pc option icon
function pcOption() {
  let randomPC = getRandomInt(pcChoice);

  randomNumber = randomPC;

  resultIcon.classList.add(choices[randomPC].classList[2]);

  let toBeDeleted = resultIcon.classList[3];

  resultIcon.classList.replace(toBeDeleted, choices[randomPC].classList[2]);
}

choices[0].addEventListener("click", () => {
  pcOption();
  if (randomNumber === 0) {
    resultHeader.innerHTML = "It's A Draw!";
  } else if (randomNumber === 1) {
    resultHeader.innerHTML = "You Lost!";
    resultHeader.style.color = "red";
    pcScore++;
  } else if (randomNumber === 2) {
    resultHeader.innerHTML = "You Won!";
    resultHeader.style.color = "green";
    myScore++;
  }
  resultParagraph.innerHTML = `Computer chose ${game[randomNumber]}`;
  modal.style.display = "block";
  playerDisplay.innerHTML = myScore;
  pcDisplay.innerHTML = pcScore;
});
choices[1].addEventListener("click", () => {
  pcOption();
  if (randomNumber === 0) {
    resultHeader.innerHTML = "You Won!";
    resultHeader.style.color = "green";
    myScore++;
  } else if (randomNumber === 1) {
    resultHeader.innerHTML = "It's A Draw!";
  } else if (randomNumber === 2) {
    resultHeader.innerHTML = "You Lost!";
    resultHeader.style.color = "red";
    pcScore++;
  }
  resultParagraph.innerHTML = `Computer chose ${game[randomNumber]}`;
  modal.style.display = "block";
  playerDisplay.innerHTML = myScore;
  pcDisplay.innerHTML = pcScore;
});

choices[2].addEventListener("click", () => {
  pcOption();
  if (randomNumber === 0) {
    resultHeader.innerHTML = "You Lost!";
    resultHeader.style.color = "red";
    pcScore++;
  } else if (randomNumber === 1) {
    resultHeader.innerHTML = "You Won!";
    resultHeader.style.color = "green";
    myScore++;
  } else if (randomNumber === 2) {
    resultHeader.innerHTML = "It's A Draw!";
  }
  resultParagraph.innerHTML = `Computer chose ${game[randomNumber]}`;
  modal.style.display = "block";
  playerDisplay.innerHTML = myScore;
  pcDisplay.innerHTML = pcScore;
});

modal.addEventListener("click", (e) => {
  modal.style.display = "none";
});

//Can change 7 to 2 for longer results.
let r = (Math.random() + 1).toString(30).substring(2);
console.log("random", r);
