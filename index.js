var readlineSync = require('readline-sync')
const Database = require("@replit/database")
const db = new Database();
var highScore;
var username = readlineSync.question("Enter your name: ")
console.log("Welcome " + username + " to the How Well You Know Me!")

async function getValue() {
  let response = await db.get("highScore")
  return response;
}

async function play(q, a) {
  var useranswer = readlineSync.question(q);
  if (useranswer == a) {
    console.log("You are right! :)")
    score++;
  }
  else {
    console.log("You are wrong! :(")
  }
  console.log("Score is: " + score);
  console.log("............")
}

var question = [
  {
    q: "Am I older than 25? ",
    a: "no"
  },
  {
    q: "Do I study in GRIET? ",
    a: "yes"
  },
  {
    q: "Do I watch k-drama? ",
    a: "yes"
  },
  {
    q: "Was I born in the year 2002? ",
    a: "no"
  },
  {
    q: "Is my favorite color white? ",
    a: "no"
  },
  {
    q: "Do I live in Mumbai? ",
    a: "no"
  }
]
var score = 0;
for (var i = 0; i < question.length; i++) {
  play(question[i].q, question[i].a)
}
console.log("TOTAL SCORE : ", score);
validateAndStoreHighScore(score);
async function validateAndStoreHighScore(userscore) {
  try {
    await getValue().then((value) => { highScore = value; })
    if (!highScore) {
      highScore = userscore;
      await db.set("highScore", userscore)
    }
    if (userscore < highScore) {
      console.log("Yay! You have completed the quiz.Thank you");
      console.log("Your total score is: " + userscore);
      console.log("HighScore is :", highScore);
      console.log("Try beating the highscore next time")
    }
    else if (userscore == highScore) {
      console.log("Yay! You have completed the quiz. Thank you");
      console.log("Your total score is: " + userscore);
      console.log("HighScore is :", highScore);
      console.log("You matched the high score")
    } else if (userscore > highScore) {
      console.log("Yay! You have completed the quiz. Thank you");
      console.log("You have set a new high score :", userscore)
      db.set("highScore", userscore)
    }
  } catch (err) {
    console.log(err)
  }
}
