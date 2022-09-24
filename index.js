let chalk = require("chalk");
let readlinesync = require("readline-sync");
let username = readlinesync.question("What is your Name?");
console.log(chalk.bgGreenBright.red(`Hey ${username},Welcome to How well do you know INDIA?`));
let score = 0;
function play(questions, answer) {
  let userAnswer = readlinesync.question(questions);
  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    console.log(chalk.bgGreen.blackBright("Your answer is right"));
    score++;
  }
  else {
    console.log(chalk.bgRed.blackBright("Your answer is wrong"));
    score--;
  }
  console.log(`Your score is ${score}`);
  console.log(`-----------------------`);
}

let listOfQuestions = [
  {
    question: "how many states are there in INDIA?",
    answer: "28"
  }, {
    question: 'Who is the first president of INDIA?',
    answer: 'Rajendra Prasad',
  }, {
    question: "Who is the first prime minister of INDIA?",
    answer: "Jawaharlal Nehru",
  }, {
    question: "how many spokes are there in ashok chakra?",
    answer: "24",
  },
  {
    question: "Which is the largest state in INDIA in terms of area?",
    answer: "Rajasthan",
  }, {
    question: "Which city is known as silicon valley of INDIA?",
    answer: "Bengaluru",
  }, {
    question: "Which state is known as INDIA's spice garden ?",
    answer: "Kerala",
  }, {
    question: "What is INDIA's first artificial satellite?",
    answer: "Aryabhata",
  }, {
    question: "Which Independence Day was celebrated by INDIA in 2022?",
    answer: "76",
  }, {
    question: "Which is the longest river in INDIA?",
    answer: "Indus",
  },
]

let highScores = [
  {
    name: "rittik",
    score: 9,
  }, {
    name: "rimi",
    score: 8,
  }, {
    name: "reek",
    score: 7,
  }
];


for (let i = 0; i < listOfQuestions.length; i++) {
  play(listOfQuestions[i].question, listOfQuestions[i].answer);
}

if (score > highScores[2].score) {
  console.log(chalk.bgCyanBright.magentaBright(`Yay!! ${username}, You are now one of the top 3 scorer`));
  console, log(`Send me a screenshot and i will update the scorer list.`);
}