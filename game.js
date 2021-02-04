let playerChoise;
let comChoise;
let btns = document.querySelectorAll("button");
let players = document.querySelectorAll(".player");
let result;

start();

function start() {
  btns.forEach((btn) => {
    btn.addEventListener("click", playerMove);
  });
}

function playerMove() {
  btns.forEach((btn) => {
    btn.removeEventListener("click", playerMove);
  });
  playerChoise = this.dataset.move;
  console.log(playerChoise);

  computerMove();
}

function computerMove() {
  let randomizer = Math.floor(Math.random() * 3) + 1;
  if (randomizer == "1") {
    comChoise = "rock";
  } else if (randomizer == "2") {
    comChoise = "paper";
  } else {
    comChoise = "scissors";
  }
  console.log(comChoise);

  animationStart();
}

function animationStart() {
  players.forEach((player) => {
    player.classList.add("shake");
    player.addEventListener("animationend", showMove);
  });
}

function showMove() {
  players.forEach((player) => {
    player.classList.remove("shake");
    player.removeEventListener("animationend", showMove);

    document.querySelector("#player1").classList.add(playerChoise);
    document.querySelector("#player2").classList.add(comChoise);
  });

  setTimeout(detResult, 1200);
}

function detResult() {
  if (playerChoise == comChoise) {
    result = "draw";
  } else if (
    (playerChoise == "rock" && comChoise == "scissors") ||
    (playerChoise == "paper" && comChoise == "rock") ||
    (playerChoise == "scissors" && comChoise == "paper")
  ) {
    result = "win";
  } else {
    result = "lose";
  }

  console.log(result);

  showResult();
}

function showResult() {
  document.getElementById(result).classList.remove("hidden");

  setTimeout(restart, 5000);
}

function restart() {
  document.getElementById(result).classList.add("hidden");
  document.querySelector("#player1").classList.remove(playerChoise);
  document.querySelector("#player2").classList.remove(comChoise);
  start();
}
