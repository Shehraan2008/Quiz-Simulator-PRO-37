class Quiz {
  constructor() {}

  // get the gameState.
  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function (data) {
      gameState = data.val();
    });
  }

  // Update the gameState.
  update(state) {
    database.ref("/").update({
      gameState: state,
    });
  }

  // Start the quiz.
  async start() {
    if (gameState === 0) {
      player = new Player();
      var playerCountRef = await database.ref("playerCount").once("value");
      if (playerCountRef.exists()) {
        playerCount = playerCountRef.val();
        player.getCount();
      }
      question = new Question();
      question.display();
    }
  }

  // Play the game.
  play() {
    // Hide the uneccesory elemnts
    question.hide();
    // Get the Players.
    Player.getPlayerInfo();

    if (allPlayers !== undefined) {
      for (var plr in allPlayers) {
        var bingo = "1";
        if (bingo === allPlayers[plr].answer) {
          text(
            `Bingo! ${player.name} you get 10 billion points for chossing the correct option`,
            100,
            50
          );
        }
      }
    }
  }
}
