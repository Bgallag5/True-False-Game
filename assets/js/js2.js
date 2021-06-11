// TODO: Create an array with five question objects

playGame = function(){
var questions= [
    { q: "Jeffery Epstein didn't kill himself",  a: 't'},
    { q: "Dogs are vegetarian",  a: 'f'},
    { q: "An apple is a vegetable",  a: 'f'},
    { q: "In Lord of the Rings: the Two Towers, Sauruman dies and is brought back as Gandalf the White. ",  a: 'f'},
    { q: "Game of Thrones season 8 was a tragedy",  a: 't'},
    { q: `In Austin Powers, Mike Myers plays all of the following characters: 
    Austin Powers, Dr Evil, Fat Bastard, Goldmember, Number Two`,  a: 'f'},
    { q: "Originally, Jim from The Office was supposed to be played by Matt Damon",  a: 'f'},
    { q: "Stephen Curry is the NBA all time leader in 3 point shots made",  a: 'f'},
    { q: "Chocolate is toxic to BOTH dogs and cats",  a: 't'},
    { q: "Javascript is fun",  a: 't'},
    { q: "2 (a -3) + 4 b - 2 (a - b - 3) + 5 = 2 b + 5",  a: 'f'},
    { q: "The largest animal to ever live on earth is the blue whale",  a: 't'},
    { q: "Trees are 400 millions years older than grass",  a: 't'},
    { q: `All drug sniffing dogs are addicted to the drugs they sniff out. 
    That's why they're so eager to find the drugs.`,  a: 'f'},
    ];

    var score = 0;
  
    
    window.alert("Welcome to a True/False Game! Click 'OK' for true and 'Cancel' for false.")
   
    
    for (var i = 0; i < 5; i ++){
        var giveQuestion = questions[Math.floor(Math.random() * questions.length)]
        console.log(giveQuestion.q)

        var answer = confirm(giveQuestion.q); 
        
        if (
        (answer === true && giveQuestion.a === 't') ||
        (answer === false && giveQuestion.a === 'f')
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
}


playGame();

var playButton = document.getElementById('trueButton');
playButton.addEventListener('click', playGame);   
