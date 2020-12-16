var readlineSync = require('readline-sync');

var userName = readlineSync.question('What is your name ? ' );
console.log("Welcome "+ userName + " Let's see how well you know Me ");
var score = 0;

function playQuiz(question, answer){
  var userAnswer = readlineSync.question(question);

  if(userAnswer===answer){
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
  question1 = {
    question :'Where do i live ',
    answer: 'jaipur'
  },
  question2 = {
    question:'Tell me my Age ',
    answer : '20'
  },
  question3 = {
    question:'My faviorte programming language ',
    answer : 'c++'
  },
  question4 = {
    question:'Which stack i like ',
    answer : 'React'
  },
  question5 = {
    question:'Which movie i love ',
    answer : 'IronMan'
  }

];

for(let i =0; i< questions.length; i++){
  playQuiz(questions[i].question, questions[i].answer);
}


console.log('Your final score is ', score );
