(function () {
  // Object that defines game outcomes
  const Outcomes = { Computer: 0, Human: 1, Draw: 2, Illegal: 3 };
  // Array containin the 3 game options
  const gameOptions = ["rock", "paper", "scissors"];
  // Function returning a random option
  function computerPlay() {
    const selection = Math.floor(Math.random() * 3);
    return gameOptions[selection];
  }
  // Function to compute
  function playRound(playerSelection, computerSelection) {
    const gameInputs = { Player: playerSelection.toLowerCase(), Computer: computerSelection };
    console.log(gameInputs);
    // If both selections are the same
    if (gameInputs.Player === gameInputs.Computer) {
      console.log("Draw...");
      return Outcomes.Draw;
    }
    // Player picks Rock
    if (gameInputs.Player === gameOptions[0]) {
      if (gameInputs.Computer === gameOptions[1]) {
        // Computer picks paper: Computer wins
        console.log(`Computer wins the round!\n${gameInputs.Computer.toUpperCase()[0] + gameInputs.Computer.slice(1)} beats ${gameInputs.Player.toUpperCase()[0] + gameInputs.Player.slice(1)}`);
        return Outcomes.Computer;
      } else {
        // Computer picks scissors: Player wins
        console.log(`Player wins the round!\n${gameInputs.Player.toUpperCase()[0] + gameInputs.Player.slice(1)} beats ${gameInputs.Computer.toUpperCase()[0] + gameInputs.Computer.slice(1)}`)
        return Outcomes.Human;
      }
    }
    // Player picks paper
    if (gameInputs.Player === gameOptions[1]) {
      if (gameInputs.Computer === gameOptions[2]) {
        // Computer picks scissors: Computer wins
        console.log(`Computer wins the round!\n${gameInputs.Computer.toUpperCase()[0] + gameInputs.Computer.slice(1)} beats ${gameInputs.Player.toUpperCase()[0] + gameInputs.Player.slice(1)}`);
        return Outcomes.Computer;
      } else {
        // Computer picks rock: Player wins
        console.log(`Player wins the round!\n${gameInputs.Player.toUpperCase()[0] + gameInputs.Player.slice(1)} beats ${gameInputs.Computer.toUpperCase()[0] + gameInputs.Computer.slice(1)}`);
        return Outcomes.Human;
      }
    }
    // Player picks scissors
    if (gameInputs.Player === gameOptions[2]) {
      if (gameInputs.Computer === gameOptions[0]) {
        // Computer picks rock: Computer wins
        console.log(`Computer wins the round!\n${gameInputs.Computer.toUpperCase()[0] + gameInputs.Computer.slice(1)} beats ${gameInputs.Player.toUpperCase()[0] + gameInputs.Player.slice(1)}`);
        return Outcomes.Computer;
      } else {
        // Computer picks paper: Player wins
        console.log(`Player wins the round!\n${gameInputs.Player.toUpperCase()[0] + gameInputs.Player.slice(1)} beats ${gameInputs.Computer.toUpperCase()[0] + gameInputs.Computer.slice(1)}`);
        return Outcomes.Human;
      }
    }
    // Player picks something else
    else {
      console.log("What...?");
      return Outcomes.Illegal;
    }
  }
  // Game
  function game() {
    const Score = { Player: 0, Computer: 0 };
    let playerSelection;
    let computerSelection;
    let limit = 5;
    for (let index = 0; index < limit; index++) {
      computerSelection = computerPlay();
      playerSelection = prompt("Rock, Paper, or Scissors?");
      let result = playRound(playerSelection, computerSelection);
    }
  }
  game();
})();