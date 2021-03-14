var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var correctAns;
var question, player, game;

function setup() {
  canvas = createCanvas(1100, 500);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}

function draw() {
  if (playerCount === 1000) {
    quiz.update(1);
  }
  if (gameState === 1) {
    clear();
    quiz.play();
  }
}
