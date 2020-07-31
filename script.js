
//function to add HTML to start of page
function codeHTML() {

var h1EL = document.createElement("h1");
var pEl = document.createElement("p");
var startQuiz = document.createElement("button");

h1EL.textContent = "Coding Quiz Challenge";
pEl.textContent =  "Please answer the following code related questions within the time limit. You will be deducted points for each incorrect answer and your time will be reduced by ten seconds!";
startQuiz.textContent = "Start Quiz";
startQuiz.id = "start-button";

document.body.appendChild(h1EL);
document.body.appendChild(pEl);
document.body.appendChild(startQuiz);

h1EL.setAttribute("style", "text-align: center; color: green");
pEl.setAttribute("style", "text-align: center; color: green");
startQuiz.setAttribute("style", "background: blue; display: block; margin: 0 auto");

}

codeHTML();

//function to click start button and initiate quiz
function startQuiz() {
    console.log("the button submits stuff");
    
    }

//function for final results
function finalResult() {}

// Object for Quiz Questions and Answers
var myQuiz = [
{
    question: "which of these is not a JavaScript Data Type",
    answers: {
        a: "String",
        b: "Boolean",
        c: "Number",
        d: "Variable"
    },
    correctAnswer: "d"
},
{
    question: "which of these is not a JavaScript function?",
    answers: {
        a: "function myFunction",
        b: "var myFunction",
        c: "function notFunction",
        d: ".push()"
    },
    correctAnswer: "b"
},
{
    question: "which of these is not an HTML tag?",
    answers: {
        a: "<code>",
        b: "<div>",
        c: "<element>",
        d: "<strong>"
    },
    correctAnswer: "c"
},
{
    question: "which of these is not a markup language?",
    answers: {
        a: "JavaScript",
        b: "Python",
        c: "CSS",
        d: "HTML"
    },
    correctAnswer: "d"
},
];


//Query Selector and addEventLister for start quiz button;
var selectBtn = document.querySelector("#start-button");
selectBtn.addEventListener("click", startQuiz);



/* This is my psuedo code
HTML
1. develop HTML Structure of Code Quiz

CSS
2. develop styling for Code Quiz, get creative

Questions
-develop questions for the code quiz

JavaScript
3.  declare countdown variables
4.  addEventListerner ("click") to start button to begin function.
4a. I will need a variable set to the value of the function called set Interval, see ex 8.
4b. in the function we will decrement the countdown variable and present a question (i.e. append element <p> containing question in the function);
4c. I will also need to append an element that has a list of answers that are clickable <ul> of buttons </ul>;
4d. I will need to incorporate an add an event lister to the question and when clicked, the If statement in the function to determine if the answer is correct, increment score and display correct, otherwise subtract time (decrement) and display wrong;
4e. I will need to have the element (question) removed each time the user clicks a button and appends the new question.
5.  when all questions are answered or || countdown = 0, exit out of the function and call a new function called Score.
6.  Score function will append an input field for their initials where they can save their score.
6a. when the save button is clicked for user's score, the element will be removed
7.  I will have to create and append another input field for highscore, use set item and get item from local storage so the highscore can be saved. remember JSON Stringify and parse.

*/
