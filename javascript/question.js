class Question {
  constructor() {
    // The Inputs
    this.input = createInput("Nickname");
    this.input2 = createInput("Your Answer");

    // The Buttons  and Gretting.
    this.button = createButton("click me !");
    this.button2 = createButton("answer !");
    this.greeting = createElement("h3");

    // Quiz.
    this.question = createElement("h4");
    this.opt1 = createElement("p");
    this.opt2 = createElement("p");
    this.opt3 = createElement("p");
    this.opt4 = createElement("p");
  }

  // a function to hide elments.
  hide() {
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  }

  display() {
    correctAns = this.input2.value();

    // The Title.
    var title = createElement("h2");
    title.html("--- Periodic Wall of Elements ---");
    title.position(230, 170);

    // The Score Bourd:
    var scoreBourd = createElement("h2");
    scoreBourd.html("--- Scorebourd ---");
    scoreBourd.position(420, 170);
    scoreBourd.hide();

    // The Questions.
    this.question.html("What happens when we add Sulpher to Selenium ?");
    this.question.position(50, 300);
    this.question.hide();

    // The Inputs.
    this.input.position(520, 360);
    this.input2.position(520, 560);
    this.input2.hide();

    // The Buttons.
    this.button.position(590, 410);
    this.button.class("nes-btn is-success");
    this.button2.position(600, 600);
    this.button2.class("nes-btn is-success");
    this.button2.hide();

    // Options.
    this.opt1.html("1: It will smell like Channel");
    this.opt1.position(100, 400);
    this.opt1.hide();

    this.opt2.html("2: It will smell like Fart Spray");
    this.opt2.position(100, 450);
    this.opt2.hide();

    this.opt3.html("3: It will smell like normal");
    this.opt3.position(800, 400);
    this.opt3.hide();

    this.opt4.html("4: none of the above");
    this.opt4.position(800, 450);
    this.opt4.hide();

    // What happens when the button is pressed.
    this.button.mousePressed(() => {
      // Hide these elements.
      this.input.hide();
      this.button.hide();

      // Show these elements.
      this.question.show();
      this.input2.show();
      this.button2.show();
      this.opt1.show();
      this.opt2.show();
      this.opt3.show();
      this.opt4.show();

      // Increase the number Counts and index.
      player.name = this.input.value();
      playerCount += 1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);

      // The Greeting.
      this.greeting.html(
        `Welcome to the Quiz, ${player.name}, please answer the follwing question:`
      );
      this.greeting.position(150, 230);
    });

    // When we submit.
    this.button2.mousePressed(() => {
      title.hide();
      this.greeting.hide();
      this.question.hide();
      this.opt1.hide();
      this.opt2.hide();
      this.opt3.hide();
      this.opt4.hide();
      this.button2.hide();
      this.input2.hide();
      scoreBourd.show();
    });
  }
}
