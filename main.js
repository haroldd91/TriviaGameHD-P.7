var panel = $("#quiz-area");

var countStartNumber = 30;

// Question set
var questions = [
    
    {
        question: "What animal weighs the most?",
        answers: ["A elephant", "A giraffe", "A rhino", "A blue whale"],
        correctAnswer: "A blue whale",
        image: "assets\yea.gif"
    },

    {
        question: "Which one of these animals are nocturnal?",
        answers: ["Shark", "Dog", "Rabbit", "Deer"],
        correctAnswer: "Shark",
        image: "assets\yeaa.gif"
    }

]

// Variable to hold our setInterval
var timer;

var game = {

    questions: questions,
    currentQuestion: 0,
    counter: countStartNumber,
    correct: 0,
    incorrect: 0,

    countdown: function() {
        game.counter--;
        $("#counter-number").html(game.counter);
        if (game.counter === 0) {
            console.log("TIMES UP");
            game.timeUp();
        }
    },

    
    loadQuestion: function() {
        timer = setInterval(game.countdown, 1000);
        panel.html("<h2>" + questions[this.currentQuestion].question + "</h2>");
        for (var i = 0; i < questions[this.currentQuestion].answers.length; i++)
        {
            panel.append("<button class='answer-button' id='button' data-name=' " +
            questions[this.currentQuestion].answer[i] + 
            "'>" + question[this.currentQuestion].answers[i] + "</button>");
        }
    },

    nextQuestion: function() {
        game.counter = countStartNumber;
        $("#counter-number").html(game.counter);
        game.currentQuestion++;
        game.loadQuestion();
    },

    timeUp: function() {
        
    }



}