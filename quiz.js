const chalk = require('chalk');
var readlineSync = require('readline-sync');

console.log(chalk.cyanBright.bold("LET'S PLAY A GAME :)"));
console.log(chalk.blueBright.bold("FEW QUESTIONS WILL APPEAR AND YOU'LL HAVE TO ANSWER IT.."));
console.log(chalk.blueBright.bold("PERSON SCORING THE HIGHEST KNOWS") + chalk.whiteBright.bold(" MINAKSHI") + chalk.blueBright.bold(" THE BEST !!!"));

var userName = readlineSync.question(chalk.green.bold("What is your name? "));
console.log(chalk.bold.black.bgWhite("Hello " + userName + "! Let's start"));
console.log("");

var highscore = [{
  name: "Minakshi",
  score: 5,
}];

var qna = [
{
  question: "What is Minakshi's nickname?\na.Minky \nb.Milky \nc.Mickey",
  answer: "b",
},
{
  question: "What's her age?\na.21\nb.25\nc.19",
  answer: "a",
},
{
  question: "Who is Minakshi's favourite cricketer? \na.Virat Kohli \nb.M.S. Dhoni \nc.Rohit Sharma",
  answer: "b",
},
{
  question: "In which city she lives?\na.Ranchi\nb.Hyderabad\nc.Bangalore ",
  answer: "a",
},
{
  question: "Where she loves going to? \na.Trekking \nb.Beach \nc.Park",
  answer: "b"
}
]

var score = 0;

function start(question, answer)
{
  var userAns = readlineSync.question(chalk.yellow.bold(question + chalk.white.bold("\nAns:")));

  if(userAns === answer)
  {
    console.log(chalk.green.dim("You are right"));
    score++;
    console.log(chalk.cyan.bold("Current score: ") + chalk.whiteBright.bold(score));
    console.log("");
  }
  else{
    console.log(chalk.red.dim("OOOOOOPPS! You are wrong."));
    console.log(chalk.cyan.bold("Current score: ") + chalk.whiteBright.bold(score));
    console.log("");
  }
}

for(var i=0; i<qna.length;i++)
  {
    start(qna[i].question, qna[i].answer);
  }


console.log(chalk.green.bold("Your final score is: ") + chalk.yellow.bold(score));
console.log("");

if(score === highscore[0].score)
{
  console.log(chalk.blueBright.bold("YAYAYYAYA!!! You scored is the highest! Send a screenshot of your score and we'll update it with your deetails!! Congratulations!"));
}