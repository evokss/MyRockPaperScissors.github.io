const MOVES = {
  rock: { beats: "scissors", losesTo: "paper" },
  paper: { beats: "rock", losesTo: "scissors" },
  scissors: { beats: "rock", losesTo: "paper" },
};

let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

const updateScore = () => {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
};

const getComputerMove = () => {
  const moves = Object.keys(MOVES);
  return moves[Math.floor(Math.random() * moves.length)];
};

const getDuelResult = (playerMove, computerMove) => {
  if (playerMove === computerMove) return "Tie.";
  return MOVES[playerMove].beats === computerMove ? "You win." : "You lose.";
};

const updateGameUI = (playerMove, computerMove, result) => {
  document.querySelector(".js-result").innerHTML = result;
  document.querySelector(".js-moves").innerHTML = `You
    <img src="images/${playerMove}-emoji.png" alt="move" class="move-icon">
    <img src="images/${computerMove}-emoji.png" alt="move" class="move-icon">
    Computer`;
};

const playGame = (playerMove) => {
  const computerMove = getComputerMove();
  const result = getDuelResult(playerMove, computerMove);

  if (result.includes("win")) score.wins++;
  else if (result.includes("lose")) score.losses++;
  else score.ties++;

  localStorage.setItem("score", JSON.stringify(score));
  updateScore();
  updateGameUI(playerMove, computerMove, result);
};

// Initial score display
updateScore();

const resetGame = () => {
  score = { wins: 0, losses: 0, ties: 0 };
  localStorage.removeItem("score");
  document.querySelector(".js-moves").innerHTML = "";
  document.querySelector(".js-result").innerHTML = "";
  updateScore();
};
