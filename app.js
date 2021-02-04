(function () {
  const game = ["Rock", "Paper", "Scissors"];

  function computerPlay() {
    const selection = Math.floor(Math.random() * 3);
    return game[selection];
  }

  console.log(computerPlay());
})()