(function () {
  function Question(question, answer, correct) {
    this.question = question;
    this.answer = answer;
    this.correct = correct;
  }

  Question.prototype.displayQuestion = function () {
    console.log(this.question);

    for (var i = 0; i < this.answer.length; i++) {
      console.log(i + " " + this.answer[i]);
    }
  };

  Question.prototype.cheeckAns = function (ans, fullScore) {
    var sc;
    if (ans == this.correct) {
      console.log("YYYeesss.. Correct Answer :)");
      sc = fullScore(true);
    } else {
      console.log("Wrong answer.... :(");

      sc = fullScore(false);
    }
    this.displayScore(sc);
  };

  Question.prototype.displayScore = function (score) {
    console.log("=============");
    console.log("Your Total Score : " + score);
  };

  var q1 = new Question("JavaScript is the best Languadge.", ["Yes", "No"], 0);
  var q2 = new Question("2 + 2 = 5 is it correct?", ["Yes", "No", "both"], 1);
  var q3 = new Question(
    "Noakhali is a Glaxy?",
    ["Yes", "No", "only Noakhali knows"],
    2
  );

  var question = [q1, q2, q3];

  function totalScore() {
    var score = 0;
    return function (correct) {
      if (correct) {
        score++;
      }
      return score;
    };
  }

  var keepScore = totalScore();

  function nextQuestion() {
    var n = Math.floor(Math.random() * question.length);

    question[n].displayQuestion();

    var correctAns = prompt("What do you thik?.....");

    if (correctAns !== "exit") {
      question[n].cheeckAns(correctAns, keepScore);
      nextQuestion();
    }
  }

  nextQuestion();
})();
