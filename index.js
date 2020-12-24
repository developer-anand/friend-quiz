var readlineSync = require('readline-sync');

var userName = readlineSync.question('What is your name ? ' );
console.log("Welcome "+ userName + " Let's see how well you know Me ");
console.log('----------------------------');
var score = 0;

function playQuiz(question, answer){
  var userAnswer = readlineSync.question(question);

  if(userAnswer.toLowerCase() === answer){
    console.log('You are Right');
    score++;
    console.log('Your score is ', score);
  }
  else{
    score--;
    console.log('You are wrong ');
    console.log('Your score is ', score);
  }
}

var questions = [
  {
    question :'Where do i live ',
    answer: 'jaipur'
  },
  {
    question:'Tell me my Age ',
    answer : '20'
  },
  {
    question:'My faviorte programming language ',
    answer : 'c++'
  },
  {
    question:'Which stack i like ',
    answer : 'react'
  },
  {
    question:'Which movie i love ',
    answer : 'ironman'
  }

];

for(let i =0; i< questions.length; i++){
  playQuiz(questions[i].question, questions[i].answer);
}

console.log("\n");
console.log('Your final score is ', score );
console.log("\n");
console.log('Best Scores');

var highScore = [
  {
    name: "Sam",
    score: 4
  },
  {
    name: "Jay",
    score: 3
  }
];
for(var i=0; i<highScore.length; i++){
  console.log(highScore[i].name," ", highScore[i].score);
}


for(var i=0; i<highScore.length; i++){
    if(score>=5){
      highScore[i].push({name: userName, score: score});
      console.log('Booyah you won the quiz, please share screenshot');
      break;
    }
    else{
        console.log('Sry you lost Try again');
      }
    }
    
