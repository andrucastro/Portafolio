
//CHAPTER2
/*
// store the question in the variable 
const question = "What is Superman's real name?"

//display a pormt to the user wiht the question 
const answer = prompt(question);

//display an alert wiht the answer
alert(`You answered ${answer}`);
*/

//CHAPTER3
/*
//create an array with questions and answers 
const quiz = [
    ["What is Superman's real name?","Clark Kent"],
    ["What is Wonder Woman's real name?","Diana Prince"],
    ["What is Batman's real name?","Bruce Wayne"]
];

//variable to track score
let score = 0;
//"save the question in the variable 'questions' at the right and the answers in the variable answers at the left"
*/

//CHAPTER 4
const quiz = [
    ["What is Superman's real name?","Clark Kent"],
    ["What is Wonder Woman's real name?","Diana Prince"],
    ["What is Batman's real name?","Bruce Wayne"]
];

function start(quiz){
    let score = 0;
    // main game loop
    for(const [question,answer] of quiz){
        const response = ask(question);
        check(response,answer);
    }
    // end of main game loop
    gameOver();
    // function declarations
    function ask(question){
        return prompt(question);
    }
    //Fuction to chek right and wrong answers
    function check(response,answer){
        if(response === answer){
        alert('Correct!');
        score++;
        } else {
        alert(`Wrong! The correct answer was ${answer}`);
        }
    }
    //function to display the score at the end of the game 
    function gameOver(){
        alert(`Game Over, you scored ${score} point${score !== 1 ? 's' : ''}`);
    }
}
// run de game 
start(quiz);
