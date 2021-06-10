// TODO: Create an array with five question objects
var questions= [
{ q: "The sky is blue",  a: 't'},
{ q: "The ocean is water",  a: 't'},
{ q: "Dogs are vegetarian",  a: 'f'},
{ q: "An apple is a vegetable",  a: 'f'},
{ q: "Javascript is fun",  a: 't'},
];
// TODO: Create a variable to keep track of the score
var score = 0;
// TODO: Iterate over the questions array and display each question in a confirmation box
for (var i = 0; i < questions.length; i ++){
var answer = confirm(questions[i].q); 

if (
(answer === true && questions[i].a === 't') ||
(answer === false && questions[i].a === 'f')
    ){
        window.alert("Thats the correct answer!")
        score++;
        console.log(score);
} else { 
    window.alert("Incorrect!")
    score--;
}
document.getElementById('displayscore').innerHTML = `Your final score is ${score}.`;
}
// TODO: Check the user's answer against the correct answer

// TODO: Alert the user if they are correct or wrong. Increment the score accordingly

// TODO: At the end of the game, alert the user with the final score
// alert score 
alert(`You've answered all the questions! Your final score is ${score}.`);