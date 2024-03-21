let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
  }

  document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

  function playGame(playerMove) {
      let computerMove = pickComputerMove ();
      let duelResult = '';

    if (playerMove === 'scissors') {
      if (computerMove == 1) {
        computerMove = 'rock';
        duelResult = 'You lose.';
      } else if (computerMove == 2) {
        computerMove = 'paper';
        duelResult = 'You win.';
      } else if (computerMove == 3) {
        computerMove = 'scissors';
        duelResult = 'Tie.';
      }

    } else if (playerMove === 'paper') {
        if (computerMove == 1) {
        computerMove = 'rock';
        duelResult = 'You win.';
      } else if (computerMove == 2) {
        computerMove = 'paper';
        duelResult = 'Tie.';
      } else if (computerMove == 3) {
        computerMove = 'scissors';
        duelResult = 'You lose.';
      }

    } else if (playerMove === 'rock') {
        if (computerMove == 1) {
        computerMove = 'rock';
        duelResult = 'Tie.';
      } else if (computerMove == 2) {
        computerMove = 'paper';
        duelResult = 'You lose.';
      } else if (computerMove == 3) {
        computerMove = 'scissors';
        duelResult = 'You win.';
      }}

    if (duelResult === 'You win.') {
      score.wins += 1;
    } else if (duelResult === 'You lose.') {
      score.losses += 1;
    } else if (duelResult === 'Tie.') {
      score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();

    document.querySelector('.js-result').innerHTML = duelResult;
    document.querySelector('.js-moves')
      .innerHTML = `You
        <img src="images/${playerMove}-emoji.png" alt="move" class="move-icon">
        <img src="images/${computerMove}-emoji.png" alt="move" class="move-icon">
        Computer`;
  }

  function updateScoreElement() {
    document.querySelector('.js-score')
      .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
  }

  function pickComputerMove () {
    let computerMove = Math.floor(Math.random() * 3) + 1;
    return computerMove;
  };