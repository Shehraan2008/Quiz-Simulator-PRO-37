class Player {
  constructor() {
    this.index = null;
    this.name = null;
    this.answer = 0;
  }

  // Get the playerCOunt from Datbase.
  getCount() {
    var playerCountRef = database.ref("playerCount");
    playerCountRef.on("value", (data) => {
      playerCount = data.val();
    });
  }

  // Update the playerCount.
  updateCount(count) {
    database.ref("/").update({
      playerCount: count,
    });
  }

  // Update the index which will contain all the players.
  update() {
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name: this.name,
      // answer: this.answer,
      answer: correctAns,
    });
  }

  // Get player scores.
  static getPlayerInfo() {
    var playerInfoRef = database.ref("players");
    playerInfoRef.on("value", (data) => {
      allPlayers = data.val();
    });
  }
}
